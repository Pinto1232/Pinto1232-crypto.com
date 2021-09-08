import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -33.875865,
    lng: 18.632844
  };
  

const MapComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCP_SKZRjzNwBjzxs-8z4T7ptm7_exn2OI"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(map)
    }, [])

      
    return isLoaded ?(
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
         >
        <></>
      </GoogleMap>
     ) : <></>    
}

export default MapComponent
