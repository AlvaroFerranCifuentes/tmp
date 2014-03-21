/*if (getCookie('oneTime')==1) 
	setCookie("leftShown", "1", 3600);

/* function toggle_visibility(id) {
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
		e4.style.width =  'calc(100% - 180px)';
		setCookie('leftShown', '1');
	   }
}


function goBack(){
  window.history.back()
}
*/

page="<html><head><title>Search Results</title></head><body bgcolor='white'><center><table border=0 cellspacing=10 width=80%>";

function searchFor(frm) {
	//win = window.open("","","scrollbars");
	//document.write(page);

//repl.enter(content);
       
/*	document.write("<script type='text/javascript' src='../includes/template1.js'><"+"/script>");
	document.write("<link rel='stylesheet' type='text/css' href='../includes/theme.css'>");	
	document.write("<script type='text/javascript' src='../includes/template2.js'><"+"/script>");
*/
	
	document.write("<script type='text/javascript' src='../includes/template1.js'><"+"/script>");
	document.write("<link rel='stylesheet' type='text/css' href='../includes/theme.css'>");	
	document.write("<script type='text/javascript' src='../includes/template2.js'><"+"/script>");

	

	var name = document.createElement('div');
	name.id='name';
	name.innerHTML = '<p>Results';
	document.getElementById('layout').appendChild(name);
	

	

	txt = frm.split(" ");
	fnd = new Array(); 
	total=0;
	for (i = 0; i < item.length; i++) {
		fnd[i] = 0;
		order = new Array(0, 4, 2, 3);
//		order = new Array(4);
//		alert(order);
		for (j = 0; j < order.length; j++)
			for (k = 0; k < txt.length; k++)
				if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
					fnd[i] += (j+1);
	}
	for (i = 0; i < fnd.length; i++) {
		w = -1;
		for (j = 0; j < fnd.length; j++)
			if (fnd[j] > 0) { 
				w = j; 
			};
		if (w > -1) 

			total += show(w);
		fnd[w] = 0;
	}
	//document.write("<br>Total found: "+total+"<br></body></html>");
	//win.document.close();
	

}
function show(which) {
	link = item[which][1] + item[which][0]; 
	//line = "<a href='"+link+"'>"+item[which][2]+"</a><br>";
	
	var strip=document.createElement('div');
	strip.id='strip';	
	document.getElementById("layout").appendChild(strip);
	
	var iDiv = document.createElement('div');
//	iDiv.id='strip';
	iDiv.className='square';
	strip.appendChild(iDiv);
//	iDiv.innerHTML = line;

	var a = document.createElement('a');
    a.href =  link; // Insted of calling setAttribute 
    a.innerHTML = item[which][2];
	iDiv.appendChild(a);

//	document.write(line);
	//alert(line);
	return 1;
}



/*function searchFor(id){
	var position = document.documentElement.innerHTML.indexOf(id);
	alert(id);
}

*/







function showLeft(){
	var e = document.getElementById('left');
	e.style.display = 'block';
}

function hideLeft(){
	var e = document.getElementById('left');
	e.style.display = 'none';
}

/********************************************************************************************************************/

document.writeln("</head>");



document.writeln("<body bgcolor='#FFF'>");

document.writeln("<div id='layout'>");


document.writeln("<div id='topdiv'>");
//<a onclick='toggle_visibility(&#34;left&#34;);'>  onmouseout='toggle_visibility(&#34;left&#34;);'
document.writeln("<input type='text' style='border:none; border-color:transparent;background-color:transparent;height:40px;width:200px;color:#CCC;font-size:25px;font-family:'Sansation'; '    name='search' value='Search'   onclick='this.style.color=&#34;#1E198B&#34;'     onfocus=' this.value=&#34;&#34;'    onkeydown='if(event.keyCode == 13){   searchFor(value); }'  ></input>");
//window.location.href=&#34;results.html&#34;
document.writeln("</div>");


document.writeln("<div id='menuImg' style onmouseleave='hideLeft();'>");
document.writeln("<a onmouseover='showLeft();'  ><img hspace='10' align='left' src='images/menuLight.png' width='40' height='40' onmouseover=\"this.src='images/menu.png'\" onmouseout=\"this.src='images/menuLight.png'\"/></a>");


document.writeln("<div id='left'   >");
//document.writeln("</>");
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
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='software.html' target='_self'><font color='#002366'>Skills</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div>");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href='contact.html' target='_self'><font color='#002366'>Contact</font> </a> <br> <br>");
document.writeln("<div id='rectangle' top:40px></div><br>");
document.writeln(" <a href='http://www.linkedin.com/in/alvaroferrancifuentes/en' target='_blank'><img hspace='25' align='center' src='images/linkedinDark.png' width='25' height='25' onmouseover=\"this.src='images/linkedin.png'\" onmouseout=\"this.src='images/linkedinDark.png'\"/></a>");
document.writeln("<a href='https://plus.google.com/102364508248672225068/posts' target='_blank'><img  align='center' src='images/google+Dark.png' width='25' height='25' onmouseover=\"this.src='images/google+.png'\" onmouseout=\"this.src='images/google+Dark.png'\"/></a>");
document.writeln("<br><br><div id='rectangle' top:40px></div>");
document.writeln("</div>");
document.writeln("</div>");

document.writeln("</div>");//layout


