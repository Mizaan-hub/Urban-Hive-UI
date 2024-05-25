import { useState } from 'react'
import './SearchBar.scss'

const types = ["buy", "rent"];

function SearchBar (){

    const [query,setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:"0",
        maxPrice:"0",
    })

    const switchType = (val) =>{
        setQuery((prev) => ({...prev,type: val}));
    }

    return(
        <div className='SearchBar'>
            <div className="type"> 
                {types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>
                        {type}
                    </button>
                ))}
            </div>
            <form action="">
                <input type="text" name="location" placeholder='City Location' />
                <input 
                type="number" 
                name="minPrice" 
                placeholder='Minimum Price' 
                min={0} 
                max={10000000}
                />
                <input 
                type="number" 
                name="maxPrice" 
                placeholder='Maximum Price'
                min={0}
                max={10000000}
                />
                <button>
                    <img src="/public/assets/images/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}
export default SearchBar