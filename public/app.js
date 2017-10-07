$(function(){
	console.log("Reloaded")

	$('body').on('click','#search', search)

});

var search = function(){
	var location = $('#location').val()
	var typeFood = $('#typeFood').val()

	$.ajax({
		url: '/search',
		method: 'GET'
	})
	.done(console.log(data))
	


}