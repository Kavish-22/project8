//1. Import area 
import { useState } from 'react'
import './App.css'


//2 Function defination area 

function App() {

  //2.1 Hooks area 

  const [city, setCity] = useState('');
  const [business, setBusiness] = useState('');

  let handleChange = (e) => {
    //console.log(e?.target?.name);
    const { name, value } = e.target;
    if (name === "city") {
      setCity(value);
    }
    if (name === "business") {
      setBusiness(value);
    }
  }

  let getBusiness = () => {
    console.log(city);
    console.log(business);
    window.location.href = `/${city}/search?q=${business}`
  }


  return (
    <>
      <h1>JustDial</h1>
      <br />
      <hr />
      <div className="row ">
        <div className="col-3">
          <div className="input-group">
            <input name='city' onChange={handleChange} type="text" className="form-control" placeholder="Search City.." />
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Neemuch</a></li>
              <li><a className="dropdown-item" href="#">Ujjain</a></li>
              <li><a className="dropdown-item" href="#">Indore</a></li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <input name='business' onChange={handleChange} className="form-control" type="text" placeholder="Search Business.." />
        </div>
      </div>
      <div className="d-flex justify-content-start mt-4">
        <input onClick={getBusiness} className="btn btn-outline-success" type="submit" value="Submit" style={{ width: "250px" }} />
      </div>
    </>
  )
}

export default App
