var e = document.getElementById('left');
var e2 = document.getElementById('center');
var e3 = document.getElementById('name');
var e4 = document.getElementById('strip');

if(getCookie('leftShown')==0 ){
	e.style.display = 'none';
	e2.style.left = 0 + 'px';
	e2.style.width = '-moz-calc(100% - 40px)';
	e3.style.left = 0 + 'px';
	e3.style.width = 100+ '%';
	e4.style.left = 10 + 'px';
	e4.style.width = 'calc(100% - 20px)';
}else{
    e.style.display = 'block';
	e2.style.left = 160 + 'px';
	e2.style.width =  '-moz-calc(100% - 190px)';
	e3.style.left = 160 + 'px';
	e3.style.width =  '-moz-calc(100% - 160px)';
	e4.style.left = 170 + 'px';
	e4.style.width =  '-moz-calc(100% - 180px)';
}

