import style,{keyframes} from 'styled-components'

const changeGradient = keyframes`
0%{
    background-image:linear-gradient(to left,#f043c7,#f5c4e9);
}
25%{
    background-image:linear-gradient(to left,#58db6b,#cfe3c5);
}
50%{
    background-image:linear-gradient(to left,#edeb5a,#d4d3a1);
}
75%{
    background-image:linear-gradient(to left,#f043c7,#f5c4e9);
}
100%{
    background-image:linear-gradient(to left,#e63225,#e68625);
}
`
export const Container = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:linear-gradient(to left,#f043c7,#f5c4e9);
animation:${changeGradient} 6s infinite;
min-height:100vh;
`
export const NewForm = style.form`
@media screen and (min-width:1024px){
    height:400px;
    width:600px;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    padding:20px;
    border-radius:10px;
}
@media screen and (max-width:1023px){
    height:400px;
    width:550px;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    padding:16px;
    border-radius:10px;
}
@media screen and (max-width:991px){
    height:400px;
    width:500px;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    padding:18px;
    border-radius:10px;
}
@media screen and (max-width:767px){
    height:400px;
    width:320px;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    padding:18px;
    border-radius:10px;
}
@media screen and (max-width:375px){
    height:400px;
    width:280px;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    padding:18px;
    border-radius:10px;
}

`
export const Heading = style.h1`
font-family:cursive;
text-align:center;
margin:15px;
`
export const Label = style.label`
font-family:Roboto;
font-size:16px;
margin-bottom:6px;
margin-top:6px;
font-weight:bold;

`
export const Input = style.input`
@media screen and (min-width:1024px){
    width:600px;
    padding:6px;
    border-radius:8px;
    border:1px solid;
    margin-top:6px;
    margin-bottom:6px;
}
@media screen and (max-width:1023px){
    width:550px;
    padding:6px;
    border-radius:7px;
    border:1px solid;
    margin-top:5px;
    margin-bottom:5px;
}
@media screen and (max-width:991px){
    width:500px;
    padding:5px;
    border-radius:6px;
    border:1px solid;
    margin-top:5px;
    margin-bottom:5px;
}
@media screen and (max-width:767px){
    width:320px;
    padding:5px;
    border-radius:6px;
    border:1px solid;
    margin-top:5px;
    margin-bottom:5px;
}
@media screen and (max-width:375px){
    width:280px;
    padding:5px;
    border-radius:6px;
    border:1px solid;
    margin-top:5px;
    margin-bottom:5px;
}
`
export const SelectLocation = style.select`
@media screen and (min-width:1024px){
    width:610px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    border-radius:8px;
    margin-top:6px;
    margin-bottom:6px;
}
@media screen and (max-width:1023px){
    width:560px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    border-radius:8px;
    margin-top:6px;
    margin-bottom:6px;
}
@media screen and (max-width:991px){
    width:510px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    border-radius:8px;
    margin-top:6px;
    margin-bottom:6px;
}
@media screen and (max-width:767px){
    width:330px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    border-radius:8px;
    margin-top:6px;
    margin-bottom:6px;
}
@media screen and (max-width:375px){
    width:290px;
    padding:5px;
    font-family:Roboto;
    font-size:16px;
    border-radius:8px;
    margin-top:6px;
    margin-bottom:6px;
}
`
export const OptionLocation = style.option`
font-size:16px;
`
export const Submit = style.button`
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
font-size:16px;
&:hover{
    width:140px;
    background-color:#f542cb;
}
`