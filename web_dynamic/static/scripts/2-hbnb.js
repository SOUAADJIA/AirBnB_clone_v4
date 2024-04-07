$(document).ready(function () {
	const selectedAmenities = {};
	$('li input[type="checkbox"]').change(function () {
		if (this.checked) {
			selectedAmenities[this.dataset.name] = this.dataset.id;
		} else {
			delete selectedAmenities[this.dataset.name];
		}
		$('.amenities h4').text(Object.keys(selectedAmenities).sort().join(", "));
	});
	// get status of API
	$.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
		if (data.status === "OK") {
			$("div #api_status").addClass("available");
		} else {
			$("div #api_status").removeClass("available");
		}
	});
});
