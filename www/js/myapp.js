// Init App
//var myApp = new Framework7();
var myApp = new Framework7({   
    // Enable Material theme    
    material: true,
    swipePanel: 'right',
    animateNavBackIcon:true,
    cache: false       
});

// Expose Internal DOM library
var $$ = Dom7,
    vista_actual = '',    
    item_desmateria = '';//desc de la materia al crear nuevas evaluaciones antes de registrar    

// Add main view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: false,
    // Enable Dom Cache so we can use all inline pages
    domCache: false   
});

/***************************************************

***************************************************/
// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) 
{    
    //mostrar loading
    myApp.showPreloader('Cargando...');
});

/***************************************************

***************************************************/

//al terminar una solicitud
$$(document).on('ajaxComplete', function (e) 
{   
    //ocultar loading   
    myApp.hidePreloader();  

    try
    {
        //convertir en json
        var jsonObject = JSON.parse(e.detail.xhr.responseText);     

        //verficamos
        if (jsonObject.proceso_respuesta == undefined)
        {
            //dialogo
            myApp.alert(jsonObject.mensaje_respuesta, '<i class="fa fa-exclamation-triangle" style="font-size:30px" aria-hidden="true"></i> Error');
        }           
    }
    catch(e)
    {
        //si entra aqui es que se esta mostrando la vista correctamente
        return 'html';
    }
});


  function logIn(){
	  myApp.showIndicator();
    /*setTimeout(function () {
        myApp.hideIndicator();
    }, 2000);*/
  var oemail = document.getElementById("email").value;
  var osenha = document.getElementById("senha").value;
  if(oemail=="" || osenha==""){
	myApp.hideIndicator();
	myApp.alert('Preencha todos os campos', 'Alto lá!');
  } else{
  var xmlhttp = new XMLHttpRequest();
  var url = "http://dseducation.esy.es/education/consulta.php?email=" + oemail + "&senha=" + osenha;
  xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      ConectaServidor(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  function ConectaServidor(response){
    var dados = JSON.parse(response);
    var i;
    var conteudo = "";
    var x = "2";
	if(dados[0].error == "true"){
		myApp.hideIndicator();
        myApp.alert('Não existe esse cadastro', 'Alto lá!');
    }
	else{
		window.location.href='main.html';
	}
	}
	}
	}	
	var mat_enunciado = [
    "O número de retas que são tangentes comuns a duas circunferências tangentes exteriormente-c"
];
	var mat_alternativa = [
    "1", "2", "3", "4"
];
var res = mat_enunciado[0].split("-", 2);
	  function mostrarGenero(){
  alert('O valor selecionado é '+ getRadioValor('my-radio'));
  if(getRadioValor('my-radio')==res[1]){
	  alert('acertou');
  }
 }
  
 function getRadioValor(name){
  var rads = document.getElementsByName(name);
   
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   
  }
   
  return null;
 }
	function Cadastrar(){
		myApp.showIndicator();
    /*setTimeout(function () {
        myApp.hideIndicator();
    }, 2000);*/
	var CadEmail = document.getElementById("cademail").value;
	var CadNome = document.getElementById("cadnome").value;
	var CadSenha = document.getElementById("cadsenha").value;
	var CadSenha2 = document.getElementById("cadsenha2").value;
	if(CadEmail=="" || CadNome=="" || CadSenha=="" || CadSenha2==""){
		myApp.hideIndicator();
		myApp.alert('Preencha todos os campos', 'Alto lá!');
	} else if(CadSenha!=CadSenha2){
		myApp.hideIndicator();
		myApp.alert('As senhas não coincidem', 'Alto lá!');
	} else{
      var xmlhttp = new XMLHttpRequest();
      var url = "http://dseducation.esy.es/education/inserir.php?email=" + CadEmail + "&nome=" + CadNome +"&senha="+ CadSenha;
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
      window.location.href='main.html';
	}
	}

var linkvideo = '';


$$('.pb-standalone-video').on('click', function () {
	var myPhotoBrowserPopupLight = myApp.photoBrowser({
    photos : [
        {
            html: '<iframe src="https://www.youtube.com/embed/'+ linkvideo +'?rel=0" frameborder="0" allowfullscreen></iframe>'
        },
    ],
    theme: 'light',
    type: 'standalone',
	navbarTemplate: '<div class="navbar"><div class="navbar-inner"><div class="left"><a class="link icon-only photo-browser-close-link"><i class="icon icon-back"></i></a></div><div class="center"></div><div class="right"></div></div></div>',
	toolbarTemplate: '<div class="toolbar toolbar-bottom"><a href="#" class="link toolbar-inner photo-browser-close-link" onclick="exercicios()">IR PARA EXERCÍCIOS</a></div>'
});
    myPhotoBrowserPopupLight.open();
});

function exercicios() {


  var popupHTML = '<div class="popup">'+
			'<div class="views">'+
				'<div class="view view-main">'+
					'<div class="pages navbar-fixed">'+
					'	<div class="page">'+
							'<div class="navbar">'+
							  '<div class="navbar-inner">'+
								'<div class="left"></div>'+
								'<div class="center">Exercícios</div>'+
								'<div class="right"><a class="link icon-only tab-link close-popup">'+
										'<i class="icon icon-close"></i>'+
									'</a></div>'+
							  '</div>'+
							'</div>'+
					'		<div class="toolbar tabbar toolbar-bottom">'+
			'	<div class="toolbar-inner">'+
			'		<a href="#"class="link"><i class="icon icon-prev"></i></a>'+
			'		<a href="#" class="link" onclick="mostrarGenero()"><i class="icon icon-next"></i></a>'+
			'	</div>'+
		'	</div>'+
							'<div class="page-content">'+
								'<div class="content-block">'+
									res[0]+
								'</div>'+
								'<div class="list-block">'+
	'								<ul>'+
    '<li>'+
      '<label class="label-radio item-content">'+
      '  <input type="radio" name="my-radio" value="a">'+
      '  <div class="item-media">'+
      '    <i class="icon icon-form-radio"></i> <h5 style="padding-left: 10px"> A)</h5>'+
      '  </div>'+
      '  <div class="item-inner">'+
       '   <div class="item-title"><div id="opc1"></div></div>'+
      '  </div>'+
     ' </label>'+
    '</li>'+
   ' <li>'+
  '    <label class="label-radio item-content">'+
       ' <input type="radio" name="my-radio" value="b">'+
       ' <div class="item-media">'+
      '    <i class="icon icon-form-radio"></i> <h5 style="padding-left: 10px"> B)</h5>'+
     '   </div>'+
    '    <div class="item-inner">'+
   '       <div class="item-title"><div id="opc2"></div></div>'+
  '      </div>'+
   '   </label>'+
  '  </li>'+
     ' <li>'+
  '    <label class="label-radio item-content">'+
       ' <input type="radio" name="my-radio" value="c">'+
       ' <div class="item-media">'+
      '    <i class="icon icon-form-radio"></i><h5 style="padding-left: 10px"> C)</h5>'+
     '   </div>'+
    '    <div class="item-inner">'+
   '       <div class="item-title"><div id="opc3"></div></div>'+
  '      </div>'+
   '   </label>'+
  '  </li>'+
     ' <li>'+
  '    <label class="label-radio item-content">'+
       ' <input type="radio" name="my-radio" value="d">'+
       ' <div class="item-media">'+
      '    <i class="icon icon-form-radio"></i><h5 style="padding-left: 10px"> D)</h5>'+
     '   </div>'+
    '    <div class="item-inner">'+
   '       <div class="item-title"><div id="opc4"></div></div>'+
  '      </div>'+
   '   </label>'+
  '  </li>'+
  '</ul>'+
							'	</div>'+
							'</div>'+
					
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>';
  

myApp.popup(popupHTML);

document.getElementById("opc1").innerHTML = mat_alternativa[0];
document.getElementById("opc2").innerHTML = mat_alternativa[1];
document.getElementById("opc3").innerHTML = mat_alternativa[2];
document.getElementById("opc4").innerHTML = mat_alternativa[3];
}