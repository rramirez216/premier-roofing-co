import { useMemo } from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api'

function Map() {
  const center = useMemo(
    () => ({ lat: 34.097758791613934, lng: -117.75376845281173 }),
    []
  )

  return (
    <GoogleMap zoom={19} center={center} mapContainerClassName='h-96'>
      <MarkerF position={center} />
    </GoogleMap>
  )
}

export default Map
