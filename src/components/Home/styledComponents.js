import style from 'styled-components'

export const MainContainer = style.div`
display:flex;
flex-direction:column;
min-height:100vh;
background-image:url("https://static.vecteezy.com/system/resources/previews/027/822/542/large_2x/empty-room-interior-background-wall-free-photo.jpg");
background-size:cover;
background-repeat:"no-repeat";
padding:20px 20px 20px 20px;
`
export const Rows = style.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const UserUnlist = style.ul`
@media screen and (min-width:992px){
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:wrap;
}
@media screen and (max-width:991px){
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:wrap;
    padding:0px;
}
`
export const Loading = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
`
export const Failure = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
color:#fff;
margin-top:20px;

`
export const FailureImage = style.img`
width:300px;
height:250px;
`

export const SelectLocation = style.select`
@media screen and (min-width:1024px){
    width:200px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    transition:1s;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        width:220px;
    }
}
@media screen and (max-width:1023px){
    width:180px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    transition:1s;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        width:220px;
    }
}
@media screen and (max-width:991px){
    width:160px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    transition:1s;
    cursor:pointer;
    border-radius:10px;
    &:hover{
        width:180px;
    }
}
@media screen and (max-width:375px){
    width:140px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    transition:1s;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        width:160px;
    }
}
`
export const OptionLocation = style.option`
font-size:16px;
`
export const Button = style.button`
width:120px;
border:none;
padding:8px;
background-color:#4287f5;
border-radius:10px;
color:#fff;
font-family:Roboto;
transition:1s;
cursor:pointer;
font-weight:bold;
&:hover{
    width:140px;
    background-color:#f542cb;
}
`