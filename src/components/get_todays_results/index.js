import React from 'react';
import './index.css';
import Test from '../Test';

function GetTodaysResults(id){

  const URL = `http://localhost:5000/api/test`;

  fetch(URL, {
   'method': 'GET',
   'headers': {
     'Content-Type': 'application/json',
     'team_id' : id,
   }
 })

  .then(res => res.json())
  .then(data => {if (data.output) {
  let info = data.output; console.log(info);}
})

  .catch(err => alert(err));

};



export default GetTodaysResults
