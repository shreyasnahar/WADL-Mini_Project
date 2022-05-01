import './App.css'
import {useParams} from 'react-router-dom'
import Friends from './Friends';
import Account from './Account';
const Pay = (props) => {
    
    return ( 
        <div className="pay">
            <div className="friends">
                <h3>Friends</h3>
                <Friends addr={props.addr} />
            </div>
            <div className="pay-console">
                <h3>Pay Here</h3>
                <form action="">
                    <label htmlFor="amount">
                        Amount(in ETH):-  
                        <br />
                        <input type="text" />
                    </label>
                    <br />
                    <button>Send</button>
                </form>
            </div>
             
        </div>
     );
}
 
export default Pay;