import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from "axios";


function App() {

  
  const[search,setSearch]=useState("");
  const[recipes,setRecipes]=useState([]);

  const APP_ID="1a8d263e";
  const APP_KEY="81fe7b02ba634b528e071782fe634e79";

  useEffect(()=>{
     getRecipes();
  },[]);

  const getRecipes=async()=>{

    const res=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(res);
    setRecipes(res.data.hits);
  };

  const onInputChange=(e)=>{
    setSearch(e.target.value);
  }

  const onSearchClick=()=>{
     getRecipes();
  }

  return (
    <div className="App">
    <Header
     search={search} 
     onInputChange={onInputChange}
     onSearchClick={onSearchClick}  
     />
      <div className="container">
         <Recipes recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
