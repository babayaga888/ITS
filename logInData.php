<html>
    <body>                                                                 
        <?php

            if(isset($_POST["submit"])){
                require "dataBaseCon.php";
                $user = $_POST["username"];     
                $age = $_POST["age"];
                $grade = $_POST["grade-level"];
               // $gradeLevel = array("Grade 7", "Grade 8", "Grade 9", "Grade 10");
                
                 //foreach($gradeLevel as $level){
                    if(empty($user) or empty($age) or empty($grade) ){

                        echo "No Data";
                    }else if(!preg_match("/^[a-zA-Z0-9]*/", $user)){
                        echo "Invalid";
                    
                     }else if (!preg_match("/^[a-zA-Z0-9]*/", $grade )){
                         echo "Invalid Grade-Level";
                    
                     }else{
                        $sql = "SELECT * FROM users where username=?";
                        $stmt = mysqli_stmt_init($databasecon);

                    }   if(!mysqli_stmt_prepare($stmt, $sql)){
                         echo "Database Error";

                    }else{
                        mysqli_stmt_bind_param($stmt, "s", $user);
                        mysqli_stmt_execute($stmt);
                        mysqli_stmt_store_result($stmt);

                        $records = mysqli_stmt_num_rows($stmt);

                    }if($records >0){
                        header("Location: register.php?error=UserExist");

                    }else{
                            $sql = "INSERT INTO `users`(`username`, `age`, `gradeLevel`) VALUES (?,?,?)";
                            $stmt = mysqli_stmt_init($databasecon);
                        }   if(!mysqli_stmt_prepare($stmt, $sql)){
                            echo "Database Error";

                        }else{
                            mysqli_stmt_bind_param($stmt, "sss", $user, $age, $grade);
                            mysqli_stmt_execute($stmt);
                            echo header("Location:index.php");
                        }

               
            
                
                
            }else{
                echo "error";
            }
                


        ?>
    </body>
</html>