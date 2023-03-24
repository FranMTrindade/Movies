import styled from 'styled-components';

export const Container = styled.div`
    
    width: 700px;
    margin-left: 30%;
    margin-top: 5%;

    @media (max-width: 550px){
            margin-left: 20%;
        }

    
    div{
        
        width: 700px;
        margin-bottom: 50px;

        @media (max-width: 550px){
            width: 300px;
        }
       
        
    }

    h1{
        color: #db0000;
    }

    p{
        color: #FFF;
        text-align: justify;
    }

    img{

        width: 700px;

        @media (max-width: 550px){
            width: 300px;
        }

       
    }

    
`;

