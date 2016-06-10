<?php
	//your connection string here
	// $connectionString = "host= dbname= user= password=";
	include('../../uploadsConnectionString.php');
	$id = $_POST["id"];
	$layout = $_POST["layout"];
	$dbconn = pg_connect($connectionString)
			or die('Could not connect: ' . pg_last_error());
	$query = "UPDATE upload SET layout = '" . $layout . "' WHERE rand = '" . $id . "';";
	//echo $query;
	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	echo 'Layout saved';
?>
