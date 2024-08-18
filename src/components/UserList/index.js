import axios from 'axios'
import { MdDelete } from "react-icons/md";
import {List,Detail,Delete} from './styledComponents'


//UserList Function 
const UserList = props =>{
    const {users} = props 
    const {id,name,age,location,profession} = users

    //use to delete the user detail
    const onDelete = async()=>{
        const usersApiUrl =  `https://usersbackend-op6a.onrender.com/deleteuser/${id}`
        await axios.delete(usersApiUrl)
        window.location.reload()
    }

    return(
        <List>
            <Detail>Name:{name}</Detail>
            <Detail>Age:{age}</Detail>
            <Detail>Location:{location}</Detail>
            <Detail>Profession:{profession}</Detail>
            <center>
            <Delete type="button" onClick={onDelete}>
                <MdDelete size={14} style={{paddingRight:5}}/>
                Delete
            </Delete>
            </center>
        </List>
    )
}

export default UserList