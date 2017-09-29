// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(e) { 
	
	$(".post").click(function(){
		
		$(this).find(':nth-child(4)').slideToggle("slow");
        
    });

	$("div.edit_button").on("click",function(){
		
		$(this).parent().next().slideToggle()
	})

	$('div#summon_create_post').on("click",function(){
		
		$("#ajax_create_post").slideToggle();
	})

	$("div.cancel_post").on("click",function(){
		$("#ajax_create_post").slideToggle();
	})

	var d = new Date();
	
document.getElementById("current_time").innerHTML = d.toDateString();
	// $('a:contains("Edit")').on("click",function(e){
	// 	console.log("Edit clicked");
	// 	$("#EP").appendTo($(this).parent().parent())
		
	// });
	$("select.main_filter").change(function(){
		
		if($("select").val() == "1st"){
			
			$("td:contains('2nd')").parent().hide();
			$("td:contains('3rd')").parent().hide();
			$("td:contains('Personal')").parent().hide();
			$("td:contains('Other')").parent().hide();
			$("td:contains('1st')").parent().show();
		}
		else if($("select").val() == "2nd"){
			
			$("td:contains('1st')").parent().hide();
			$("td:contains('3rd')").parent().hide();
			$("td:contains('Personal')").parent().hide();
			$("td:contains('Other')").parent().hide();
			$("td:contains('2nd')").parent().show();
		}
		else if($("select").val() == "3rd"){
			
			$("td:contains('2nd')").parent().hide();
			$("td:contains('1st')").parent().hide();
			$("td:contains('Personal')").parent().hide();
			$("td:contains('Other')").parent().hide();
			$("td:contains('3rd')").parent().show();
		}
		else if($("select").val() == "Personal"){
			
			$("td:contains('2nd')").parent().hide();
			$("td:contains('3rd')").parent().hide();
			$("td:contains('1st')").parent().hide();
			$("td:contains('Other')").parent().hide();
			$("td:contains('Personal')").parent().show();
		}
		else if($("select").val() == "Other"){
			
			$("td:contains('2nd')").parent().hide();
			$("td:contains('3rd')").parent().hide();
			$("td:contains('Personal')").parent().hide();
			$("td:contains('1st')").parent().hide();
			$("td:contains('Other')").parent().show();
		}
		else {
			
			$("td:contains('1st')").parent().show();
			$("td:contains('2nd')").parent().show();
			$("td:contains('3rd')").parent().show();
			$("td:contains('Personal')").parent().show();
			$("td:contains('Other')").parent().show();
		}
	})

	
});
