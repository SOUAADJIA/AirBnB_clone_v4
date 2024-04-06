$(document).ready(function () {
  const selectedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).closest('li').data('id');
    const amenitName = $(this).closest('li').data('name');

    if (this.checked) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete slectedAmenities[amenityId];
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
