//*****START DATE*****
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
	document.getElementById("date-today").innerHTML = m + "/" + d + "/" + y;


var d = new Date();
var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

var n = weekday[d.getDay()];
	document.getElementById("day-today").innerHTML = n;
//*****END DATE*****



//*****START CURRENT TIME*****
function checkTime(i) {
    if (i < 10) {
		i = "0" + i;
	    }
	return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
	
    // add a zero in front of numbers<10
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time-now').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
	    startTime()
    }, 500);
}
startTime();
//*****END CURRENT TIME*****



//*****START MINI TABS*****
function tab_1(tab) {
	document.getElementById('tab1').style.display = 'none';
	document.getElementById('tab2').style.display = 'none';
	document.getElementById('tab3').style.display = 'none';
	document.getElementById('tab4').style.display = 'none';
	document.getElementById('tab5').style.display = 'none';
	
	
	document.getElementById('li_tab1').setAttribute("class", "");
	document.getElementById('li_tab2').setAttribute("class", "");
	document.getElementById('li_tab3').setAttribute("class", "");
	document.getElementById('li_tab4').setAttribute("class", "");
	document.getElementById('li_tab5').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_2(tab) {
	document.getElementById('tab6').style.display = 'none';
	document.getElementById('tab7').style.display = 'none';
	document.getElementById('tab8').style.display = 'none';
	document.getElementById('tab9').style.display = 'none';
	document.getElementById('tab10').style.display = 'none';
	
	
	document.getElementById('li_tab6').setAttribute("class", "");
	document.getElementById('li_tab7').setAttribute("class", "");
	document.getElementById('li_tab8').setAttribute("class", "");
	document.getElementById('li_tab9').setAttribute("class", "");
	document.getElementById('li_tab10').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_3(tab) {
	document.getElementById('tab11').style.display = 'none';
	document.getElementById('tab12').style.display = 'none';
	document.getElementById('tab13').style.display = 'none';
	document.getElementById('tab14').style.display = 'none';
	document.getElementById('tab15').style.display = 'none';
	
	
	document.getElementById('li_tab11').setAttribute("class", "");
	document.getElementById('li_tab12').setAttribute("class", "");
	document.getElementById('li_tab13').setAttribute("class", "");
	document.getElementById('li_tab14').setAttribute("class", "");
	document.getElementById('li_tab15').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}



function tab_4(tab) {
	document.getElementById('tab16').style.display = 'none';
	document.getElementById('tab17').style.display = 'none';
	document.getElementById('tab18').style.display = 'none';
	document.getElementById('tab19').style.display = 'none';
	document.getElementById('tab20').style.display = 'none';
	
	
	document.getElementById('li_tab16').setAttribute("class", "");
	document.getElementById('li_tab17').setAttribute("class", "");
	document.getElementById('li_tab18').setAttribute("class", "");
	document.getElementById('li_tab19').setAttribute("class", "");
	document.getElementById('li_tab20').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}



function tab_5(tab) {
	document.getElementById('tab21').style.display = 'none';
	document.getElementById('tab22').style.display = 'none';
	document.getElementById('tab23').style.display = 'none';
	document.getElementById('tab24').style.display = 'none';
	document.getElementById('tab25').style.display = 'none';
	
	
	document.getElementById('li_tab21').setAttribute("class", "");
	document.getElementById('li_tab22').setAttribute("class", "");
	document.getElementById('li_tab23').setAttribute("class", "");
	document.getElementById('li_tab24').setAttribute("class", "");
	document.getElementById('li_tab25').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}



function tab_6(tab) {
	document.getElementById('tab26').style.display = 'none';
	document.getElementById('tab27').style.display = 'none';
	document.getElementById('tab28').style.display = 'none';
	document.getElementById('tab29').style.display = 'none';
	document.getElementById('tab30').style.display = 'none';
	
	
	document.getElementById('li_tab26').setAttribute("class", "");
	document.getElementById('li_tab27').setAttribute("class", "");
	document.getElementById('li_tab28').setAttribute("class", "");
	document.getElementById('li_tab29').setAttribute("class", "");
	document.getElementById('li_tab30').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_7(tab) {
	document.getElementById('tab31').style.display = 'none';
	document.getElementById('tab32').style.display = 'none';
	document.getElementById('tab33').style.display = 'none';
	document.getElementById('tab34').style.display = 'none';
	document.getElementById('tab35').style.display = 'none';
	
	
	document.getElementById('li_tab31').setAttribute("class", "");
	document.getElementById('li_tab32').setAttribute("class", "");
	document.getElementById('li_tab33').setAttribute("class", "");
	document.getElementById('li_tab34').setAttribute("class", "");
	document.getElementById('li_tab35').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_8(tab) {
	document.getElementById('tab36').style.display = 'none';
	document.getElementById('tab37').style.display = 'none';
	document.getElementById('tab38').style.display = 'none';
	document.getElementById('tab39').style.display = 'none';
	document.getElementById('tab40').style.display = 'none';
	
	
	document.getElementById('li_tab36').setAttribute("class", "");
	document.getElementById('li_tab37').setAttribute("class", "");
	document.getElementById('li_tab38').setAttribute("class", "");
	document.getElementById('li_tab39').setAttribute("class", "");
	document.getElementById('li_tab40').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_9(tab) {
	document.getElementById('tab41').style.display = 'none';
	document.getElementById('tab42').style.display = 'none';
	document.getElementById('tab43').style.display = 'none';
	document.getElementById('tab44').style.display = 'none';
	document.getElementById('tab45').style.display = 'none';
	
	
	document.getElementById('li_tab41').setAttribute("class", "");
	document.getElementById('li_tab42').setAttribute("class", "");
	document.getElementById('li_tab43').setAttribute("class", "");
	document.getElementById('li_tab44').setAttribute("class", "");
	document.getElementById('li_tab45').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_10(tab) {
	document.getElementById('tab46').style.display = 'none';
	document.getElementById('tab47').style.display = 'none';
	document.getElementById('tab48').style.display = 'none';
	document.getElementById('tab49').style.display = 'none';
	document.getElementById('tab50').style.display = 'none';
	
	
	document.getElementById('li_tab46').setAttribute("class", "");
	document.getElementById('li_tab47').setAttribute("class", "");
	document.getElementById('li_tab48').setAttribute("class", "");
	document.getElementById('li_tab49').setAttribute("class", "");
	document.getElementById('li_tab50').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}



function tab_11(tab) {
	document.getElementById('tab51').style.display = 'none';
	document.getElementById('tab52').style.display = 'none';
	document.getElementById('tab53').style.display = 'none';
	document.getElementById('tab54').style.display = 'none';
	document.getElementById('tab55').style.display = 'none';
	
	
	document.getElementById('li_tab51').setAttribute("class", "");
	document.getElementById('li_tab52').setAttribute("class", "");
	document.getElementById('li_tab53').setAttribute("class", "");
	document.getElementById('li_tab54').setAttribute("class", "");
	document.getElementById('li_tab55').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_12(tab) {
	document.getElementById('tab56').style.display = 'none';
	document.getElementById('tab57').style.display = 'none';
	document.getElementById('tab58').style.display = 'none';
	document.getElementById('tab59').style.display = 'none';
	document.getElementById('tab60').style.display = 'none';
	
	
	document.getElementById('li_tab56').setAttribute("class", "");
	document.getElementById('li_tab57').setAttribute("class", "");
	document.getElementById('li_tab58').setAttribute("class", "");
	document.getElementById('li_tab59').setAttribute("class", "");
	document.getElementById('li_tab60').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_13(tab) {
	document.getElementById('tab61').style.display = 'none';
	document.getElementById('tab62').style.display = 'none';
	document.getElementById('tab63').style.display = 'none';
	document.getElementById('tab64').style.display = 'none';
	document.getElementById('tab65').style.display = 'none';
	
	
	document.getElementById('li_tab61').setAttribute("class", "");
	document.getElementById('li_tab62').setAttribute("class", "");
	document.getElementById('li_tab63').setAttribute("class", "");
	document.getElementById('li_tab64').setAttribute("class", "");
	document.getElementById('li_tab65').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function tab_14(tab) {
	document.getElementById('tab66').style.display = 'none';
	document.getElementById('tab67').style.display = 'none';
	document.getElementById('tab68').style.display = 'none';
	document.getElementById('tab69').style.display = 'none';
	document.getElementById('tab70').style.display = 'none';
	
	
	document.getElementById('li_tab66').setAttribute("class", "");
	document.getElementById('li_tab67').setAttribute("class", "");
	document.getElementById('li_tab68').setAttribute("class", "");
	document.getElementById('li_tab69').setAttribute("class", "");
	document.getElementById('li_tab70').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


//*****START MINI SUB TABS*****
function sub_tab1(tab) {
	document.getElementById('mini_tab1').style.display = 'none';
	document.getElementById('mini_tab2').style.display = 'none';
	document.getElementById('mini_tab3').style.display = 'none';
	
	
	document.getElementById('li_mini_tab1').setAttribute("class", "");
	document.getElementById('li_mini_tab2').setAttribute("class", "");
	document.getElementById('li_mini_tab3').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab2(tab) {
	document.getElementById('mini_tab4').style.display = 'none';
	document.getElementById('mini_tab5').style.display = 'none';
	document.getElementById('mini_tab6').style.display = 'none';
	
	
	document.getElementById('li_mini_tab4').setAttribute("class", "");
	document.getElementById('li_mini_tab5').setAttribute("class", "");
	document.getElementById('li_mini_tab6').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab3(tab) {
	document.getElementById('mini_tab7').style.display = 'none';
	document.getElementById('mini_tab8').style.display = 'none';
	document.getElementById('mini_tab9').style.display = 'none';
	
	
	document.getElementById('li_mini_tab7').setAttribute("class", "");
	document.getElementById('li_mini_tab8').setAttribute("class", "");
	document.getElementById('li_mini_tab9').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab4(tab) {
	document.getElementById('mini_tab10').style.display = 'none';
	document.getElementById('mini_tab11').style.display = 'none';
	document.getElementById('mini_tab12').style.display = 'none';
	
	
	document.getElementById('li_mini_tab10').setAttribute("class", "");
	document.getElementById('li_mini_tab11').setAttribute("class", "");
	document.getElementById('li_mini_tab12').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab5(tab) {
	document.getElementById('mini_tab13').style.display = 'none';
	document.getElementById('mini_tab14').style.display = 'none';
	document.getElementById('mini_tab15').style.display = 'none';
	
	
	document.getElementById('li_mini_tab13').setAttribute("class", "");
	document.getElementById('li_mini_tab14').setAttribute("class", "");
	document.getElementById('li_mini_tab15').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab6(tab) {
	document.getElementById('mini_tab16').style.display = 'none';
	document.getElementById('mini_tab17').style.display = 'none';
	document.getElementById('mini_tab18').style.display = 'none';
	
	
	document.getElementById('li_mini_tab16').setAttribute("class", "");
	document.getElementById('li_mini_tab17').setAttribute("class", "");
	document.getElementById('li_mini_tab18').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab7(tab) {
	document.getElementById('mini_tab19').style.display = 'none';
	document.getElementById('mini_tab20').style.display = 'none';
	document.getElementById('mini_tab21').style.display = 'none';
	
	
	document.getElementById('li_mini_tab19').setAttribute("class", "");
	document.getElementById('li_mini_tab20').setAttribute("class", "");
	document.getElementById('li_mini_tab21').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function sub_tab8(tab) {
	document.getElementById('mini_tab22').style.display = 'none';
	document.getElementById('mini_tab23').style.display = 'none';
	document.getElementById('mini_tab24').style.display = 'none';
	
	
	document.getElementById('li_mini_tab22').setAttribute("class", "");
	document.getElementById('li_mini_tab23').setAttribute("class", "");
	document.getElementById('li_mini_tab24').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab9(tab) {
	document.getElementById('mini_tab25').style.display = 'none';
	document.getElementById('mini_tab26').style.display = 'none';
	document.getElementById('mini_tab27').style.display = 'none';
	
	
	document.getElementById('li_mini_tab25').setAttribute("class", "");
	document.getElementById('li_mini_tab26').setAttribute("class", "");
	document.getElementById('li_mini_tab27').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab10(tab) {
	document.getElementById('mini_tab28').style.display = 'none';
	document.getElementById('mini_tab29').style.display = 'none';
	document.getElementById('mini_tab30').style.display = 'none';
	
	
	document.getElementById('li_mini_tab28').setAttribute("class", "");
	document.getElementById('li_mini_tab29').setAttribute("class", "");
	document.getElementById('li_mini_tab30').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}

function sub_tab11(tab) {
	document.getElementById('mini_tab31').style.display = 'none';
	document.getElementById('mini_tab32').style.display = 'none';
	document.getElementById('mini_tab33').style.display = 'none';
	
	
	document.getElementById('li_mini_tab31').setAttribute("class", "");
	document.getElementById('li_mini_tab32').setAttribute("class", "");
	document.getElementById('li_mini_tab33').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function sub_tab12(tab) {
	document.getElementById('mini_tab34').style.display = 'none';
	document.getElementById('mini_tab35').style.display = 'none';
	document.getElementById('mini_tab36').style.display = 'none';
	
	
	document.getElementById('li_mini_tab34').setAttribute("class", "");
	document.getElementById('li_mini_tab35').setAttribute("class", "");
	document.getElementById('li_mini_tab36').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function sub_tab13(tab) {
	document.getElementById('mini_tab37').style.display = 'none';
	document.getElementById('mini_tab38').style.display = 'none';
	document.getElementById('mini_tab39').style.display = 'none';
	
	
	document.getElementById('li_mini_tab37').setAttribute("class", "");
	document.getElementById('li_mini_tab38').setAttribute("class", "");
	document.getElementById('li_mini_tab39').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}


function sub_tab14(tab) {
	document.getElementById('mini_tab40').style.display = 'none';
	document.getElementById('mini_tab41').style.display = 'none';
	document.getElementById('mini_tab42').style.display = 'none';
	
	
	document.getElementById('li_mini_tab40').setAttribute("class", "");
	document.getElementById('li_mini_tab41').setAttribute("class", "");
	document.getElementById('li_mini_tab42').setAttribute("class", "");
	
	
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
}
//*****START MINI SUB TABS*****