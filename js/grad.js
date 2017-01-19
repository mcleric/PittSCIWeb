/* 
	Would have like to use AJAX/JSON for updates without page reloads,
	but I wanted this website example to be able to be viewed without having to use
	something like apache.  So I settled for using a JS object to hold the html.
*/

var data = 
{
	
		"home":		{"breadcrumbs":"<ol class=\"breadcrumb\"><a href=\"index.html\"><span><\/span>CS Home<\/a><a class=\"home active\"><span><\/span>Graduate<\/a><\/ol>",
					 "content":"<h1 class=\"grad-heading\">Graduate Program</h1><div  id=\"content-img\"><img src=\"img/students1.jpg\"></div><p id=\"first-p\">The faculty of the Department of Computer Science are committed to high quality graduate education. The broad scope of their research enables them to convey to graduate students a comprehensive, state-of-the-art understanding of computer science and its application to a wide range of other disciplines. A substantial level of sponsored research has been achieved thereby providing financial support for many graduate students in the form of research assistantships. </p><p class=\"content-pfix\">Our graduate students come from all corners of the globe and are able to pursue research topics in most areas within computer science and in many application areas within other disciplines. They are able to take advantage of the diverse faculty research collaborations with other departments and programs within the University such as the Learning Research and Development Center, the Intelligent Systems Program, the Telecommunications Program of the School of Information Sciences, the School of Engineering, and the School of Medicine.</p>",
					 "footer":"<h2><b>Stay in Touch with Graduate Faculty</b></h2><p>Mentors & Advisors are here to lend a helping hand to our CS Graduate Students</p><button>Faculty Contacts</button>"
		},
		"admiss":	{"breadcrumbs":"<ol class=\"breadcrumb\"><a href=\"index.html\"><span><\/span>CS Home<\/a><a href=\"\" onclick=\"load_page('home'); return false;\"><span><\/span>Graduate<\/a><a class =\"admiss active\"><span><\/span>Admissions<\/a><\/ol>",
					 "content":"<h1 class=\"grad-heading\">Graduate Admissions<\/h1><div  id=\"content-img\"><img src=\"img\/old_cs.jpg\"><\/div><p id=\"first-p\">An undergraduate degree is the minimal requirement for admission to graduate study.	Students are admitted to a graduate program and granted one of the following three types of status:<ol><li><b>Full graduate status:<\/b> when all admission requirements are met;<\/li><li><b>Provisional graduate status:<\/b> when some admission requirements are not (or inadequately) met;<\/li><li><b>Special graduate status:<\/b> to take specific graduate-level courses for one or more terms.<\/li><\/ol><\/p><\/br><p class=\"content-pfix\">All students, except those with temporary status, must apply either to the MS program or to the PhD program. Please note that an MS degree is not required in order to apply to the PhD program.  Students admitted to the MS program are eligible to complete the requirements for that degree. If they wish to transfer to the PhD program, they must apply to the admissions committee, which will make its decision based on the student's performance in the	MS program and on faculty recommendations.<\/p>",
					 "footer":"<h2><b>Hail to Pitt!<\/b><\/h2><p>Take advantage of the diverse faculty research collaborations with other departments and programs.<\/p><button>Apply Now<\/button>"
		},
		"programs":	{"breadcrumbs":"<ol class=\"breadcrumb\"><a href=\"index.html\"><span><\/span>CS Home<\/a><a href=\"\" onclick=\"load_page('home'); return false;\"><span><\/span>Graduate<\/a><a href=\"\" onclick=\"load_page('admiss'); return false;\"><span><\/span>Admissions<\/a><a class = \"active\"><span><\/span>Degree & Program Options<\/a></ol>",
					 "content":"<h1 class=\"grad-heading\">Degree & Program Options<\/h1><div  id=\"content-img\"><img src=\"img\/old_cs.jpg\"><\/div><\/br><p id=\"first-p\">The University of Pittsburgh Computer Science Department (CSD) has a graduate program of study that provides high quality, advanced training in the field of computer science. The program combines course work, supervised research, and independent research, none of which is sufficient alone. Degrees are awarded at both the Master's (MS) and Doctoral (PhD) levels. The purpose of the MS program is to prepare students for responsible jobs in industry. The purpose of the PhD program is to prepare students for a career of research and/or teaching in computer science.<\/p><h2>Full Graduate Status<\/h2><p class=\"content-pfix\">A student is admitted to a degree program with full graduate status if they have earned at least a BS degree, maintained a grade point average of at least B, and completed minimally a selection of courses in the following topical areas (the corresponding Pitt course numbers are indicated):<ol><li>In Computer Science, one course in each of:<\/li><ul><li>Discrete Structures (CS 0441)<\/li><li>Information/Data Structures (CS 0445)<\/li><li>Computer Organization/Assembly Language (CS 0447)<\/li><li>Theory (CS 1510 or 1511)<\/li><li>Languages (CS 1520 or 1621)<\/li><li>Systems (CS 1550 or 1651)<\/li><\/ul><li>In Mathematics, the following:<\/li><ul><li>The two-course calculus sequence (Math 0220, 0230)<\/li><li>A course in linear algebra (Math 1180 or 0280)<\/li><li>A course in probability and statistics, requiring calculus as prerequisite (Stat 1151, 1152)<\/li><\/ul><\/ol><\/p><h2>Provisional Status<\/h2><p class=\"content-pfix\">A student may be admitted to the MS degree program with provisional status if their qualifications are minimally deficient. Such students will be advanced to full graduate status after removal of the identified deficiencies. Students are expected to gain full graduate status by the time they complete 18 credits or, equivalently, one academic year of full-time graduate studies. Students with provisional status are not allowed to hold a teaching assistantship.<\/p><h2>Special Graduate Status<\/h2><p class=\"content-pfix\">This status allows a student to take graduate-level courses without enrolling in a graduate program. Special status is appropriate for a student who:<ul><li>Wants to take one or more specific courses for which they have the necessary qualifications;<\/li><li>Has deficiencies (in background or low grades);<\/li><li>Fails to meet the deadline for filing an official application for admission but has met all of the requirements for admission into a degree program with full graduate status.<\/li><\/ul>A student interested in applying for such special status must first obtain written permission from the faculty member teaching the course of interest. Students are then required to fill out & submit an application for admission to special graduate status. Further instructions can be found here.<\/p>",
					 "footer":"<h2><b>Hail to Pitt!<\/b><\/h2><p>Take advantage of the diverse faculty research collaborations with other departments and programs.<\/p><button>Apply Now<\/button>"
	
		}

};

$(document).ready(function(){

/*
	Ideally there would be a conditional here that used sessionStorage so that once the page is loaded, a refresh doesn't 
	necessarily redirect to graduate homepage. But as I stated above, I wanted this example to be able to be viewed without
	something like apache
*/
	load_page('home');
	
	
	//if window drops below 992px, need to move side nav to bottom of page
	if(window.innerWidth <= 992){
			shrinkWindow();
	}
	
});

function load_page(page_name){

	//This is where AJAX would have been used
	//instead, html is updated (based on page the user is on) via a JS object 
	$('div#breadcrumb-container').html(data[page_name].breadcrumbs);
	$('div#content-section').html(data[page_name].content);
	$('div#info-dialog').html(data[page_name].footer);
	
	//call to numberCrumbs to properly number the generated breadcrumbs
	numberCrumbs();
	
	//grab all links in side nav and ensure they are not displayed as active
	
	//outer side nav links
	$('a.outer-grad-link').removeClass('active');
	//inner side nav links
	$('a.nav-link-grad').removeClass('active');
	
	//if page being directed to is the graduate home page, hide all inner items
	if(page_name == 'home'){
		$('li.inner-item').slideUp(900);
	}else{
		//else we only hide inner items who are not going to be displayed here, and then display all additional relevant items
		var tag = 'li.prime_' + page_name;
		$('li.inner-item:not('+tag+')').slideUp(900, function(){
			$(tag).slideDown(900);
		});
	}
	
	//add active class to relevant items
	var name = "."+page_name;
	$(name).addClass('active');

}


/*	
	Dynamic breadcrumb numbering system. This is necessary to maintain continuous numbering, because when breadcrumb ol 
	exceeds the width of the page, must create a new ol undernearth the previous ol
*/

function numberCrumbs(){
	//grab ol.breadcrumb
	var list = $('ol.breadcrumb');
	//items is an array of <a>'s (breadcrumb hyperlinks)
	var items = list.children();
	var count = 1;
	var span;
	//each <a> contains an empty <span> child, which will hold it's respective counter
	for(i=0; i<items.length; i++){
		a = items.eq(i);
		span = a.children();
		span.html(count);
		count++;
		
	}
	
	//breadcrumb numbering is done on a single, original ol.  adjCrumbs is then called to split into multiple 
	//ol's if breadcrumbs exceed page width
	list = $('ol.breadcrumb');
	adjCrumbs(list);

}

function adjCrumbs(list){
	var total_len = 0;
	//items is a list of all the breadcrumb <a> elements
	var items = list.children();
	//determine the width of the breadcrumb container
	var max_len = $('#breadcrumb-container').width();
	
	var new_items;
	var new_list;
	
	//old_margin will be used to keep track of the positioning of the previous ol.
	//when we create a new ol underneath of the previous one, we want to indent the new ol based on the position of the previous
	var old_margin;
	
	//old_pos will track the vertical positioning of the current ol
	//if at any point a list element has a different value than old_pos, it means that this element has overflowed onto the next line
	//and therefore must be placed into a new ol
	var old_pos = $(items[0]).position().top;
	for(i=1; i<items.length; i++){
			//check to see if <a> has overflowed
			if($(items[i]).position().top != old_pos){
				//if it has, splice the previous ol at the point of overflowed
				//this creates an array of items containing the remaining <a>'s that would not fit in the previous ol
				//in doing so, it also ensures that the last <a> in the previous ol is identified as such (so that it displays as a final element, 
				//i.e. doesn't have an arrow on the right side like a breadcrumb element in the middle of the ol would)
				new_items = items.splice(i, (items.length - i));
				
				//create a new ol.breadcrumb and place underneath of the previous one
				list.after('<ol class=breadcrumb></ol>');
				new_list = $('ol.breadcrumb');
				
				//new_list is technically a list of all ol.breadcrumb's, so grab the last one
				new_list = $(new_list[new_list.length - 1]);
				
				//determine where we will position this new ol (indented slightly from the position of the previous one
				old_margin = list.css('margin-left');
				old_margin = (parseInt(old_margin) + (screen.width * 0.05)) + 'px';
				new_list.css('margin-top', '.5vh').css('margin-left', old_margin);
				
				//append all remaining <a>'s to this new ol.breadcrumb and call adjCrumbs on this new list (in case there is additional overflow)
				new_list.append(new_items);
				adjCrumbs(new_list);
				
			}
	
	}
	
}

//function that handles the reorganization of breadcrumbs whenever the page is resized by the user
window.onresize=function(){
	//grab a list all ol.breadcrumbs
	var lists = $('ol.breadcrumb');
	
	//the following code starts by grabbing all of the <a>'s in the first ol.breadcrumb
	//it then loops through the remaining ol.breadcrumbs and appends their <a>'s to the same list.
	var new_list = $(lists[0]);
	var items;
	for(i=1; i < lists.length; i++){
		items = $(lists[i]).children();
		$(new_list).append(items);
		$(lists[i]).remove();
	
	}
	
	//once all of the <a>'s are placed into a single list, we call adjCrumbs to organize appropriately
	adjCrumbs(new_list);
	
	if(window.innerWidth <= 992){
		shrinkWindow();
	}else{
		growWindow();
	
	}
	
};

//growWindow() handles the repositioning of the sidenav from the bottom, back to the side
function growWindow(){
	var nav = document.getElementById('nav-grad');
	$('#content-section').before(nav);
	
	//when we are growing the window, side nav is repositioned back to the side
	//in order to properly view the side nav sliding animation, we will remove the href'same
	$('a.outer-grad-link').removeAttr('href');
	$('a.nav-link-grad').removeAttr('href');
}

//shrinkWindow() handles the repositioning of the sidenav to the bottom (for mobile devices and when the window gets too small)
function shrinkWindow(){
	var nav = document.getElementById('nav-grad');
	$('#info-footer').before(nav);
	
	//whenever we navigate in mobile view (when side nav is at the bottom of the page), no page reload means that the view is shifted because
	//new elements being inserted into the page.  We will therefore anchor to the top of the page for a better user experience.
	$('a.outer-grad-link').attr('href', '#');
	$('a.nav-link-grad').attr('href', '#');

}
