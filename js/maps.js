 let map;
 
 function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 52.1307, lng: -3.7837}
    });

    addMarker({coords:{lat:51.5285, lng:-3.0318},
    iconImage:'images/horseriding.png', content: '<h3>Springfield Riding Stables</h3>'});
    addMarker({coords:{lat:51.5858, lng:-3.1938},
    iconImage:'images/horseriding.png', content:'<h3>Sunnybank Equestrian Centre</h3>'});
    addMarker({coords:{lat:51.5873, lng:-3.0293},
    iconImage:'images/horseriding.png', content:'<h3>Beau Court Stud & Riding School</h3>'});
    addMarker({coords:{lat:51.7015, lng:-3.1743},
    iconImage:'images/horseriding.png', content:'<h3>Smugglers Equestrian Centre</h3>'});
    addMarker({coords:{lat:52.0128, lng:-3.1806},
    iconImage:'images/horseriding.png', content:'<h3>Treggoyd Mountain Riders</h3>'});
    addMarker({coords:{lat:51.4945, lng:-3.2059},
    iconImage:'images/horseriding.png', content:'<h3>Cardiff Riding School</h3>'});
    addMarker({coords:{lat:51.845692, lng:-2.954870},
    iconImage:'images/horseriding.png', content:'<h3>Dewicwrt Riding School</h3>'});
    addMarker({coords:{lat:51.562561, lng:-3.243430},
    iconImage:'images/horseriding.png', content:'<h3>Rockwood Riding Centre</h3>'});
    addMarker({coords:{lat:51.711420, lng:-3.464610},
    iconImage:'images/horseriding.png', content:'<h3>Greenmeadow Riding Centre</h3>'});
    addMarker({coords:{lat:51.587090, lng:-2.914490},
    iconImage:'images/horseriding.png',content:'<h3>Ponderosa Equestrian Centre</h3>'});
    addMarker({coords:{lat:51.403010, lng:-3.521020},
    iconImage:'images/horseriding.png', content:'<h3>Dimlands Riding School</h3>'});
    addMarker({coords:{lat:51.430400, lng:-3.198120},
    iconImage:'images/horseriding.png', content:'<h3>Downs-Side Riding and Livery Centre</h3>'});
    addMarker({coords:{lat:51.447262, lng:-3.343560},
    iconImage:'images/horsetrekking.png', content:'<h3>Liege Manor</h3>'});
    addMarker({coords:{lat:51.857650, lng:-2.999080},
    iconImage:'images/horseriding.png', content:'<h3>Triley Fields Equestrian Centre</h3>'});

function addMarker(props){
    var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            icon: props.iconImage,
            animation: google.maps.Animation.DROP,
        });
    
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
        content:props.content
    });
    
    marker.addListener('click',  function() {
        toggleBounce(marker);
        infoWindow.open(map, marker);
    });
    }
}

function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        } 
    } 
}