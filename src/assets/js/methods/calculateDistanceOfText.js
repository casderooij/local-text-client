export default function(lat1, lon1) {
    let lat2, lon2, d;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat2 = position.coords.latitude;
            lon2 = position.coords.longitude;

            console.log('test')
            var R = 6371;
            var dLat = (lat2-lat1) * Math.PI / 180;
            var dLon = (lon2-lon1) * Math.PI / 180;
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            d = R * c;
        });
    } else {
        console.log('Geolocation is not supported by this browser...');
    }

    if(d>1) {
        console.log(Math.round(d)+"km");
    } else if(d<=1) {
        console.log(Math.round(d*1000)+"m");
    }
}