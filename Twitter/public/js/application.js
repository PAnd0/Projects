$(document).ready(function(){
	$('table.table-condensed').on('submit',"form.fav",function(e){
		e.preventDefault();
		var $form = $(this);
		$.ajax({
			url: $form.attr('action'),
			method: $form.attr('method'),
			data: $form.serialize()
		})
		.done(function(resp){
			
			$form.closest('.some').siblings().find('.fav').html(resp['count']);
			// $('div.fav').html(resp['count']);
		})
	})

	$('table.table-condensed').on('submit',"form.retweet",function(e){
		e.preventDefault();
		var $form = $(this);
		$.ajax({
			url: $form.attr('action'),
			method: $form.attr('method'),
			data: $form.serialize()
		})
		.done(function(resp){
			$form.closest('.some').siblings().find('.retweet').html(resp['count']);
		})
	})

	$('table.table-condensed').on('submit',"form.reply",function(e){
		e.preventDefault();
		var $form = $(this);
		$.ajax({
			url: $form.attr('action'),
			method: $form.attr('method'),
			data: $form.serialize()
		})
		.done(function(resp){
			$form.closest('.some').siblings().find('.reply').html(resp['count']);
		})
	})


})