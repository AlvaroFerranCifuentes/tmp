document.writeln("<!DOCTYPE html>"); //title needs to be out of js script -> google won't read it 
document.writeln("<html>");
document.writeln("<head>");
document.writeln("<title>Alvaro Ferran Cifuentes - A personal portfolio</title>");
document.writeln("<link rel='shortcut icon' href='../icons/fotoperfil.png' type='image/png'>");



function setCookie( name, value, timeout){
	var d = new Date();
	d.setTime(d.getTime()+(timeout*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = name + "=" + escape(value) + "; " + expires+"; path=null";  //escape() needed for chrome
document.cookie = name+"="+value+expires+"; path=/";
}


function getCookie( name ){
	var cname = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
	  var c = ca[i].trim();
	  if (c.indexOf(cname)==0){ return c.substring(cname.length,c.length);}
	}
	//alert(name+" not found");
	return ""; 
}



