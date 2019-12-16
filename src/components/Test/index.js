import React from 'react';
import './index.css';



class Test extends React.Component {
render() {
  return (
  <div id="result-card" className='row'>
    <div className= "col-md-6 offset-3">
      <h1 id="team-name-header">{this.props.info.team.team_name}</h1>
      <div className="card border-dark mb-3">
        <div className="card-header" id="last-game">Last Game: {this.props.info.game.date.slice(0,12)}</div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h6 className="card-subtitle">{this.props.info.game.result} {this.props.info.game.team_score}-{this.props.info.game.opp_team_score} against the {this.props.info.game.opp_team}</h6>
            </li>
            <li className="list-group-item">
              {this.props.info.mvp.player_name}  {this.props.info.mvp.performance}
            </li>
            <li className="list-group-item">
              {this.props.info.best_performance.player_name}  {this.props.info.best_performance.performance}
            </li>
            <li className="list-group-item">
              <h6 className="card-subtitle">Next Game: {this.props.info.next_game.next_opp_team} on {this.props.info.next_game.next_game_date.slice(0,12)}</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Test;
