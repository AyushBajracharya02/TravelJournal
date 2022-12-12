import "../Styles/App.css";
import Nav from './Nav';
import navdata from '../Data/NavData';
import Location from './Location';
import locationdata from '../Data/LocationData';

export default function App({props}) {
    const Locations = locationdata.map((data)=>{
        return <Location key={data.id} props={data} />
    })
    return (
        <div className="journal">
            <Nav props={navdata} />
            <main>
                {Locations}
            </main>
        </div>
    )
}