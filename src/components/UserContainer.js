import {fetchUsers} from "../Redux"
import { useEffect } from "react"
import { useSelector,useDispatch } from 'react-redux'
export function UserContainer(){
    const userData = useSelector(state=>state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(fetchUsers())
    },[])
    return(
        <div>
         {
            userData.loading ? <h2>Loading Data</h2> :
            userData.error ? <h2>{userData.error}</h2> :
            <div>
                <h2>User Data</h2>
                {
                    userData.users.map(user => <p key={user.id}>{user.name}</p>)
                }
            </div>
         }
        </div>
    )
}