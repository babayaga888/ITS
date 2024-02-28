<?php
    // Include the database connection file
    require_once "dataBaseCon.php";

    // Check if the "error" GET parameter is set
    if(isset($_GET["error"])){
        // Check if the error is "UserExist"
        if($_GET["error"]=="UserExist"){
            // Display an alert message
            alert("User Already Exist");
        }
    }else{
        // Do nothing if the "error" GET parameter is not set
        null;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="css/register.css">
</head>
<body>
    <section class= "wrapper">
        <div id="space">
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
        </div>
        <nav>
            <img src="images/rick.png" class="logo-img">
            

        </nav>

    </section>
    <div class="box">

        <h1 style="height: 14; text-align: center;">Register</h1>
        <form autocomplete="off" class="form-group" id="login-form" action="logInData.php" method="post">
            <div class="inputbox">
                <p>Enter fullName:</p>
                <input type="text" id="login-form"  class="form-control"
                    onkeydown="validation()" required name="username">
                <p>Enter age:</p>
                 <input type="number" id="login-form"  class="form-control"
                    onkeydown="validation()" required name="age">
                <p>Enter grade-level:</p>
                 <input type="text" id="login-form"  class="form-control"
                    onkeydown="validation()" required name="grade-level">

                    
            </div>
            <button type="submit" class="button" name="submit">Enroll</button>
           
        </form>
    </div>
</body>
</html>
