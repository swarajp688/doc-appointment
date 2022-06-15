import styled from 'styled-components';

const DocFormWrapper = styled.div`
height:100vh ;
width:100% ;
display:flex ;
justify-content:center ;
align-items:center ;
padding:50px 0px ;
.contianer{

    border:2px solid #8EDCE5 ;
    height:90% ;
    width:80% ;
    padding:0px 50px 50px 50px;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    .form{
        width:50% ;
        height:100% ;
    }
    .form-group{
        width:100% ;
        display:flex ;
        margin:10px ;
        margin-bottom:30px ;
        flex-direction:column ;
        label{
            margin-bottom:10px ;
        }

    }
    .form-input{
        width:100% ;
        border:none ;
        border-bottom:2px solid #8EDCE5 ;
        outline:none ;
        -webkit-appearance:none;
        appearance: none;
        height:20px ;
        padding:5px ;
    }
    .list{
        width:103% ;
        border:1px solid #8EDCE5 ;
        outline:none ;
        height:20px ;
    }
    .form-btn{
        width:100%;
        text-align:center ;
        margin-bottom:50px ;
        button{
            width:150px;
            height:40px ;
            border:none ;
            border-radius:5px ;
            background-color: #8EDCE5;
            color:grey;
            font-weight:500 ;
            font-size:1.1rem ;
            cursor: pointer;
        }
        
    }
}
`;

export default DocFormWrapper;