$(document).ready(function () {
  var countriesall = [];
  var confirmedall = [];
  var recoveredall = [];
  var deathsall = [];
  var activeall = [];

  var searchdata = [0, 0, 0, 0];
  var total = [0, 0, 0, 0];

  var search1 = [0, 0, 0, 0];
  var search2 = [0, 0, 0, 0];

  var found = [false, false, false];
  $.ajax({
    type: "GET",
    url: "https://covid19.mathdro.id/api/confirmed",
    dataType: "json",
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        countriesall.push(data[i].countryRegion);
        confirmedall.push(data[i].confirmed);
        recoveredall.push(data[i].recovered);
        deathsall.push(data[i].deaths);
        activeall.push(data[i].active);
      }

      for (let j = 0; j < confirmedall.length; j++) {
        total[0] += confirmedall[j];
        total[1] += recoveredall[j];
        total[2] += deathsall[j];
        total[3] += activeall[j];
      }
      $("#global div").append(
        '<li class="confirmed"><span><i class="fas fa-sad-tear"></i></span> Total Confirmed: ' +
          total[0] +
          "</li>" +
          '<li class="recovered"><span><i class="fas fa-first-aid"></i></span>Recovered: ' +
          total[1] +
          "</li>" +
          '<li class="dead"><span><i class="fas fa-skull-crossbones"></i></span>Deaths: ' +
          total[2] +
          "</li>" +
          '<li class="active"><span><i class="fas fa-heartbeat"></i></span>Active: ' +
          total[3] +
          "</li>"
      );

      $("#search").keyup(function () {
        found[0] = false;
        searchdata = [0, 0, 0, 0];

        $.each(countriesall, function (i, val) {
          if (val.toLowerCase() == $("#search").val().toLowerCase()) {
            found[0] = true;
            searchdata[0] += confirmedall[i];
            searchdata[1] += recoveredall[i];
            searchdata[2] += deathsall[i];
            searchdata[3] += activeall[i];
          }
        });
        if (found[0] == true) {
          $("#searchres").html(
            '<h1 style="text-transform: capitalize;">' +
              $("#search").val() +
              "</h1>" +
              '<div><li class="confirmed"><span><i class="fas fa-sad-tear"></i></span> Total Confirmed: ' +
              searchdata[0] +
              "</li>" +
              '<li class="recovered"><span><i class="fas fa-first-aid"></i></span>Recovered: ' +
              searchdata[1] +
              "</li>" +
              '<li class="dead"><span><i class="fas fa-skull-crossbones"></i></span>Deaths: ' +
              searchdata[2] +
              "</li>" +
              '<li class="active"><span><i class="fas fa-heartbeat"></i></span> Active: ' +
              searchdata[3] +
              "</li></div>"
          );
          $("#searchres").fadeIn();
        } else {
          $("#searchres").fadeOut();
        }
      });

      $(".search1").keyup(function () {
        found[1] = false;
        search1 = [0, 0, 0, 0];
        $.each(countriesall, function (i, val) {
          if (val.toLowerCase() == $(".search1").val().toLowerCase()) {
            found[1] = true;
            search1[0] += confirmedall[i];
            search1[1] += recoveredall[i];
            search1[2] += deathsall[i];
            search1[3] += activeall[i];
          }
        });
        if (found[1] === true) {
          $("#search1 div").html(
            '<li class="confirmed">Confirmed: ' +
              search1[0] +
              "</li>" +
              '<li class="recovered">Recovered: ' +
              search1[1] +
              "</li>" +
              '<li class="dead">Deaths: ' +
              search1[2] +
              "</li>" +
              '<li class="active">Active: ' +
              search1[3] +
              "</li>"
          );
        }
      });

      $(".search2").keyup(function () {
        found[2] = false;
        search2 = [0, 0, 0, 0];

        $.each(countriesall, function (i, val) {
          if (val.toLowerCase() == $(".search2").val().toLowerCase()) {
            found[2] = true;
            search2[0] += confirmedall[i];
            search2[1] += recoveredall[i];
            search2[2] += deathsall[i];
            search2[3] += activeall[i];
          }
        });
        if (found[2] === true) {
          $("#search2 div").html(
            '<li class="confirmed">Confirmed: ' +
              search2[0] +
              "</li>" +
              '<li class="recovered">Recovered: ' +
              search2[1] +
              "</li>" +
              '<li class="dead">Deaths: ' +
              search2[2] +
              "</li>" +
              '<li class="active">Active: ' +
              search2[3] +
              "</li>"
          );
        }
      });
    },
  });
  $("#compare").click(function () {
    $("#comparediv").slideToggle();
  });
});
