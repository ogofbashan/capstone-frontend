import React from 'react';
import './index.css';
import setTheme from '../color_changer';
import GetTodaysResults from '../get_todays_results'

function blah(props){
  setTheme(props.color_1, props.color_2);
  GetTodaysResults(props.team_id, props.update_state);
}
function DropDownItem(props) {
  return (
    <div>
    <a class="dropdown-item" onClick={() => blah(props)}>
    {props.team_name}
    </a>
    </div>
  )
}

export default DropDownItem
