
import './App.css';
import { fetchCustomers } from './asyncAction/customers';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  
  return (
    <div>
      {
        console.log(fetchCustomers())
      }
    </div>
  )
 
}

export default App;
