var key = 'b9d7d29b36b0225bbc6118ee8e8a125e';
  var url = "https://api.openweathermap.org/data/2.5/forecast";
  
  moment().format('MMMM Do YYYY, h:mm:ss a');

  function fiveDayForecast(userInput) {
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      data: {
        q: userInput,
        appid: key,
        units: "imperial",
        cnt: "5"
      },
      success: function(data) {
        $("#five-day-forecast").empty();
        for (var i = 0; i < data.list.length; i++) {
         if(data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
          var colEl = $("<div>").addClass("col col-lg-2");
          var cardEl = $("<div>").addClass("card text-white bg-primary m-3");
          var cardBody = $("<div>").addClass("card-body");
          var cardTitle = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
          var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
          var cardText1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp_max + " °F");
          var cardText2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");
          colEl.append(cardEl.append(cardBody.append(cardTitle, img, cardText1, cardText2)));
          $("#five-day-forecast").append(cardEl);
         }
        }
      }
    })
  }
});
  