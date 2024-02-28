/**This page is use for verifying users and the codes below
 are for checking if users exist and already registered to the database */


<html>
<?php
// Include the database connection file
include "databaseCon.php";

// Now you can use the $databasecon variable
// Initialize a statement using the database connection
$stmt = mysqli_stmt_init($databasecon);


    // Check if the form has been submitted
    if(isset($_POST["submit"])){
        // Store the form values in variables
        $user = $_POST["username"];     
        $age = $_POST["age"];
        $grade = $_POST["grade-level"];
        // Check if any of the form values are empty
        if(empty($user) or empty($age) or empty($grade) ){
            // Redirect to the index page with an error message
            header("Location: index.php?error=InvalidData");
        }else{
            // Select all records from the users table where the username, age, and grade level match the form values
            $sql = "SELECT * FROM users where username=? and age=? and gradeLevel=? ";
            // Initialize a statement using the database connection
            $stmt = mysqli_stmt_init($databasecon);
        }
        // Check if the statement preparation failed
        if(!mysqli_stmt_prepare($stmt, $sql)){
            // Display an error message
            echo "Database Error";
        }else{
            // Bind the form values to the statement as parameters
            mysqli_stmt_bind_param($stmt, "sss", $user, $age, $grade);
            // Execute the statement
            mysqli_stmt_execute($stmt);
            // Store the result of the statement
            mysqli_stmt_store_result($stmt);
            // Get the number of rows returned by the statement
            $records = mysqli_stmt_num_rows($stmt);
        }
        // Check if there are any matching records
        if($records > 0){
            // Set a session variable and redirect to the pre-test page
            $_SESSION["UserLoggedIn"];
            header("Location:pre-test.html");
        }else{
            // Redirect to the index page with an error message
            header("Location: index.php?error=InvalidData");
        }
    }else{
        // Redirect to the index page with an error message
        header("Location: index.php?error=Denied");
    }
?>

</html>