$(document).ready(function() {
	$("form").on("submit", function() {
		// reference the input field
		var item = $("form input");
		// get what is typed to the input field
		var todo = { item: item.val() };
		// make ajax req to the server
		$.ajax({
			type: "POST",
			url: "/todo",
			data: todo,
			success: function(data) {
				//do something with the data via front-end framework
				location.reload();
			}
		});

		return false;
	});

	$("li").on("click", function() {
		var item = $(this)
			.text()
			.replace(/ /g, "-");
		$.ajax({
			type: "DELETE",
			url: "/todo/" + item,
			success: function(data) {
				//do something with the data via front-end framework
				location.reload();
			}
		});
	});
});
