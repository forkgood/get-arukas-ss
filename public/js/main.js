$(".ss").each(function(index, el) {
	$(el).empty();
	$(el).qrcode({
		width: 300,
		height: 300,
		text: "ss://" + btoa($(el).attr('value'))
	});
});