﻿/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	var Event = tinymce.dom.Event, each = tinymce.each, DOM = tinymce.DOM;

	/**
	 * This plugin a context menu to TinyMCE editor instances.
	 *
	 * @class tinymce.plugins.ContextMenu
	 */
	tinymce.create('tinymce.plugins.muacontextmenu', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @method init
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed) {
			var t = this, showMenu, contextmenuNeverUseNative, realCtrlKey;

			t.editor = ed;

			contextmenuNeverUseNative = ed.settings.contextmenu_never_use_native;

			/**
			 * This event gets fired when the context menu is shown.
			 *
			 * @event onContextMenu
			 * @param {tinymce.plugins.ContextMenu} sender Plugin instance sending the event.
			 * @param {tinymce.ui.DropMenu} menu Drop down menu to fill with more items if needed.
			 */
			t.onContextMenu = new tinymce.util.Dispatcher(this);

			showMenu = ed.onContextMenu.add(function(ed, e) {
				// Block TinyMCE menu on ctrlKey and work around Safari issue
				if ((realCtrlKey !== 0 ? realCtrlKey : e.ctrlKey) && !contextmenuNeverUseNative)
					return;

				Event.cancel(e);

				// Select the image if it's clicked. WebKit would other wise expand the selection
				if (e.target.nodeName == 'IMG')
					ed.selection.select(e.target);

				t._getMenu(ed).showMenu(e.clientX || e.pageX, e.clientY || e.pageY);
				Event.add(ed.getDoc(), 'click', function(e) {
					hide(ed, e);
				});

				ed.nodeChanged();
			});

			ed.onRemove.add(function() {
				if (t._menu)
					t._menu.removeAll();
			});

			function hide(ed, e) {
				realCtrlKey = 0;

				// Since the contextmenu event moves
				// the selection we need to store it away
				if (e && e.button == 2) {
					realCtrlKey = e.ctrlKey;
					return;
				}

				if (t._menu) {
					t._menu.removeAll();
					t._menu.destroy();
					Event.remove(ed.getDoc(), 'click', hide);
					t._menu = null;
				}
			}

			ed.onMouseDown.add(hide);
			ed.onKeyDown.add(hide);
			ed.onKeyDown.add(function(ed, e) {
				if (e.shiftKey && !e.ctrlKey && !e.altKey && e.keyCode === 121) {
					Event.cancel(e);
					showMenu(ed, e);
				}
			});
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @method getInfo
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Contextmenu',
				author : 'Moxiecode Systems AB',
				authorurl : 'http://tinymce.moxiecode.com',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/contextmenu',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		_getMenu : function(ed) {
			var t = this, m = t._menu, se = ed.selection, col = se.isCollapsed(), el = se.getNode() || ed.getBody(), am, p;

			if (m) {
				m.removeAll();
				m.destroy();
			}

			p = DOM.getPos(ed.getContentAreaContainer());

			m = ed.controlManager.createDropMenu('contextmenu', {
				offset_x : p.x + ed.getParam('contextmenu_offset_x', 0),
				offset_y : p.y + ed.getParam('contextmenu_offset_y', 0),
				constrain : 1,
				keyboard_focus: true
			});

			t._menu = m;

			m.add({title : 'muaadvanced.cut_desc', icon : 'cut', cmd : 'Cut'}).setDisabled(col);
			m.add({title : 'muaadvanced.copy_desc', icon : 'copy', cmd : 'Copy'}).setDisabled(col);
			m.add({title : 'muaadvanced.paste_desc', icon : 'paste', cmd : 'Paste'});
			m.add({title : 'paste.paste_text_desc', icon : 'pastetext', cmd : 'mcePasteText'});
			m.addSeparator();

			if (!(ed.dom.getParent(el, 'td') || ed.dom.getParent(el, 'th') || ed.dom.select('td.mceSelected,th.mceSelected').length)) {			
				m.add({title: 'contextmenu.left', icon: 'justifyleft', cmd: 'JustifyLeft' });
				m.add({title: 'contextmenu.center', icon: 'justifycenter', cmd: 'JustifyCenter' });
				m.add({title: 'contextmenu.right', icon: 'justifyright', cmd: 'JustifyRight' });
			}

			t.onContextMenu.dispatch(t, m, el, col);

			return m;
		}
	});

	// Register plugin
	tinymce.PluginManager.add('muacontextmenu', tinymce.plugins.muacontextmenu);
})();
