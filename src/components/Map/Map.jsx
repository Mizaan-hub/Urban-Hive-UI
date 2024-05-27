import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './Map.scss'
import Pins from '../Pins/Pins'

function Map ({items}){
    return(
        <MapContainer center={[52.4862, -1.8904]} zoom={7} scrollWheelZoom={false} className='Map'>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(item => (
            <Pins item={item} key={item.id}/>
        ))}
        </MapContainer>
    )
}
export default Map