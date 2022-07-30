import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../Redux';
import {useState} from 'react';
export function CakeContainer(){
    const numOfCakes = useSelector(state=>state.cake.numOfCakes);
    const dispatch = useDispatch();
    const [number,setNumber] = useState(1)
    return(
     <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cakes</button>
     </div>
    )
}