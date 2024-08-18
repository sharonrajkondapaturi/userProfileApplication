import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Container,NewForm,Label,SelectLocation,OptionLocation,Input,Submit,Heading} from './styledComponents'

// eslint-disable-next-line
const locations = [
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

//newUser Function Component
const NewUser = ()=>{
const [name,setName] = useState('')
const [age,setAge] = useState('')
const [location,setLocation] = useState('')
const [profession,setProfession] = useState('')
const navigate = useNavigate()

//used to post the userDetails with the help of axios
const onRender = async(event)=>{
    event.preventDefault()
    const userDetails = {
        name,
        age,
        location,
        profession
    }
    const usersApiUrl =  "https://usersbackend-op6a.onrender.com/newUser"
    await axios.post(usersApiUrl,userDetails)
    navigate('/')

}

//below 4 functions were user credential's
const onLocation = event => {
    setLocation(event.target.value)
}

const onName = event => {
    setName(event.target.value)
}
const onAge = event => {
    setAge(event.target.value)
}
const onProfession = event => {
    setProfession(event.target.value)
}

return(
    <Container>
        <NewForm onSubmit={onRender}>
            <Heading>New User Details</Heading>
            <Label htmlFor='name'>Name</Label>
            <Input type="text" id="name" value={name} placeholder="Enter your name" onChange={onName}/>
            <Label htmlFor='age'>Age</Label>
            <Input type="number" id="age" value={age} placeholder="Enter your age" onChange={onAge}/>
            <Label htmlFor='location'>Location</Label>
            <SelectLocation id="location" value={location} onChange={onLocation}>
            {
            locations.map(eachLocation=>
            <OptionLocation value={eachLocation.location_id}>{eachLocation.displayText}</OptionLocation>
            )
            }
            </SelectLocation>
            <Label htmlFor='profession'>Profession</Label>
            <Input type="text" id="profession" value={profession} placeholder='Enter your job location' onChange={onProfession}/>
            <center style={{marginTop:6,marginBottom:6}}>
            <Submit type="submit">
                Submit
            </Submit>
            </center>
        </NewForm>
    </Container>
)
}

export default NewUser