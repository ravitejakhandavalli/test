<?php
include "connection.php";

$query = "select * from `alltasks` where taskStatus='true'";
$rs = $connection->query($query);

while($row = $rs->fetch_assoc()){
  $data[] = $row;
}
print json_encode($data);
?>