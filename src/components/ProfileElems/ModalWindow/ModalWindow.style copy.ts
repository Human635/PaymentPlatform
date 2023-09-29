import styled from "styled-components";

export const ThemeAddCardModal = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

display: flex;
margin: 0 auto;
width: 48vw;
padding: 0;
position: relative
font-family: inter, sans-serif;
background-color: rgba(0,0,0,0.4);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    
    margin-top: 50px;
    margin-bottom: 80px;
  
    position: relative;
    width: 48vw;
    height: auto;
  
    border-radius: 16px;
    background-color: white;
    
    border: 2px solid #1B1B1B;
    box-sizing: border-box;
    box-shadow: 6px 6px 0px #1B1B1B;
    border-radius: 8px;

  
  .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  #exit {
    align-self: flex-end;
  }
  
  h1 {
    margin-left: 10px;
    font-size: 2rem;
    font-weight: 800;
  }
  
  label {
    font-weight: 600;
  }
  
  input {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10px;
    padding: 16px 24px;
    width: 90%;
    height: 15%;
    left: 1048px;
    top: 16px;
    background: #FFFFFF;
    border: 2px solid #1B1B1B;
    box-sizing: border-box;
    border-radius: 16px;
    transition: 0.2s;
  }
  
  textarea:focus, input:focus{
    outline: none;
    background: #F9E450;
    border: 3px solid #1B1B1B;
    border-radius: 16px;
  }
  
  .exp-cvc {
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  
  .expiration {
    font-size: 0.75rem;
    width: 50%;
    margin-right: 20px;
  }
  
  .security {
    font-size: 0.75rem;
    width: 50%;
    margin-left: 20px;
  }
  
  span {
    padding-left: 5px;
    cursor: pointer;
  }
  
  .btn {
    background-color: #F9E450;
    border: 2px solid #1B1B1B;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 16px 32px 16px 16px;
    text-align: center;
    font-weight: 800;
    margin-top: 20px;
    
    width: 141px;
    height: 56px;
    left: 16px;
    top: 88px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    cursor: pointer;
    transition: 0.16s ease-out;
  }
  
  .btn:hover {
    background: #FFBB38;
    border: 4px solid #1B1B1B;
    box-sizing: border-box;
    box-shadow: 0px 0px 0px 4px #C1BFFA;
    border-radius: 16px;
  }
  
  #exit {
    cursor: pointer;
  }
`;
