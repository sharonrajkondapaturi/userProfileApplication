import style,{keyframes} from 'styled-components'

const borderSlide = keyframes`
0%{
    border-top:5px solid #ed09d3;
}
25%{
    border-left:5px solid #f51d11;
}
50%{
    border-bottom:5px solid #f2760a;
}
75%{
    border-right:5px solid #f7e80a;
}
100%{
    border:5px solid #6260f0;
}
`
const shineAndSlide = keyframes`
from{
    width:0%;
}
`
export const List = style.li`
@media screen and (min-width:1024px){
    list-style:none;
    background-image:url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4Njc1MzQwLWltYWdlLWt3dnhocW43LmpwZw.jpg');
    background-size:cover;
    width:380px;
    height:260px;
    border-radius:10px;
    margin-right:8px;
    border:5px solid #000;
    margin-bottom:15px;
    animation:${borderSlide} 1s infinite;
    padding:20px;
    cursor:pointer;
    transition:1s;
    font-size:20px;
    &:hover{
        transform:translateY(10px);
        background-image:url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI5OTgwLXdpa2ltZWRpYS1pbWFnZS1qb2I1OTguanBn.jpg');
        color:#f5f2f3;
        font-size:24px;
    }
}
@media screen and (max-width:1023px){
        list-style:none;
        background-image:url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4Njc1MzQwLWltYWdlLWt3dnhocW43LmpwZw.jpg');
        background-size:cover;
        width:360px;
        height:260px;
        border-radius:10px;
        margin-right:10px;
        border:5px solid #000;
        margin-bottom:10px;
        animation:${borderSlide} 1s infinite;
        padding:20px;
        cursor:pointer;
        transition:1s;
        font-size:20px;
        &:hover{
            transform:translateY(10px);
            background-image:url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI5OTgwLXdpa2ltZWRpYS1pbWFnZS1qb2I1OTguanBn.jpg');
            color:#f5f2f3;
            font-size:22px;
        }
}
@media screen and (max-width:991px){
    list-style:none;
    background-image:url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4Njc1MzQwLWltYWdlLWt3dnhocW43LmpwZw.jpg');
    background-size:cover;
    width:300px;
    height:250px;
    border-radius:10px;
    margin-right:10px;
    border:5px solid #000;
    margin-bottom:10px;
    animation:${borderSlide} 1s infinite;
    padding:20px;
    cursor:pointer;
    transition:1s;
    font-size:18px;
    &:hover{
        transform:translateY(10px);
        background-image:url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI5OTgwLXdpa2ltZWRpYS1pbWFnZS1qb2I1OTguanBn.jpg');
        color:#f5f2f3;
        font-size:22px;
    }
}
@media screen and (max-width:575px){
    list-style:none;
    background-image:url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4Njc1MzQwLWltYWdlLWt3dnhocW43LmpwZw.jpg');
    background-size:cover;
    width:300px;
    height:210px;
    border-radius:10px;
    margin-right:10px;
    border:5px solid #000;
    margin-bottom:10px;
    animation:${borderSlide} 3s infinite;
    padding:10px;
    cursor:pointer;
    transition:1s;
    font-size:15px;
    &:hover{
        transform:translateY(10px);
        background-image:url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI5OTgwLXdpa2ltZWRpYS1pbWFnZS1qb2I1OTguanBn.jpg');
        color:#f5f2f3;
        font-size:18px;
    }
}
@media screen and (max-width:375px){
    list-style:none;
    background-image:url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4Njc1MzQwLWltYWdlLWt3dnhocW43LmpwZw.jpg');
    background-size:cover;
    width:280px;
    height:180px;
    border-radius:10px;
    margin-right:10px;
    border:5px solid #000;
    margin-bottom:10px;
    animation:${borderSlide} 1s infinite;
    padding:10px;
    cursor:pointer;
    transition:1s;
    font-size:13px;
    &:hover{
        transform:translateY(10px);
        background-image:url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI5OTgwLXdpa2ltZWRpYS1pbWFnZS1qb2I1OTguanBn.jpg');
        color:#f5f2f3;
        font-size:16px;
    }
}
@media screen and (max-width:320px){
    list-style:none;
    background-image:url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4Njc1MzQwLWltYWdlLWt3dnhocW43LmpwZw.jpg');
    background-size:cover;
    width:250px;
    height:170px;
    border-radius:10px;
    margin-right:10px;
    border:5px solid #000;
    margin-bottom:10px;
    animation:${borderSlide} 1s infinite;
    padding:10px;
    cursor:pointer;
    transition:1s;
    font-size:12px;
    &:hover{
        transform:translateY(10px);
        background-image:url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI5OTgwLXdpa2ltZWRpYS1pbWFnZS1qb2I1OTguanBn.jpg');
        color:#f5f2f3;
        font-size:15px;
    }
}
`

export const Detail = style.p`
@media screen and (min-width:1024px){
    display:inline-block;
width:100%;
font-family:Roboto;
animation:${shineAndSlide} 3s;
line-height:10px;
font-weight:bold;
transition:1s;
&:hover{
    transform:translateX(50px);
    color:#e4f03c;
    font-weight:bolder;
}
}
@media screen and (max-width:1023px){
display:inline-block;
width:100%;
font-family:Roboto;
animation:${shineAndSlide} 3s;
line-height:10px;
font-weight:bold;
transition:1s;
&:hover{
    transform:translateX(50px);
    color:#e4f03c;
    font-weight:bolder;
}
}
@media screen and (max-width:991px){
    display:inline-block;
    width:100%;
    font-family:Roboto;
    animation:${shineAndSlide} 3s;
    line-height:10px;
    font-weight:bold;
    transition:1s;
    &:hover{
        transform:translateX(50px);
        color:#e4f03c;
        font-weight:bolder;
    }
}
@media screen and (max-width:375px){
    display:inline-block;
    width:100%;
    font-family:Roboto;
    animation:${shineAndSlide} 3s;
    line-height:10px;
    margin:12px;
    font-weight:bold;
    transition:1s;
    &:hover{
        transform:translateX(50px);
        color:#e4f03c;
        font-weight:bolder;
    }
}
`
export const Delete = style.button`
width:90px;
border:none;
padding:5px;
background-color:#e67925;
border-radius:10px;
color:#fff;
font-family:Roboto;
transition:1s;
cursor:pointer;
font-weight:bold;
font-size:13px;
&:hover{
    width:120px;
    background-color:#e63825;
}
`