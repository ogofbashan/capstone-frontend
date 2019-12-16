import React from 'react';
import './index.css';
import setTheme from '../../components/color_changer';
import DropDown from '../../components/drop_down';
import Test from '../../components/Test';





class Baller extends React.Component {
  constructor() {
    super();

    this.state = {
      output : [],
      info: { "game": {
        "date": '',
        "game_id": '',
        "home_team": '',
        "opp_team": '',
        "opp_team_id": '',
        "opp_team_score": '',
        "result": '',
        "team_score": ''
      },
      "mvp": {
        "player_id": '',
        "player_name": '',
        "pts": ''
      },
      "next_game": {
        "home_team": '',
        "next_game_date": '',
        "next_opp_team": '',
        "next_opp_team_id": ''
      },
      "team": {
        "team_abb": '',
        "team_id": '',
        "team_name": ''
      }
    },

  }
}

  createDropDown = async() => {

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

  getTodaysResults = async(id) => {

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
    this.setState({ info })}
  })

    .catch(err => alert(err));
  };



  componentDidMount(){
    this.createDropDown()
  }

  render() {
    return (
      <div>
        <Test
          info={this.state.info}/>
        <div className='drop_down'>
          <DropDown
          output={this.state.output} getTodaysResults={this.getTodaysResults} />
        </div>
      </div>

    );
  }
}
export default Baller;
