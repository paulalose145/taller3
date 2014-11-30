<?php
  include_once('includes/database.php');

  $tipoLugar = $_POST['tipoLugar'];
  $result="";
  $temporal=[];
  $query = "SELECT * FROM taller_3.locales WHERE locales.tipo ='".$tipoLugar."'";
  echo $query;
  $resultado = mysqli_query($con,$query);
  
  while ( $row = mysqli_fetch_array($resultado) ) {
    $temp['nomb'] = $row["nombre"];
    $temp['lati'] = $row["latitud"];
    $temp['longi'] = $row["longitud"];
    array_push($temporal,$temp);
  }
  $result["temp"] = $temporal;

  echo json_encode($result);

  ?>