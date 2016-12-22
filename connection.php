
<?php
define("HOSTNAME","localhost");
define("USERNAME","root");
define("PASSWORD","");
define("DATABASE","todos");

$connection = new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE);
if(!$connection){
  die("Db connection failed".mysqli_connect_error);
}
else{
  // echo "connection success";
}
 ?>
