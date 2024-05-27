import { listData } from '../../lib/dummydata'
import Filter from '../../components/Filter/Filter';
import './ListPage.scss'
import Card from '../../components/Card/Card';

function ListPage (){

    const data = listData;

    return(
        <div className='ListPage'>
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item =>(
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
            </div>

            <div className="mapContainer">
                Map
            </div>
        </div>
    )
}
export default ListPage