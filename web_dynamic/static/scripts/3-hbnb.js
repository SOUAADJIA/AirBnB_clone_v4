$(document).ready(function () {
	const selectedAmenities = {};
        $('li input[type="checkbox"]').change(function () {
                if (this.checked) {
                        selectedAmenities[this.dataset.name] = this.dataset.id;
                } else {
                        delete slectedAmenities[this.dataset.name];
                }
                $('.amenities h4').text(Object.keys(amenities).sort().join(", "));
        });
        // get status of API
        $.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
                if (data.status === "OK") {
                        $("div#api_status").addClass("available");
                } else {
                        $("div#api_status").removeClass("available");
                }
        });
  	$.ajax({
	  	type: "POST",
	  	url: "http://0.0.0.0:5001/api/v1/places_search/",
	  	contentType: "application/json",
	  	data: JSON.stringify({}),
	  	success: function (response) {
		  	response.forEach(function(place) {
			  	let article = $("<article>");
			  	let title_box = $("<div>").addClass("title_box");
			  	const name = $("<h2>").text(place.name);
			  	const price_by_night = $("<div>").addClass("price_by_night").text(place.price_by_night);
			  	let information = $("<div>").addClass("information");
			  	const max_guest = $("<div>").addClass("max_guest").text(place.max_guest);
			  	const number_rooms = $("<div>").addClass("number_rooms").text(place.number_rooms);
			  	const number_bathrooms = $("<div>").addClass("number_bathrooms").text(place.number_bathrooms);
			  	const description = $("<div>").addClass("description").text(place.description);
			  	const user = $('div').Text(place.user.first_name, place.user.last_name);
			  	const title_box_items = $(".title_box").append(name, price_by_night);
			  	const information_items = $('.information').append(max_guest, number_rooms, number_bathrooms);
			  	article.append(title_box_items, information_items, user, description);
			  	$("section.places").append(article);
		  });
	  },
  });
});
