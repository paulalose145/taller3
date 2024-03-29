<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="css/bootstrap.min.css">
  <style>
    body {
      padding-top: 50px;
      padding-bottom: 20px;
    }
  </style>
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="css/main.css">

  <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>
<body>
 <div id = "opciones"> 
  <h4>Arrastra el icono que desees a la zona gris clara para ver los sitios en el mapa</h4>
   <div class="icono">
    <img id = "CentroComercial" src="img/centrocomercial.png">
    <h5>Centro Comercial </h5>
  </div>
  <div class="icono">
    <img id = "Parques" src="img/parques.png">
    <h5>Parques </h5>
  </div>
  <div class="icono">
    <img id = "Restaurantes" src="img/restaurante.png">
    <h5>Restaurante </h5>
  </div>
</div>

<canvas id = "areadesoltar">
</canvas>

<section id = "mapa">
  <div id="map"></div>
</section>

<script src="js/vendor/jquery-2.1.1.min.js"></script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>

<script src="js/main.js"></script>

</body>
</html>
