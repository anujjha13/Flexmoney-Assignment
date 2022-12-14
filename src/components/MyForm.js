import React from 'react';


const today = new Date();

class MyForm extends React.Component {
  state = {
    name: '',
    age: '',
    date: today.toISOString().substring(0, 10),
  };

  handleClick = () => {
    window.location.href = 'https://rzp.io/l/UZs3tK67';
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    // submit the form
    event.preventDefault();
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label >
          Name:
          <input className='form-input'type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input className='form-input' type="number" min="18" max="65" name="age" value={this.state.age} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input className='form-input' type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
        Select a batch:
        <select className='form-input'>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
      </label>
        <br />
        <button className='pay-btn' onClick={this.handleClick}>Pay Your Membership</button>
        
      </form>
    );
  }
}
export default MyForm