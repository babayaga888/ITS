<?php
    $dbUser = "root";
    $dbPassword = "";
    $host = "localhost:3306";
    $dataBase = "databaseusers";
    session_start();
   $databasecon = mysqli_connect($host,$dbUser,$dbPassword,$dataBase);

   

    function alert($message){echo "<script>alert('$message');</script>";
    }
      

?>