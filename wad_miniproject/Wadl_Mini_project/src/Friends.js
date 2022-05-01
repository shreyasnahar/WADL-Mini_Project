import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
const Friends = (props) => {
    const [friends, setFriends] = useState([]);
    const url = 'http://localhost:8000/users?addr=0x0980bc9d5bCa1Fca282dd2A91aF908fD3950B894';
    useEffect(
        ()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setFriends(data[0].friends));
            console.log(friends);
        }
    ,[])
        return(
           <div>
               {
                   friends.map(friend=>(
                       <div className='friend' >
                           <h4>{friend}</h4>
                           <button>Pay</button>
                       </div>
                   ))
               }
           </div>
        )
    
}
 
export default Friends;