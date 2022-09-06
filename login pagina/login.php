<?php

session_start();

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "duck1e";
$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
include("functions.php");


if ($_SERVER['REQUEST_METHOD'] == "POST") {
    //something was posted
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!empty($username) && !empty($password) && !is_numeric($username)) {
        //read from database
        $query = "select * from users where username = '$username' limit 1";
        $result = mysqli_query($con, $query);

        if ($result) {
            if ($result && mysqli_num_rows($result) > 0) {
                $user_data = mysqli_fetch_assoc($result);

                if ($user_data['password'] === $password) {
                    $_SESSION['id'] = $user_data['id'];
                    header("Location: index.html");
                    die;
                }
            }
        }

        echo "wrong username or password!";
    } else {
        echo "wrong username or password!";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="login-style.css">
</head>

<body>
    <div class="header-wrap">
      <div class="header"><div class="title">DUCK1E</div></div>
        <div class="belowheader text-right "></div>
    </div>

    <div class="main-login-block">
    <div class="container">	
	<form method="post">
        <input id="username" type="text" placeholder="Enter Username" name="username" required>
    
        <input id="password"  type="password" placeholder="Enter Password" name="password" required>
    
        <form action="overzicht.html">
         <button type="submit">Login</button>
      </form>
		</form>
      </div>
    </div>

    

    <div class="footerwrap">
    <div class="abovefooter"></div>
    <div class="footer p-2">
    </div>
</body>
</html>