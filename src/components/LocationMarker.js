import { Icon } from '@iconify/react'


const LocationMarker = ({lat, lng, onClick, icon}) => {
    return (
        <div className='location-marker' onClick={onClick}>
            <Icon icon={icon} className='location-icon'></Icon>
        </div>
    )
}

export default LocationMarker