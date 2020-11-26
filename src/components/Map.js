import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import LocationInfoBox from './LocationInfoBox'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) { // Map Wildfires
            return <LocationMarker icon={fireIcon} key={ev.id} className='location-icon' style={{color: "orange"}} onClick={e => setLocationInfo({title: ev.title, source: ev.sources[0].id})} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCD_Ca__kt3MN7liFfFpVt5DFJ3aCz3cZE'}}
                defaultCenter={ center }
                defaultZoom={ zoom }>
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}></LocationInfoBox>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8765
    },
    zoom: 6
}

export default Map