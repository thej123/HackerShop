var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.468319, lng: -122.143936},
          zoom: 11
        });

          setMarkers(map);
       }


var beaches = [
  ['Infosys Store', 37.401623, -122.136675, 3],
  ['Coogee Beach', 36.401623, -122.036675, 4],
  ['Manly Beach', 37.401623, -122.36675, 2],
  ['Maroubra Beach', 37.801623, -122.066675, 1]
];

   function setMarkers(map) {      
        var image = {
          url: 'http://www.clker.com/cliparts/n/1/Z/v/m/G/letter-h-hi.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < beaches.length; i++) {
          var beach = beaches[i];
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            title: beach[0],
            zIndex: beach[3]
          });
        }
      }

