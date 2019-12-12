import React from 'react';
import './index.css';
import setTheme from '../../components/color_changer'
import DropDown from '../../components/drop_down'





class Baller extends React.Component {
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
    this.setState({ output })} else {alert(`${data.code}`);}
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
      <button type="button" className="direction-btn btn btn btn-default">&laquo;</button>
    </div>
    <div className= "col-md-6">
        <h1 id="current_week">Current Week</h1>
      <div className="card border-dark mb-3">
      <div class="card-header" id="Team_Name_Header">[Team Name]</div>
        <div className="card-body">
          <h6 className="card-subtitle">[Likelihood]: [W/L/T] [Score] Against [OPP]</h6>
          <p className="card-text">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>

              <li class="list-group-item">[Most Important Player Player Name]  [Bad/Good]</li>
              <li class="list-group-item">[Most Impactful Player Player Name][Bad/Good]</li>
              <li class="list-group-item"></li>

            </ul>
          </p>
          <h6 className="card-subtitle">Next Week: [OPP] : [Likelihood]</h6>

        </div>
        <div>
          <DropDown
          output={this.state.output} />
        </div>

      </div>


    </div>
    <div className= "col-md-3">
      <button type="button" className="direction-btn btn btn btn-default">&raquo;</button>
    </div>
    </div>
    );
  }
}
export default Baller;
