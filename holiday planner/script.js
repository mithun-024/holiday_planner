$(document).ready(function () {
  // Destination Search
  $("#destinationSelect").change(function () {
    const destination = $(this).val();
    let result = "";
    if (destination === "beach") result = "🏖️ Relax at beautiful beaches!";
    if (destination === "mountains") result = "⛰️ Explore mountain adventures!";
    if (destination === "city") result = "🏙️ Enjoy city life & culture!";
    $("#destinationResult").text(result);
  });

  // Accommodation & Transport
  $("#accommodationForm").submit(function (e) {
    e.preventDefault();
    const hotel = $("#hotel").val();
    const transport = $("#transport").val();
    $("#accommodationResult").html(`<p>Hotel: ${hotel}, Transport: ${transport}</p>`);
    $(this)[0].reset();
  });

  // Activity Planner
  $("#activityForm").submit(function (e) {
    e.preventDefault();
    const activity = $("#activity").val();
    const date = $("#activityDate").val();
    if (activity && date) {
      $("#activityList").append(`<li class="list-group-item">${date}: ${activity}</li>`);
      $("#itinerary").append(`<p>${date} - ${activity}</p>`);
      $(this)[0].reset();
    }
  });

  // Budget Tracker
  $("#budgetForm").submit(function (e) {
    e.preventDefault();
    const flight = parseFloat($("#flightCost").val()) || 0;
    const hotel = parseFloat($("#hotelCost").val()) || 0;
    const activity = parseFloat($("#activityCost").val()) || 0;
    const total = flight + hotel + activity;
    $("#budgetResult").text(`💰 Total Estimated Budget: $${total}`);
  });
});

