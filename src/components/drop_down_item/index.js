import React from 'react';
import './index.css';
import setTheme from '../color_changer';


function DropDownItem(props) {
  return (
    <div>
    <a class="dropdown-item" onClick={() => {
      setTheme(props.color_1, props.color_2, props.textcolor);
      props.getTodaysResults(props.team_id);
    }}>
    {props.team_name}
    </a>
    </div>
  )
}

export default DropDownItem
