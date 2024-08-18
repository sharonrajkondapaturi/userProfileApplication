import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {ThreeDots} from 'react-loader-spinner'
import { FaUser } from "react-icons/fa";
import UserList from '../UserList'
import { MainContainer, OptionLocation, SelectLocation, UserUnlist,Button,Rows,Loading,Failure,FailureImage} from './styledComponents'

//{below location container contains the location items}
// eslint-disable-next-line
const locations = [
{
    location_id:"",
    displayText:"ALL"
},
{
    location_id:"Ahmedabad",
    displayText:"AHMEDABAD"
},
{
    location_id:"Lucknow",
    displayText:"LUCKNOW"
},
,
{
    location_id:"Pune",
    displayText:"PUNE"
},
{
    location_id:"Jaipur",
    displayText:"JAIPUR"
},
{
    location_id:"Delhi",
    displayText:"DELHI"
},
{
    location_id:"Mumbai",
    displayText:"MUMBAI"
},
{
    location_id:"Hyderabad",
    displayText:"HYDERABAD"
},
{
    location_id:"Chennai",
    displayText:"CHENNAI"
},
{
    location_id:"Bangalore",
    displayText:"BANGALORE"
},
{
    location_id:"Kolkata",
    displayText:"KOLKATA"
},
{
    location_id:"Mangalore",
    displayText:"MANGALORE"
},
{
    location_id:"Noida",
    displayText:"NOIDA"
},
{
    location_id:"Coimbatore",
    displayText:"COIMBATORE"
},
{
    location:"Bhopal",
    displayText:"BHOPAL"
},
{
    location:"Ludhiana",
    displayText:"LUDHIANA"
},
{
    location:"Haryana",
    displayText:"HARYANA"
},
{
    location:"Kochin",
    displayText:"KOCHIN"
},
{
    location:"Vizag",
    displayText:"VIZAG"
}
]

//apistatus is used to generate the present apiStatus 
const apiStatus = {
    initial:"INITIAL",
    in_progress:"INPROGRESS",
    success:"SUCCESS",
    failure:"FAILURE"
}

//Home is a functional component
const Home = ()=>{
    const [currentApiStatus,setApiStatus] = useState(apiStatus.initial)
    const [location,setLocation] = useState(locations[0].location_id)
    const [userDetails, setUserDetails] = useState([])
    const navigate = useNavigate()
   
    //fetch the api with the help of axios
    const onRender = async()=>{
        setApiStatus(apiStatus.in_progress)
        const usersApiUrl =  `https://usersbackend-op6a.onrender.com/?location=${location}`
        try{
            const response = await axios.get(usersApiUrl)
            console.log(response)
            const userData = response.data.map(eachUser=>({
                id:eachUser.id,
                name:eachUser.name,
                age:eachUser.age,
                location:eachUser.location,
                profession:eachUser.profession
            }))
            setApiStatus(apiStatus.success)
            setUserDetails(userData)
        }
        catch{
            setApiStatus(apiStatus.failure)
        }
    }

    //progress function
    const onProgress = () => (
        <Loading>
            <ThreeDots/>
        </Loading>
    )

    //fetching is successfull the list of items will be displayed
    const onSuccess = () => (
        <UserUnlist>
            {userDetails.map(eachUser=>
                <UserList key={eachUser.id} users={eachUser}/>
            )}
        </UserUnlist>
    )
    
    //if the api fetche's to fail the failure image and text would be displayed
    const onFailure = () => (
        <Failure>
            <FailureImage src="https://static.vecteezy.com/system/resources/previews/009/007/136/original/failed-to-load-error-page-404-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            alt="failure view"/>
            <h1 style={{textAlign:"center"}}>Oops Serever not responding</h1>
            <p style={{color:"#121010",fontWeight:"bold",fontSize:24}}>The page you request has server issues try to reload by clicking Retry button</p>
            <Button type="button" onClick={onRender}>Retry</Button>
        </Failure>
    )
    
    //set the location
    const onLocation = event => {
        setLocation(event.target.value)
    }
    
    //when the button is triggered the newUser page will be Redirect
    const onNewUser = () => {
        navigate("/newUser")
    }
    
    //change the function according to the apiStatus
    const renderStatus = ()=>{
        switch (currentApiStatus){
            case apiStatus.in_progress:
                return onProgress()
            case apiStatus.success:
                return onSuccess()
            default:
                return onFailure()
        }
    }

    //generate's before the render
    useEffect(()=>{
        onRender()
        // eslint-disable-next-line
    },[location])

    return(
        <MainContainer>
        <Rows>
        <SelectLocation value={location} onChange={onLocation}>
        {
            locations.map(eachLocation=>
            <OptionLocation value={eachLocation.location_id}>{eachLocation.displayText}</OptionLocation>
        )
        }
        </SelectLocation>
        <Button type="button" onClick={onNewUser}>
            <FaUser style={{paddingRight:5,color:"#fff"}}/>
            New Profile
        </Button>
        </Rows>
            {renderStatus()}
        </MainContainer>
    )
}

export default Home