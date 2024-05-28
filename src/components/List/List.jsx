import './List.scss'
import {listData} from '../../lib/dummydata'
import Card from '../Card/Card'

function List (){
    return(
        <div className='List'>
            {listData.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}
export default List