<?php
        // Connect to the database
        require_once "databaseCon.php";

        // Check if there is an error in the URL
        if(isset($_GET["error"])){
            // Check the specific error and display an appropriate alert
            if($_GET["error"]=="InvalidData"){
                alert("Invalid");
            }else if($_GET["error"]=="Denied"){
                alert("Access Restricted");
            }else{
                alert($_GET["error"]);
            }
        }else{
            // If there is no error, do nothing
            null;
        }
    ?>
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Universe</title>
    <link rel="stylesheet" href="css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
    
    
</head>

<body>
  <!-- Wrapper for the page content -->
  <section class="wrapper">
        <!-- Div for the space background effect -->
        <div id="space">
            <!-- Five elements for the star background effect -->
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
        </div>
        <!-- Navigation bar -->
        <nav class="nav-bar">
            <!-- Logo image -->
            <img src="images/rick.png" class="logo-img">
            <div class="title">THE UNIVERSE</div>
            <!-- Toggle button for the navbar on small screens -->
            <div href="#" class="toggle-button">
                <div class="bar"> </div>
                <div class="bar"> </div>
                <div class="bar"> </div>
            </div> 
           
            <div class="nav-links">
                <!-- Unordered list for the nav links -->
                <ul>
                    <!-- Nav links for About and About Our Team pages -->
                    <li><a href="about.html">About</a></li>
                    <li><a href="aboutTeam.html">About Our Team</a></li>
                    <!-- Nav link for Contact page -->
                    <li><a  href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </section>
    
    
  <!--This HTML code is for a form that allows the user to enter their name, age, and grade level.
   It also includes an avatar image that plays a sound when clicked and a register button that redirects to the register page.
    The form uses the verifyUser.php file to process the user's input and the validation() function to validate the input.
     The subtext element is used to display a message to the user.-->        
               
    <div class="reg-box">
    <!-- Avatar image that plays a sound when clicked -->
    <img src="images/avatar.png" class="avatar-img" onclick="document.getElementById('rick-voice').play(); return true;">
    <!-- Audio element with the sound file -->
    <audio id="rick-voice">
        <source src="audio/rick-audio.wav" type="audio/wav">
    </audio> 
    <!-- Heading for the form -->
    <h1 style="height: 14;">Enter Info</h1>
    <!-- Form for entering user information -->
    <form autocomplete="off" class="form-group" id="login-form" action="verifyUser.php" method="post">
        <!-- Div for the form inputs -->
        <div class="inputbox">
            <!-- Label and input for the name -->
            <p>Name</p>
            <input type="text" id="login-form" placeholder="name" class="form-control"
                onkeydown="validation()" required name="username">
            <!-- Label and input for the age -->
            <p>Age</p>
            <input type="number" id="login-form" placeholder="age" class="form-control"
                onkeydown="validation()" required name="age">
            <!-- Label and input for the grade level -->
            <p>Grade level</p>
            <input type="text" id="login-form" placeholder="grade level" class="form-control"
                onkeydown="validation()" required name="grade-level">
            <!-- Span element for displaying a message -->
            <b><span id="subtext"></span></b>
        </div>
        <!-- Empty div -->
        <div class="input"></div>
        <!-- Button for submitting the form -->
        <button type="submit" class="button" name="submit" >Proceed</button>
    </form>
    <!-- Div for the register button -->
    <div>
        <!-- Form for redirecting to the register page -->
        <form action="register.php">
            <!-- Button for going to the register page -->
            <button type="submit" class="register" >Register</button>
        </form>
    </div>
</div>
      
<script src="js/navbar.js"></script>
  

        
</body>

</html>

