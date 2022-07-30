import {useSelector,useDispatch} from 'react-redux';
import { buyIceCream} from '../Redux';
import { useState } from 'react';
export function IceCreamContainer(){
    const numOfIceCreams = useSelector(state=>state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    const [icecream,setIceCreams] = useState(1)
    return(
     <div>
        <h2>Number of iceCreams - {numOfIceCreams}</h2>
        <input type='text' value={icecream} onChange={(e)=>setIceCreams(e.target.value)}></input>
        <button onClick={()=>dispatch(buyIceCream(icecream))}>Buy {icecream} IceCreams</button>
     </div>
    )
}