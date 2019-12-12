import React from 'react';
import './index.css';
import setTheme from '../../components/color_changer'




class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      output : []
    }
  }

  getTeamInfo = async() => {

    const URL = `http://localhost:5000/api/test`;

    fetch(URL, {
     'method': 'GET',
     'headers': {
       'Content-Type': 'application/json',
     }
   })

    .then(res => res.json())
    .then(data => {if (data.output) {
    let output = data.output;
    this.setState({ output });
  alert(`${data.output}`)} else {alert(`${data.code}`);}
  })

    .catch(err => alert(err));
  };

  componentDidMount(){
    this.getTeamInfo()
  }

  render() {
    return (
    <div className='row'>
    <div className= "col-md-3">

    </div>
    <div className= "col-md-6">
        <h1 id="current_week">Colors</h1>
      <div className="card border-dark mb-3">
      <div class="card-header" id="Team_Name_Header">[Team Name]</div>
        <div className="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>
            </ul>
        </div>

        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pick a Team
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

            <a class="dropdown-item" onClick={() => setTheme('BOS')}>Boston Celtics</a>
            <a class="dropdown-item" onClick={() => setTheme('CHI')}>Chicago Bulls</a>
          </div>
        </div>


      </div>
    </div>

    </div>
    );
  }
}
export default Test;
