import styled from "styled-components";

export const Container = styled.div`
   background-color: #FFFFFF;
   box-shadow: 0 0 5px #CCCCCC;
   border-radius: 10px;
   padding: 20px;
   margin-top: 20px;
   color: #888888;
   display: flex;
   flex-direction: column;
   
   form{
      display: flex;
      justify-content: space-between;
   }

   select{
      width: 150px;
   }

`

export const Title = styled.div`
   margin-right: 3px;
`

export const InputTitle = styled.div`
   input{
      width: 350px;
   }
`
export const ButtonInput = styled.div`
   button{
      margin-top: 15px;
      width: 100px;
      padding: 5px;
      cursor: pointer;
      float: right;
      color: #666666;

      &:hover{
         background-color: #666666;
         color: white;
      }
   }
`