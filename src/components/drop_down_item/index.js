import React from 'react';
import setTheme from '../color_changer';

//This component creates the individual dropdown items and has two onClick functions that change the display and get the information for the card.

function DropDownItem(props) {
  return (
    <div id='test'>
    <a className="dropdown-item" onClick={() => {
      setTheme(props.color_1, props.color_2, props.text_color);
      props.createCard(props.team_id);
    }}>
    {props.team_name}
    </a>
    </div>
  )
}

export default DropDownItem
