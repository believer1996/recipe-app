import React from "react";
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}> Delicious</Logo>
      </Nav>
      <Search />
      <Categories />
     <Pages />
     </BrowserRouter>
    </div>
  );
}

const Logo=styled(Link)`
text-decoration-none;
font-size:1.5rem;
font-weight:400;
font-family:"Lobster Two",cursive;
`;

const Nav=styled.div`
padding:4rem 0rem;
align-items:center;
justify-content:flex-start;
display:flex;
svg{
  font-size:2rem;
}

`;
export default App;
