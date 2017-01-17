$(document).ready(function(){
	
	//if window drops below 992px, need to move side nav to bottom of page
	if(window.innerWidth <= 992){
			shrinkWindow();
	}
	
	numberCrumbs();
	
	
});


//this function dynamically depopulates and repopulates course offerings based on the text in the input_bar
//best search criteria would be course name/number or instructor
$('#input_bar').on('input', function() {
	//user input
	var input = $('#input_bar')[0].value;
	
	//each course entry in the table is contained within a div.moreInfoWrapper
	//so filter all of these into two seperate lists, one list contains the user input, the other does not
	//put everything into uppercase so that the search is case insensitive
	var matches = $('div.moreInfoWrapper').filter(function(){
		return $(this).text().toUpperCase().indexOf(input.toUpperCase()) >= 0;
	});
	
	var notMatches = $('div.moreInfoWrapper').filter(function(){
		return $(this).text().toUpperCase().indexOf(input.toUpperCase()) < 0;
	});
	
	//simply hide all of the courses that do not contain the user input and show the ones that do
	notMatches.hide();
	matches.show();
	
});

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
}

//shrinkWindow() handles the repositioning of the sidenav to the bottom (for mobile devices and when the window gets too small)
function shrinkWindow(){
	var nav = document.getElementById('nav-grad');
	$('#info-footer').before(nav);


}