	$(document).ready(iniciar());

	var indice = 2.7;
	var nomb=[];
	var lati=[];
	var longi=[];
	var map;

	function iniciar(){
		lat = 3.4334;
		longs = -76.5045;
		latilon = new google.maps.LatLng(lat, longs)
		mapiholder = document.getElementById('map')

		var misOptions = {
			center:latilon,zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			mapTypeControl:false,
			navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
		}

		map = new google.maps.Map(document.getElementById("map"), misOptions);

		var imagenes=document.querySelectorAll('#opciones > .icono > img');
		for(var i=0; i<imagenes.length;i++){
			imagenes[i].addEventListener('dragstart',moviendose,false);
			imagenes[i].addEventListener('dragend',sinmover,false)
		}
		areas = document.getElementById('areadesoltar');
		soltar = areas.getContext('2d');
		areas.addEventListener('dragenter',dentro,false);
		areas.addEventListener('dragleave',afuera,false);
		areas.addEventListener('dragover',function(e){
			e.preventDefault();},false);

		areas.addEventListener('drop',suelto,false);
	}

	function moviendose(e){
		icono = e.target;
		e.dataTransfer.setData('Text',icono.getAttribute('id'));
		e.dataTransfer.setDragImage(e.target,62,62);
	}

	function sinmover(e){
		e.preventDefault();
		areas.style.background='#b2b2b2';
	}

	function dentro(e){
		e.preventDefault();
		areas.style.background='rgba(105, 225, 105, .5)';
	}

	function afuera(e){
		e.preventDefault();
		areas.style.background='rgba(225, 95, 85, .5)';
	}

	function suelto(e){
		e.preventDefault();
		areas.style.background='#b2b2b2';
		var id = e.dataTransfer.getData('Text');
		var icono = document.getElementById(id);
		console.log(id);
		var x = indice * 40;
		console.log(x);
		soltar.drawImage(icono, x, 30, 13, 80);
		indice++;

		$.ajax({
			type: "POST", url: "info.php", data: { tipoLugar: id }
		})
		.done(function(){

		})
		.success(function(result){
			var seleccionado=JSON.parse(result);
			for(i = 0; i < seleccionado.temp.length; i++){
				nomb[i]=seleccionado.temp[i].nomb;
				lati[i]=seleccionado.temp[i].lati;
				longi[i]=seleccionado.temp[i].longi;
			}
			marcadores();
		})
		.error(function(error){
			console.log("Error: "+ error);
		})
	}

		function marcadores(r){
    		for(i = 0;i<nomb.length;i++){
       			var punto = new google.maps.Marker({position: new google.maps.LatLng(lati[i],longi[i]), map: map});
	       		var infowindow = new google.maps.InfoWindow();
	       		google.maps.event.addListener(punto, 'click', (function(punto, i) {
       			return function() {
       				infowindow.setContent(nomb[i]);
       				infowindow.open(map, punto);
       			}
       		})(punto, i));
       	}
   	}

