import React from 'react';
import './index.css';
import setTheme from '../../components/color_changer'
import DropDown from '../../components/drop_down'





class Baller extends React.Component {
  constructor() {
    super();

    this.state = {
      output : [],
      info: { "game": {
      "date": '',
      "game_id": null,
      "home_team": null,
      "opp_team": null,
      "opp_team_id": null,
      "opp_team_score": null,
      "result": null,
      "team_score": null
    },
    "mvp": {
      "player_id": null,
      "player_name": null,
      "pts": null
    },
    "next_game": {
      "home_team": null,
      "next_game_date": null,
      "next_opp_team": null,
      "next_opp_team_id": null
    },
    "team": {
      "team_abb": null,
      "team_id": null,
      "team_name": null
    }
  },
    meh: true
  };
  this.changeBlah = this.changeBlah.bind(this);

  }


  changeBlah(){
    this.setState({meh: false});
    console.log(this.state.blah);
  }

  getTeamInfo = async() => {

    const URL = `http://localhost:5000/api/dropdown`;

    fetch(URL, {
     'method': 'GET',
     'headers': {
       'Content-Type': 'application/json',
     }
   })

    .then(res => res.json())
    .then(data => {if (data.output) {
    let output = data.output;
    this.setState({ output });} else {alert(`${data.code}`);}
  })

    .catch(err => alert(err));
  };

  getTodaysResults = async() => {

    const URL = `http://localhost:5000/api/test`;

    fetch(URL, {
     'method': 'GET',
     'headers': {
       'Content-Type': 'application/json',
       'team_id' : 11,
     }
   })

    .then(res => res.json())
    .then(data => {if (data.output) {
    let info = data.output;
    this.setState({ info }); console.log(this.state.info);}
  })

    .catch(err => alert(err));
  };



  componentDidMount(){
    this.getTeamInfo()
    this.getTodaysResults()
  }

  render() {
    return (
    <div className='row'>
    <div className= "col-md-3">
      <button type="button" className="direction-btn btn btn btn-default">&laquo;</button>
    </div>
    <div className= "col-md-6">
        <h1 id="current_week">{this.state.info.game.date}</h1>
      <div className="card border-dark mb-3">
      <div class="card-header" id="Team_Name_Header">{this.state.info.team.team_name}</div>
        <div className="card-body">
          <h6 className="card-subtitle">{this.state.info.game.result} {this.state.info.game.team_score}-{this.state.info.game.opp_team_score} against the {this.state.info.game.opp_team}</h6>
          <p className="card-text">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>

              <li class="list-group-item">{this.state.info.mvp.player_name} scored {this.state.info.mvp.pts} points</li>
              <li class="list-group-item"></li>

            </ul>
          </p>
          <h6 className="card-subtitle">Next Game: {this.state.info.next_game.next_opp_team}</h6>

        </div>
        <div>
          <DropDown
          output={this.state.output} />
        </div>

      </div>


    </div>
    <div className= "col-md-3">
      <button type="button" className="direction-btn btn btn btn-default" onClick={this.changeBlah}>&raquo;</button>
    </div>
    </div>
    );
  }
}
export default Baller;
