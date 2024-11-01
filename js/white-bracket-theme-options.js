jQuery(document).ready(function($) {
    var wrapper         = $(".add-new-option-container"); //Fields wrapper
    var add_button      = $(".add-more-options"); //Add button ID
    var option_type     = 'input';
    var option_id       = 1;

    $('select[name="option-type"]').change(function(){
        option_type = $(this).val();
    });
    
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(option_type == 'input'){
            $(wrapper).append('<div class="row"><div class="option-title"><input type="text" name="option'+option_id+'[]" /></div><div class="option-type"><input type="text" name="option'+option_id+'[]" value="'+option_type+'" readonly="readonly" /></div><div class="option-value"><input type="text" name="option'+option_id+'[]" /></div><a href="#" class="remove-option button button-primary button-large">Remove</a></div></div>');
            option_id++;
        } else if( option_type == 'wysiwyg' ){
            $(wrapper).append('<div class="row"><div class="option-title"><input type="text" name="option'+option_id+'[]" /></div><div class="option-type"><input type="text" name="option'+option_id+'[]" value="'+option_type+'" readonly="readonly" /></div><div class="option-value"><textarea placeholder="Will become a WYSIWYG editor upon saving." name="option'+option_id+'[]"></textarea></div><a href="#" class="remove-option button button-primary button-large">Remove</a></div></div>');
            option_id++;
        } else if( option_type == 'file-link' ){
            $(wrapper).append('<div class="row"><div class="option-title"><input type="text" name="option'+option_id+'[]" /></div><div class="option-type"><input type="text" name="option'+option_id+'[]" value="'+option_type+'" readonly="readonly" /></div><div class="option-value"><input type="text" name="option'+option_id+'[]" readonly="readonly" class="file-link-input" /><a href="#" class="file-link-button button button-primary button-large">Select File</a></div><a href="#" class="remove-option button button-primary button-large">Remove</a></div></div>');
            option_id++;
        }
    });
    
    $(wrapper).on("click",".remove-option", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove();
    })

    $('.success').delay(2500).slideUp();

    $('.toggle-content').click(function(){
        $(this).parent().siblings('.row-content').slideToggle();
        $(this).parent().toggleClass('active');
    });

    $('#wb-settings-tab').click(function(){
        $('.wb-content').slideUp();
        $('.wb-settings').delay(500).slideDown();
        $('.wb-analytics').slideUp();
        $('.wb-documentation').slideUp();
        $('#wb-settings-tab').addClass('active');
        $('#wb-content-tab').removeClass('active');
        $('#wb-analytics-tab').removeClass('active');
        $('#wb-documentation-tab').removeClass('active');
    });
    $('#wb-content-tab').click(function(){
        $('.wb-settings').slideUp();
        $('.wb-content').delay(500).slideDown();
        $('.wb-analytics').slideUp();
        $('.wb-documentation').slideUp();
        $('#wb-content-tab').addClass('active');
        $('#wb-analytics-tab').removeClass('active');
        $('#wb-settings-tab').removeClass('active');
        $('#wb-documentation-tab').removeClass('active');
    });
    $('#wb-analytics-tab').click(function(){
        $('.wb-settings').slideUp();
        $('.wb-content').slideUp();
        $('.wb-analytics').delay(500).slideDown();
        $('.wb-documentation').slideUp();
        $('#wb-content-tab').removeClass('active');
        $('#wb-analytics-tab').addClass('active');
        $('#wb-settings-tab').removeClass('active');
        $('#wb-documentation-tab').removeClass('active');
    });
    $('#wb-documentation-tab').click(function(){
        $('.wb-settings').slideUp();
        $('.wb-content').slideUp();
        $('.wb-analytics').slideUp();
        $('.wb-documentation').delay(500).slideDown();
        $('#wb-content-tab').removeClass('active');
        $('#wb-analytics-tab').removeClass('active');
        $('#wb-settings-tab').removeClass('active');
        $('#wb-documentation-tab').addClass('active');
    });

    $('.colour-picker').wpColorPicker();

    $(wrapper).on("click",".file-link-button", function(e){
        e.preventDefault();

        var white_bracket_uploader;
        var file;
        var input = $(this).siblings('input');

        //If the uploader object has already been created, reopen the dialog
        if (white_bracket_uploader) {
            white_bracket_uploader.open();
            return;
        }

        //Extend the wp.media object
        white_bracket_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose File',
            button: {
                text: 'Choose File'
            },
            multiple: false
        });

        //When a file is selected, grab the URL and set it as the text field's value
        white_bracket_uploader.on('select', function() {
            file = white_bracket_uploader.state().get('selection').first().toJSON();
            $(input).val(file.url);
        });

        //Open the uploader dialog
        white_bracket_uploader.open();
    });

    $(".change-file-link").click(function(e){
        console.log('here');
        e.preventDefault();

        var white_bracket_uploader;
        var file;
        var input = $(this).siblings('input.file-link-link');

        //If the uploader object has already been created, reopen the dialog
        if (white_bracket_uploader) {
            white_bracket_uploader.open();
            return;
        }

        //Extend the wp.media object
        white_bracket_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose File',
            button: {
                text: 'Choose File'
            },
            multiple: false
        });

        //When a file is selected, grab the URL and set it as the text field's value
        white_bracket_uploader.on('select', function() {
            file = white_bracket_uploader.state().get('selection').first().toJSON();
            $(input).val(file.url);
        });

        //Open the uploader dialog
        white_bracket_uploader.open();
    });

});