<?php

include "connection.php";

$data  = json_decode(file_get_contents("php://input"));
$taskTitle = $connection->real_escape_string($data->taskTitle);

$query = "DELETE from alltasks where taskTitle = '$taskTitle'";
if (mysqli_query($connection, $query)) {
              echo "record deleted successfully";
          } else {
              echo "Error: ". mysqli_error($connection);
          }

          mysqli_close($connection);
 ?>
