<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$connectionString = "host= dbname= user= password=";

// Connecting, selecting database
//        $dbconn = pg_connect($connectionString)
//                or die('Could not connect: ' . pg_last_error());
//        $query = "select * from upload;";
//        $result = pg_query($query) or die('Query failed: ' . pg_last_error());
//        $line = pg_fetch_row($result);
//        echo $line;

//if ($_FILES["upfile"]["error"] > 0) {
//    echo "Error: " . $_FILES["upfile"]["error"] . "<br />";
//} else {
//    echo "Upload: " . $_FILES["upfile"]["name"] . "<br />";
//    echo "Type: " . $_FILES["upfile"]["type"] . "<br />";
//    echo "Size: " . ($_FILES["upfile"]["size"] / 1024) . " Kb<br />";
//    echo "Stored in: " . $_FILES["upfile"]["tmp_name"];
//}


//randomString =
$rand = sha1(uniqid(mt_rand(), true));
//echo $rand;

$linkData = addslashes(file_get_contents($_FILES['upfile']['tmp_name']));
//echo $linkData;

$fileName =  $_FILES["upfile"]["name"];

$dbconn = pg_connect($connectionString)
        or die('Could not connect: ' . pg_last_error());
//
$query = "INSERT INTO upload (rand, links, fileName) "
        . "VALUES ('".$rand."','".$linkData."','".$fileName."');";

//echo $query;

$result = pg_query($query) or die('Query failed: ' . pg_last_error());

// Free resultset
pg_free_result($result);


// Closing connection
pg_close($dbconn);

header('Location: http://yourServer/demo.php?uid='.$rand);
//http_redirect("./demo.php);
?>
