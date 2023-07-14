import { useEffect, useState } from "react"
import axios from 'axios';
import API from "./axios";
import "./App.css"

function App() {
  const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get("http://localhost:9000/api/product")
  //     .then(res => setData(res.data))

  // }, [])

  useEffect(()=>{
API.get(`/api/product`)
.then((res)=>setData(res.data))
.catch((error)=> console.log(error.message))
  },[])

  console.log(data);
  return (

    <div className="data">
      {data.map((p) => {
       const {title,category,price,brand,desc,quantity}= p
        return <div key={p._id} className="card">
          <p>Title : {title.toUpperCase()}</p>
          <p>Category : {category}</p>
          <p>Price :{price}</p>
          <p>Quantity :{quantity}</p>
          <p>Brand :{brand}</p>
          <p>Desciption :{desc}</p>
        </div>
      })}
    </div>
  );
}

export default App;
