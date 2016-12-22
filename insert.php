<?php
include "connection.php";

$data = json_decode(file_get_contents("php://input"));
$taskTitle = $connection->real_escape_string($data->taskTitle);
$taskDate = $connection->real_escape_string($data->taskDate);
$taskDesc = $connection->real_escape_string($data->taskDesc);
$taskStatus = $connection->real_escape_string($data->taskStatus);

print_r($taskTitle,$taskDate);
$Insertquery = "INSERT into `alltasks` values ('".$taskTitle."','".$taskDate."','".$taskDesc."','".$taskStatus."')";

if (mysqli_query($connection, $Insertquery)) {
    echo "New record created successfully";
} else {
    echo "Error: ". mysqli_error($connection);
}

mysqli_close($connection);
 ?>
