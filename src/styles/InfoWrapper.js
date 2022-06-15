import styled from "styled-components";
const InfoWrapper = styled.div`
    width:90% ;
    height:110% ;
    border:5px solid #8EDCE5 ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    justify-content:space-between ;
    padding:0px 20px;
    h1{
        font-size:4.5rem ;
        color:#8EDCE5 ;
        font-family:'Times New Roman', Times, serif ;
        font-weight:600 ;
    }
    h4{
        font-size:1.6rem ;
        color:grey ;
    }
    .heading{
        width:100% ;
        text-align:center ;
        border-bottom:2px solid #8EDCE5;
    }
    .info{
        width:100% ;
        display:flex ;
        flex-direction:row ;
        flex-wrap:wrap ;
        justify-content:stretch ;
        border-bottom:2px solid #8EDCE5 ;
    }
    .detail{
        width:50% ;
    }
    .right{
        width:100% ;
        position: relative;
        left:80% ;
    }
    .border{
            width:200px !important;
        }
    .mr{
 
        left:70% ;
    }
`;
export default InfoWrapper;