import React,{useState} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {
    const[input,setInput]=useState("");
   const  navigate=useNavigate();

    const SubmitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    };

  return (
    <FormStyle onSubmit={ SubmitHandler}>
        <div>
            <FaSearch></FaSearch>
        <input onChange={(e)=>{
           setInput( e.target.value);
;        }} 
        type="text"
         value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle=styled.form`
   margin:0rem 9rem;

   div{
    position:relative;
    width:100%;
   }

   input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
    width:100%;
    font-size:1.5rem;
    border:none;
    border-radius:1rem;
    outline:1rem;
    padding:1rem 3rem;
   }

   svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);
    color:white;
   }
`;

export default Search
