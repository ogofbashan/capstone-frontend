import React from 'react';
import './index.css';


class Test extends React.Component {
render() {
  return (
  <div id="Result_Card" className='row'>
  <div className= "col-md-6 offset-3">
      <h1 id="current_week">{this.props.info.team.team_name}</h1>
    <div className="card border-dark mb-3">
    <div class="card-header" id="Team_Name_Header">Last Game: {this.props.info.game.date.slice(0,12)}</div>
      <div className="card-body">
        <h6 className="card-subtitle">{this.props.info.game.result} {this.props.info.game.team_score}-{this.props.info.game.opp_team_score} against the {this.props.info.game.opp_team}</h6>
        <p className="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>

            <li class="list-group-item">{this.props.info.mvp.player_name}  {this.props.info.mvp.performance}</li>
            <li class="list-group-item"></li>

          </ul>
        </p>

        <h6 className="card-subtitle">Next Game: {this.props.info.next_game.next_opp_team} on {this.props.info.next_game.next_game_date.slice(0,12)}</h6>

      </div>
    </div>


  </div>

  </div>
  );
}
}
export default Test;

// <div className= "col-md-3">
//   <button type="button" className="direction-btn btn btn btn-default">&laquo;</button>
// </div>

// <div className= "col-md-3">
//   <button type="button" className="direction-btn btn btn btn-default">&raquo;</button>
// </div>
