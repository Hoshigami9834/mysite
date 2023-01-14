$(document).ready(function() {
    $("#btnClickMe").on("click", function(event) {
        event.preventDefault()

        //Name
        var NameElement = $('#Name')
        var errorNameElement = $('#errorName')
        var NameValue = NameElement.val()

        if (NameValue == '') {
            errorNameElement.html('This field is required')
        } else {
            errorNameElement.html('')
        }

        //email
        var EmailElement = $('#Email')
        var errorEmailElement = $('#errorEmail')
        var EmailValue = EmailElement.val()

        if (EmailValue == '') {
            errorEmailElement.html('This field is required')
        } else {
            errorEmailElement.html('')
        }
        
        //message
        var MessageElement = $('#Message')
        var errorMessageElement = $('#errorMessage')
        var MessageValue = MessageElement.val()

        if (MessageValue == '') {
            errorMessageElement.html('This field is required')
        } else {
            errorMessageElement.html('')
        }
        // success
        if (MessageValue != '' && NameValue != '' && EmailValue != '') {
            alert('Message sent successfully.')
        }
    })
})