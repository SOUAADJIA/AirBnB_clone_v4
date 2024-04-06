$(document).ready(function () {
  let selectedAmenities = {};

  // Listen for changes on amenity checkboxes
  $('input[type="checkbox"][data-id]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    // Update the h4 tag with the list of selected amenities
    updateAmenitiesList();
  });

  function updateAmenitiesList() {
    let amenitiesArray = Object.values(selectedAmenities);
    const amenitiesList = amenitiesArray.join(', ');

    $('.amenities h4').text(amenitiesList);
  }
});

