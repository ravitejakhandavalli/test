<?php
include "connection.php";

$query = "select * from `alltasks` where taskStatus='false'";
$rs = $connection->query($query);

while($row = $rs->fetch_assoc()){
  $data[] = $row;
}
