$(document).ready(function() {
    $('#show_password').on({
        'click': function() {
            var paswordField = $("#password");
            var passwordFieldTpye = paswordField.attr('type');
            if (passwordFieldTpye == "password") {
                paswordField.attr('type', 'text');
                $(this).text('Show Password');
            }
        }
    });



    $('#hide_password').on({
        'click': function() {
            var paswordField = $("#password");
            var passwordFieldTpye = paswordField.attr('type');
            if (passwordFieldTpye == "password") {
                $(this).text('Hide  Password');


            } else {
                paswordField.attr('type', 'password');

            }
        }
    });
});