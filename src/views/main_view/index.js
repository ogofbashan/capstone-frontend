import React from 'react';
import DropDown from '../../components/drop_down';
import Card from '../../components/card';

// MainView first constructs a null state to allow the app to render
class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      output : [],
      info: { "best_performance": {
      "fantasy_avg": '',
      "fantasy_score": '',
      "performance": '',
      "player_id": '',
      "player_name": ''
    },
      "game": {
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
        "performance": ''
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

//This function generates the DropDownButton
  createDropDown = async() => {

    const URL = `https://capstone-backend-231.herokuapp.com/api/dropdown`;

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

//This function creates the Info Card
  createCard = async(id) => {

    const URL = `https://capstone-backend-231.herokuapp.com/api/getTodaysResults`;

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

//Once the component mounts, the view calls the createDropDown function.

  componentDidMount(){
    this.createDropDown()
  }

  render() {
    return (
      <div>
        <Card
          info={this.state.info}/>
        <div className='drop_down'>
          <DropDown
          output={this.state.output} createCard={this.createCard} />
        </div>
      </div>

    );
  }
}
export default MainView;
