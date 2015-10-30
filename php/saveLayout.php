<?php
	//your connection string here
	// $connectionString = "host= dbname= user= password=";
	include('../../uploadsConnectionString.php');
	$id = $_POST["id"];
	$layout = $_POST["layout"];
	$dbconn = mysql_connect($server,$user,$password) or die('Could not connect: ' . mysql_error()); 
	mysql_select_db($db, $dbconn) or die("Could not select database.");
	$query = "UPDATE upload SET layout = '" . $layout . "' WHERE rand = '" . $id . "';";
	//echo $query;
	$result = mysql_query($query) or die('Query failed: ' . mysql_error());
	echo 'Layout saved';
?>
