export default function() {
    
    if('geolocation' in navigator) {
        let position;
  
        let success = (p) => {
          position = p;
          queryPosition(position.coords.latitude, position.coords.longitude);
          navigator.geolocation.getCurrentPosition(success, error);
        }
  
        let error = (msg) => {
          console.error(msg);
        }
  
        let queryPosition = (lat, lon) => {
            let coords = {
                latitude: lat,
                longitude: lon
            }

            return coords;
        }
  
        navigator.geolocation.getCurrentPosition(success, error);
  
      } else {
        console.log('Geolocation not available...');
      }

}