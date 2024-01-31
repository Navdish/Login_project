import './user.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

function User(props) {
    // const searchParams = new URLSearchParams(props.location.search);
    // console.log(searchParams.get());
    // console.log(props);
    
    const [userDetails, setUserDetails] = useState({});
    
    useEffect(()=>{
        async function UserFunc(){
            const response = await User_details();
            console.log(response.data.user_data);
            setUserDetails(response.data.user_data);
        }
        UserFunc();
    }, [])
    let {id} = useParams();
    console.log(id);

    const User_details = async() => axios.get('http://localhost:8080/user', {params : {
        id : id
    }})

    // function HandleEdit(e){
    //     return(
    //         <input type="text" value={userDetails.name} onChange={(e)=> {setUserDetails(...userDetails, userDetails.name : e.target.value)}} />
    //     )
    // }

    // function HandleDelete(e){

    // }
    //console.log(props.match.params);
    return(
        <div>
            <h1>User Details</h1>
            <ul>
                <li>Name = {userDetails.name}</li>
                <li>Email = {userDetails.email}</li>    
            </ul>
            {/* <button onClick={(e)=> HandleEdit(e)}>Edit</button>
            <button onClick={(e)=> HandleDelete(e)}>Delete</button> */}
        </div>
    )
}

export default User;