$(document).ready(function () {
    $('#register-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 6
            },
            toc: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Please, enter a username.",
                minlength: "Your username must be at least 4 characters long."
            },
            email: {
                required: "Please, enter a E-mail.",
                minlength: "Your E-mail must be at least 5 characters long."
            },
            password: {
                required: "Please, enter a password.",
                minlength: "Your password must be at least 5 characters long."
            },
            toc: {
                required: "You must agree to the Terms of Conditions to use Tasker."
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});