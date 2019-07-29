$(function(){
    $("#login").submit((event) => {
        
        event.preventDefault();
        
        let values = {
            username: $("#username").val(),
            password: $("#password").val()
        };

        let successCallback = (data) => {
            // do something
            if (!data.ok){
                $("#message").html("Username and/or password invalid");
            } else {
                $("#message").html("Successfully logged in!")
            }
        }

        $.post({
            url: "/backend",
            data: values,
            success: successCallback,
            dataType: "json"
        })
    })
})