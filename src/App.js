import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let mainDate = this.state.startDate;
    const dateObj = {
      sDate: mainDate.format('L')
    }
    axios.post('http://localhost:4000/dates/add', dateObj)
        .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className = "container">
        <h3>React Datepicker Example</h3>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Select Date: </label>
            <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="MM/DD/YYYY"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Add Date</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
