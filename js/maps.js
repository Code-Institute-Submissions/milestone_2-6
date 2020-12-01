 let map;

 //initialise a new map in java 
 function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 52.1307, lng: -3.7837}
    });

    addMarker({coords:{lat:51.5285, lng:-3.0318},
    iconImage:'images/horseriding.png', content: '<h5>Springfield Riding Stable</h5><p>St Brides Gardens, Newport, NP10 8SR</p>'});
    addMarker({coords:{lat:51.5858, lng:-3.1938},
    iconImage:'images/horseriding.png', content:'<h5>Sunnybank Equestrian Centre</h5><p>Sunnybank Farm, Rudry, CF83 3DT</p>'});
    addMarker({coords:{lat:51.5873, lng:-3.0293},
    iconImage:'images/horseriding.png', content:'<h5>Beau Court Stud & Riding School</h5><p>Cwrt-y-mwnws Farm, Allt-yr-yn, Newport, NP20 5EL</p>'});
    addMarker({coords:{lat:51.7015, lng:-3.1743},
    iconImage:'images/horseriding.png', content:'<h5>Smugglers Equestrian Centre</h5><p>Unnamed Road, Blackwood, NP12 0HU</p>'});
    addMarker({coords:{lat:51.4945, lng:-3.2059},
    iconImage:'images/horseriding.png', content:'<h5>Cardiff Riding School</h5><p>Pontcanna Fields, Fields Park Rd, Cardiff, CF5 2AX</p>'});
    addMarker({coords:{lat:51.845692, lng:-2.954870},
    iconImage:'images/horseriding.png', content:'<h5>Dewicwrt Riding School</h5><p>3 Llandewi Court, Llanddewi Skirrid, Abergavenny, NP7 8AW</p>'});
    addMarker({coords:{lat:51.562561, lng:-3.243430},
    iconImage:'images/horsetrekking.png', content:'<h5>Rockwood Riding Centre</h5><p>Craig-yr-Ally, Caerphilly, CF83 1NF</p>'});
    addMarker({coords:{lat:51.711420, lng:-3.464610},
    iconImage:'images/horsetrekking.png', content:'<h5>Greenmeadow Riding Centre</h5><p>Dare Valley Country Park, Aberdare, CF44 7PT</p>'});
    addMarker({coords:{lat:51.587090, lng:-2.914490},
    iconImage:'images/horseriding.png',content:'<h5>Ponderosa Equestrian Centre</h5><p>Barn Farm, Station Rd, Newport, NP18 2DW</p>'});
    addMarker({coords:{lat:51.403010, lng:-3.521020},
    iconImage:'images/horseriding.png', content:'<h5>Dimlands Riding School</h5><p>Dimlands Dimlands Rd, Llantwit Major, CF61 1YX</p>'});
    addMarker({coords:{lat:51.831770, lng:-3.683600},
    iconImage:'images/horseriding.png', content:'<h5>Pentre Riding Stables</h5><p>Brecon Rd, Craig-y-nos, Swansea, SA9 1GJ</p>'});
    addMarker({coords:{lat:51.447262, lng:-3.343560},
    iconImage:'images/horsetrekking.png', content:'<h5>Liege Manor</h5><p>Bonvilston, Cardiff, CF5 6TQ</p>'});
    addMarker({coords:{lat:51.857650, lng:-2.999080},
    iconImage:'images/horseriding.png', content:'<h5>Triley Fields Equestrian Centre</h5><p>Upper Triley Farm, Llantilio Pertholey, Abergavenny, NP7 8DF</p>'});
    addMarker({coords:{lat:51.456860, lng:-3.589550},
    iconImage:'images/horsetrekking.png', content:'<h5>St Brides Major Riding Trekking Centre</h5><p>Farmers Arms Lane, St Brides Major, CF32 0SE</p>'});
    addMarker({coords:{lat:51.477770, lng:-3.607450},
    iconImage:'images/horsetrekking.png', content:'<h5>Ogmore Farm Riding Centre</h5><p>Ogmore-by-Sea, CF32 0QP</p>'});
    addMarker({coords:{lat:51.988750, lng:-3.092730},
    iconImage:'images/horsetrekking.png', content:'<h5>Grange Pony Trekking</h5><p>Capel-Y-Fin, Abergavenny, NP7 7NP</p>'});
    addMarker({coords:{lat:51.976390, lng:-3.217740},
    iconImage:'images/horsetrekking.png', content:'<h5>Trans Wales Trails Horse Riding</h5><p>Blaenau Bach,, Penbont Rd, Talgarth, LD3 0EG</p>'});
    addMarker({coords:{lat:52.022200, lng:-3.189670},
    iconImage:'images/horseriding.png', content:'<h5>Tregoyd Mountain Riders</h5><p>Lower Cwmcadarn Farm, Velindre, Brecon, LD3 0TB</p>'});
    addMarker({coords:{lat:51.403010, lng:-3.521020},
    iconImage:'images/horseriding.png', content:'<h5>Talygarn Equestrian Centre</h5><p>Talygarn, Pontyclun, CF72 9JT</p>'});
    addMarker({coords:{lat:51.944511, lng:-3.230960},
    iconImage:'images/horsetrekking.png', content:'<h5>Llangorse Multi Activity Centre</h5><p>Gilfach Farm, Llangorse, Brecon, LD3 7UH</p>'});
    addMarker({coords:{lat:51.549510, lng:-3.493700},
    iconImage:'images/horseriding.png', content:'<h5>South Wales Equestrian Centre</h5><p>Bridgend, CF35 6NH</p>'});
    addMarker({coords:{lat:51.916990, lng:-3.390180},
    iconImage:'images/horseriding.png', content:'<h5>Cantref - Adventure Farm</h5><p>Upper Cantref Farm, Cantref, Brecon, LD3 8LR</p>'});

//generates the marker
function addMarker(props){
    let marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            icon: props.iconImage,
            animation: google.maps.Animation.DROP,
        });
    //applies the info window content
    if(props.content){
        let infoWindow = new google.maps.InfoWindow({
        content:props.content
    });
    //listens for the click event in order to zoom and apply animation
    marker.addListener('click',  function() {
        toggleBounce(marker);
        map.setZoom(8);
        map.setCenter(marker.getPosition());
        infoWindow.open(map, marker);
        });
    }
    //listens for the click event to pan the map back to the marker after 3 seconds
    map.addListener('click', function() {
        window.setTimeout(() => {
            map.panTo(marker.getPosition());
        }, 3000);
        if (infoWindow) infoWindow.close();
    });
}
//applies the bounce animation to the marker
function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        } 
    } 
}