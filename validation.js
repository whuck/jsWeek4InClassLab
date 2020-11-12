$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName: {
                required: true
            },
            grade: {
                required: true,
                min: 5,
                max: 8,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: {
                required: "first name is required!"
            },
            grade: {
                required: "grade is required!",
                min: "minimum grade is 5",
                max: "minimum grade is 8",
                digits: "please enter in a number"
            }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
           var name = $("#firstName").val();
            var grade = $("#grade").val();
            $("#message").text(`signed up ${name} for ${grade} grade camp!`);


    }

    $(registrationForm).validate({
        submitHandler: runMyProgram,
        rules: myRules,
        messages: myMessages
    });


});