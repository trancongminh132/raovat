var maxNumID = 6;
(function($) {
    $.fn.extend({
        photoUpload: function(options) {    		
            var opt = $.extend({}, $.uploadSetUp.defaults, options);
            if (opt.file_types.match('jpg') && !opt.file_types.match('jpeg')) {
                opt.file_types += ',jpeg';
            }
            $this = $(this);
            new $.uploadSetUp(opt);
        },
        photoDel: function(id)
        {
            //$('#li_'+id).remove();
            submitID--;
        }
    });

    $.uploadSetUp = function(opt) {
        var elm_input;        
        opt.maxNumID = parseInt(opt.maxNumID);       
                
        /*Add global variable*/       
        maxNumID = opt.maxNumID;
                
        $('body').append($('<div style="display: none;"></div>').append($('<iframe width="0" height="0" src="about:blank" id="'+ opt.prefix +'myFrame" name="'+ opt.prefix +'myFrame"></iframe>')));
        elm_input = createElmInput(opt);
        $this.append(elm_input);
        $("#"+ opt.prefix +"myFrame").after($('<form target="'+ opt.prefix +'myFrame" enctype="multipart/form-data" action="' + opt.ajaxFile + '" method="POST" name="'+ opt.prefix +'myUploadForm" id="'+ opt.prefix +'myUploadForm" style="display:none"></form>'));
						
		$("input.file").attr('readonly','readonly');
		
        //Init load file
        initFile(opt);
        init(opt);
    };

    $.uploadSetUp.defaults = {
        // image types allowed
        file_types: "jpg,gif,png",
        // php script
        ajaxFile: "",
        maxNumID: 40,
        prefix: "",
		seckey: "",
		width: 250,
		height: 250,
        callback: null
    };

    function createElmInput(opt)
    {
		var input = '<input type="hidden" id="width" name="width" value="'+ opt.width +'" /><input type="hidden" id="height" name="height" value="'+ opt.height +'" /><input type="hidden" id="signkey" name="signkey" value="'+ opt.seckey +'" /><input type="file" name="files" rel="1" id="'+ opt.prefix  +'Filedata_1" class="file" />';
		return input;
    };
	
    //Init load file
    function initFile(opt)
    {
        //Bind
        $('#'+ opt.prefix +'Filedata_1').bind('change', function(e)
        {
            if(submitID > 39)
            {
                $('#'+ opt.prefix +'msg_error').show();
                $('#'+ opt.prefix +'msg_error').html('Chỉ được upload tối đa 40 tấm ảnh !');
            }
            else
            {
                if (checkFileType(opt, this.value))
                {
                    var oldElement = this;
                    var newElement = $(oldElement).clone();
                    $(oldElement).attr('id', opt.prefix +'Filedata');
                    $(oldElement).attr('name', 'files');
                    $(oldElement).attr('class', 'clone');
                    $(oldElement).before(newElement);
					var newSignElement = $('#signkey').clone();
					var newWidthElement = $('#width').clone();
					var newHeightElement = $('#height').clone();
				    $('#'+ opt.prefix +'myUploadForm').empty();
                    $(oldElement).appendTo('#'+ opt.prefix +'myUploadForm');
					$(newSignElement).appendTo('#'+ opt.prefix +'myUploadForm');
					$(newWidthElement).appendTo('#'+ opt.prefix +'myUploadForm');
					$(newHeightElement).appendTo('#'+ opt.prefix +'myUploadForm');
                    $('#'+ opt.prefix +'spanLoading').html('<img width="16" height="11" src="'+imgurl+'/loading_small.gif" />');
                    $('#'+ opt.prefix +'myUploadForm').submit();
                    submitID++;
                }
            }
        });
    }
			
    //check if file extension is allowed
    function checkFileType(opt, file_) {
        var ext_ = file_.toLowerCase().substr(file_.toLowerCase().lastIndexOf('.') + 1);
        if (!opt.file_types.match(ext_)) {
            alert('File ảnh không hợp lệ');
            return false;
        } 
        else return true;
    };
    
    function init(opt) {
        // execute event.submit when form is submitted
        $('#'+ opt.prefix +'myUploadForm').submit(function(){
            var bool = event.submit(this);
            initFile(opt);
            return bool;
        });        
                
        // function to handle form submission using iframe
        var event = {
            // setup iframe
            frame: function(_form) {
                $("#"+ opt.prefix +"myFrame")
                .empty()
                .one('load',  function() {
                    event.loaded(this, _form)
                });
            },
            // call event.submit after submit
            submit: function(_form) {
                event.frame(_form);
            },
            // display results from submit after loades into iframe
            loaded: function(id, _form) {            	
                var d = frametype(id);
                var data = d.body.innerHTML.replace(/^\s+|\s+$/g, '');                
                try
                {
                    try
                    {
                        var resp = eval('(' + data + ')');
						
                        if (opt.callback != null)
                        {
                            opt.callback(resp);
                        }
                    //callbackUpload(resp);
                    }
                    catch (ex){
                        alert(ex);
                    }
                    if(typeof rs == 'undefined')
                    {
                        var rs = null;
                    }
                }
                catch(ex)
                {
                    alert("Có lỗi xảy ra trong quá trình đăng ảnh. \nVui lòng thử lại lần nữa.");
                }
            },
            onerror: function(){
                try
                {
                }
                catch(ex)
                {
                    alert(ex);
                }
            }
        };		
        
        // check type of iframe
        function frametype(fid) {
            return (fid.contentDocument) ? fid.contentDocument: (fid.contentWindow) ? fid.contentWindow.document: window.frames[fid].document;
        };       
    };	
})(jQuery);