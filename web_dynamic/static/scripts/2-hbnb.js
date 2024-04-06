$(document).ready(function () {
  const selectedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).closest('li').data('id');
    const amenityName = $(this).closest('li').data('name');

    if (this.checked) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId]; // Corrected the variable name here
    }

    const amenitiesList = Object.values(selectedAmenities).join(', ');
    $('.amenities h4').text(amenitiesList);
  });

  $.get("http://0.0.0.0:5001/api/v1/status/", function(data) {
	  if (data.status === "OK") {
		  $("#api_status").addClass("available");
	  } else {
		  $("#api_status").removeClass("available");
	  }
  });
});
