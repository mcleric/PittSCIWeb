$(document).ready(function(){
	if(window.innerWidth < 992){
			shrinkWindow();
	}

	var list = $('ol.breadcrumb');
	var items = list.children();
	var count = 1;
	var span;
	for(i=0; i<items.length; i++){
		a = items.eq(i);
		span = a.children();
		span.html(count);
		count++;
		
	}
	
	list = $('ol.breadcrumb');
	adjCrumbs(list);
	
});

function adjCrumbs(list){
	var total_len = 0;
	var items = list.children();
	var max_len = $('#breadcrumb-container').width();
	var new_items;
	var new_list;
	var old_margin;
	var old_pos = $(items[0]).position().top;
	for(i=1; i<items.length; i++){
			if($(items[i]).position().top != old_pos){
				new_items = items.splice(i, (items.length - i));
				list.after('<ol class=breadcrumb></ol>');
				new_list = $('ol.breadcrumb');
				new_list = $(new_list[new_list.length - 1]);
				old_margin = list.css('margin-left');
				old_margin = (parseInt(old_margin) + (screen.width * 0.05)) + 'px';
				new_list.css('margin-top', '0').css('margin-left', old_margin);
				new_list.append(new_items);
				adjCrumbs(new_list);
				
			}
	
	}
	
}

window.onresize=function(){
	var lists = $('ol.breadcrumb');
	var new_list = $(lists[0]);
	var items;
	for(i=1; i < lists.length; i++){
		items = $(lists[i]).children();
		$(new_list).append(items);
		$(lists[i]).remove();
	
	}
	adjCrumbs(new_list);
	
	if(window.innerWidth < 992){
		shrinkWindow();
	}else{
		growWindow();
	
	}
	
};

function growWindow(){
	var nav = document.getElementById('nav-grad');
	$('#content-section').before(nav);
}


function shrinkWindow(){
	var nav = document.getElementById('nav-grad');
	$('#info-footer').before(nav);


}