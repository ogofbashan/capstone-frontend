import React from 'react';
import './index.css';
import DropDownItem from '../drop_down_item';

//This component generates the drop down button, passing down the props to the DropDownItem component.

function DropDown(props){
  return(
    <div className="dropdown">
      <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Pick a Team
      </button>
      <div className="dropdown-menu columns" aria-labelledby="dropdownMenuButton">
        {
          props.output && props.output.map( team =>
          <DropDownItem
            team_name={team.team_name}
            color_1={team.color_1}
            color_2={team.color_2}
            text_color={team.text_color}
            team_id={team.team_id}
            createCard={props.createCard}
          />)
        }
      </div>
    </div>

)}

export default DropDown
