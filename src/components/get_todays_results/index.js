import React from 'react';
import './index.css';

function GetTodaysResults(id, update_state){

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
  let info = data.output; console.log(info);
  update_state(info);}
})

  .catch(err => alert(err));

};

export default GetTodaysResults
