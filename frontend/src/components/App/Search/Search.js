import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MainContent from '../MainContent/MainContent'



// import {Link} from 'react'
import './Search.css'
 

export default function Search({cities}) {


    const [cityName,setCityName]=useState([])
    const [roomNum,setRoomNum]=useState([])
    const [isButtonActive,setIsButtonActive]=useState(true)
    const numbers = [1,2,3,4,5,6,7,8,9,10]

    
    return (   
     
        <div className="container" id="search">
                <div className="banner">
                    <div className="banner-text">
                        <h1>Find student homes with bills included</h1>
                        <h5>A simple and faster way to search for student accommodation</h5>
                     
                    </div>
                    <div className="overlay"></div> 
                    <div className='form-container'>
                            <form className="form-search">
                                    <select  className="select-search" onChange={(e)=>setCityName(e.target.value)} required>
                                    <option>Search by city</option>
                                        {cities.map(city=>
                                            <option value={city.name}>{city.name}</option>
                                            )}
                                        
                                    </select>  
                                    <select className="select-search" onChange={(e)=>setRoomNum(e.target.value)}>
                                            <option value="">Any bedroom</option>
                                            {numbers.map(number=><option value={number}>{number}</option>)}
                                     </select>

                                     
                                    <Link to={`/cities/${cityName}/${roomNum}`} ><button  type="submit" className="btn-search">Find Homes</button></Link>  
                               
                            </form>    
                    </div> 
                </div> 
                <MainContent />
        </div> 
    )
}

