


if (getCookie('oneTime')==1) 
	setCookie("leftShown", "1", 3600);
/*if (getCookie('leftShown')==1){
	var e = document.getElementById('left');
	e.style.display = 'block';
}
*/

 function toggle_visibility(id) {
    var e = document.getElementById(id);
	var e2 = document.getElementById('center');
	var e3 = document.getElementById('name');
	var e4 = document.getElementById('strip');
	
	if(getCookie('leftShown')==1 ){ //if left is visible
    	e.style.display = 'none';
		e2.style.left = 0 + 'px';
    	e2.style.width = '-moz-calc(100% - 40px)';
		e3.style.left = 0 + 'px';
    	e3.style.width = 100+ '%';
		e4.style.left = 10 + 'px';
    	e4.style.width = 'calc(100% - 20px)';
		setCookie('leftShown', '0');
	}else{
        e.style.display = 'block';

		e2.style.left = 160 + 'px';
		e2.style.width =  '-moz-calc(100% - 190px)';
		e3.style.left = 160 + 'px';
		e3.style.width =  '-moz-calc(100% - 160px)';
		e4.style.left = 170 + 'px';
		e4.style.width =  '-moz-calc(100% - 180px)';
		setCookie('leftShown', '1');
	   }
}

/*function toggle_width(id) {
	var e = document.getElementById(id);
	var e2 = document.getElementById('center');
	var e3 = document.getElementById('name');
	var e4 = document.getElementById('strip');

    if(e.style.display== 'block'){
		e2.style.left = 160 + 'px';
		e2.style.width =  '-moz-calc(100% - 190px)';
		e3.style.left = 160 + 'px';
		e3.style.width =  '-moz-calc(100% - 160px)';
		e4.style.left = 170 + 'px';
		e4.style.width =  '-moz-calc(100% - 180px)';

    }else{
		e2.style.left = 0 + 'px';
    	e2.style.width = '-moz-calc(100% - 40px)';
		e3.style.left = 0 + 'px';
    	e3.style.width = 100+ '%';
		e4.style.left = 10 + 'px';
    	e4.style.width = 'calc(100% - 20px)';
		
	}
}
*/
function toggle(id){
	var e=id;
	toggle_visibility(e);
	//toggle_width(e);
}

function goBack(){
  window.history.back()
}



/********************************************************************************************************************/

document.writeln("</head>");



document.writeln("<body bgcolor='#FFF'>");

document.writeln("<div id='topdiv'>");
document.writeln("<a onclick='toggle(&#34;left&#34;);'><img hspace='10' align='left' src='../icons/menuLight.png' width='40' height='40' onmouseover=\"this.src='../icons/menu.png'\" onmouseout=\"this.src='../icons/menuLight.png'\"/></a>");
document.writeln("<font size='6'>Search&nbsp;&nbsp;&nbsp;&nbsp;</font></p>");
document.writeln("</div>");





document.writeln("<div id='left'>");
//document.writeln("<p>");
/*document.writeln("<ul id='menu'>");
document.writeln("<li><a href='#'>Menu</a>");
document.writeln("<ul class='sub-menu'>");
document.writeln("<li>");
document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='aboutMe.html' target='_self'><font color='#002366'>About Me</font> </a>  ");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='portfolio.html' target='_self'><font color='#002366'>Portfolio</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='software.html' target='_self'><font color='#002366'>Software</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='contact.html' target='_self'><font color='#002366'>Contact</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='links.html' target='_self'><font color='#002366'>Links</font> </a> <br> <br>");
document.writeln("</li>");
document.writeln("</ul>");
document.writeln("</li>");
document.writeln("</ul>");*/
  
document.writeln("<div id='rectangle' top:1px></div>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='aboutMe.html' target='_self'><font color='#002366'>About Me</font> </a> <br>&nbsp; ");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='portfolio.html' target='_self'><font color='#002366'>Portfolio</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='software.html' target='_self'><font color='#002366'>Software</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='contact.html' target='_self'><font color='#002366'>Contact</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div><br>");
document.writeln(" <a href='http://www.linkedin.com/in/alvaroferrancifuentes/en' target='_blank'><img hspace='25' align='center' src='../icons/linkedinDark.png' width='25' height='25' onmouseover=\"this.src='../icons/linkedin.png'\" onmouseout=\"this.src='../icons/linkedinDark.png'\"/></a>");
document.writeln("<a href='https://plus.google.com/102364508248672225068/posts' target='_blank'><img  align='center' src='../icons/google+Dark.png' width='25' height='25' onmouseover=\"this.src='../icons/google+.png'\" onmouseout=\"this.src='../icons/google+Dark.png'\"/></a>");
document.writeln("<br><br><div id='rectangle' top:40px></div>");
document.writeln("</div>");





