import React from "react";
import {useState, useEffect} from "react";
import Cards from "./components/Card";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import {apiUrl,filterData} from "./data";
import {toast} from "react-toastify";
import Spinner  from "./components/Spinner";
const App = () => {
  // const [data,setData]=useState(filterData);
  const [courses,setCourse]=useState(null);
  const [loading,setLoading]=useState(true);
  // function call to the api
  async function getCourses(){
    setLoading(true);
    try{
    let data=await fetch(apiUrl);
    let response=await data.json();
    setCourse(response.data);
      // console.log(response.data);
    }
    catch{
     toast.error("API respond nhi krri bhai");
    }
    // console.log(courses);
    setLoading(false);
  }
 
  // running the api call after first render 
  useEffect(()=>{
    getCourses();
    console.log(courses);
  },[]);


  return (
  <div>
     <div>
        <Navbar/>
      </div>
     <div>
       <div>
         <Filter data={filterData}></Filter>
        </div>
       <div>
        {
         loading && !courses?<Spinner></Spinner>:<Cards courses={courses}></Cards>
        }
       </div>
     </div>
  </div>
  );
};

export default App;
