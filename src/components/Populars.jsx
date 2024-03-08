import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Populars = () => {

  const[populars,setPopulars]=useState([]);

  useEffect(()=>{
    getPopular();
  },[])


  const getPopular= async()=>{
    const check=localStorage.getItem("populars");
    if(check){
      setPopulars(JSON.parse(check))
    }
    else{
      const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
  const data=await api.json()
  localStorage.setItem("populars",JSON.stringify(data.recipes))
  setPopulars(data.recipes);
    }
  }


  return (
    <div>
     
       <Wrapper>
        <h3>Popular pics</h3>
        <Splide options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:"free",
          gap:"5rem",

        }}>
        { populars.map((recipe)=>{
          return(
            <SplideSlide key={recipe.id}>
            <Card>
              <Link to={"/recipe/"+recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.name} />
              <Gradient />
              </Link>
            </Card>
            </SplideSlide>
          );
          })}
          </Splide>
       </Wrapper>
      
      </div>
  )}
            
const Wrapper=styled.div`
margin : 4rem 0rem;
`
const Card= styled.div`
min-height:15rem;
border-radius:2rem;
overflow:hidden;
position:relative;
img{
  border-radius:2rem;
  position:absolute;
  height:100%;
  width:100%;
  left:0;
  object-fit:cover;
}
p{
  position:absolute;
  z-index:10;
  left:50%;
  bottom:0%;
  transform:translate(-50%,0%);
  color:white;
  text-align:center;
  font-weight:600;
  font-size:1rem;
  height:40%;
  width:100%;
  display:flex;
  justify-content:center;
  align-item:center;
}
`

const Gradient=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;


export default Populars;