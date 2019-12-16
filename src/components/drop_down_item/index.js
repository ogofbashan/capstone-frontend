import React from 'react';
import setTheme from '../color_changer';


function DropDownItem(props) {
  return (
    <div>
    <a className="dropdown-item" onClick={() => {
      setTheme(props.color_1, props.color_2, props.text_color);
      props.getTodaysResults(props.team_id);
    }}>
    {props.team_name}
    </a>
    </div>
  )
}

export default DropDownItem
