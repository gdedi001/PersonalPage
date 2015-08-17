<?php
    if(isset($_POST["submit"]))
    {
        $to = "me@gabrieldediego.com";
        $subject = "Personal Website Inquiry";
        
        // Information pulled from the form element in index.html
        $from = $_POST["fullname"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];
        
        $body = "From: $name\n
                 E-mail: $email\n
                 Phone: $phone\n
                 Message: $message";
        
        mail($to, $subject, $body); // PHP mail() function allows you to send emails directly from a script.
        
        include("../submitted.html");
    }
?>