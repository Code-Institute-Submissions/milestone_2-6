function initMap() {
        var centre = {lat:55.378052, lng:-3.435973};

        var locations = [
        ['Springfield Riding Stables. St.Brides Gardens, Newport, NP10 8SR', 51.5285, -3.0318],
        ['Sunnybank Equestrian Centre. Sunnybank Farm, Rudry, CF83 3DT', 51.5858, -3.1938],
        ['Beau Court Stud & Riding School. Cwrt-y-mwnws Farm, Allt-yr-yn, Newport, NP20 5EL', 51.5873, -3.0293],
        ['Smugglers Equestrian Centre. Blackwood, Caerphilly, NP12 0HU', 51.7015, -3.1743],
        ['Treggoyd Mountain  Riders. Lower Cwmcadarn Farm, Velindre,, Brecond, LD3 0TB', 52.0128, -3.1806],
        ['Cardiff Riding School. Pontcanna Fields, Fields Park Rd, Cardiff, CF5 2AX', 51.4945, -3.2059]
        ];

        var map = new google.maps.Map(document.getElementById("map"), {
        zoom:5,
        center: centre,
    });

    var infowindow =  new google.maps.InfoWindow({});

    var marker, count;

    for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}
