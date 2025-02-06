import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class ApplyForm extends Component {
  state = {
    name: '',
    email: '',
    phone:'',
    education:'',
    workhist:'',
    bio:'',
    applicationType:'',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, phone, education, workhist, bio, applicationType, password} = this.state;
      const formData = {name, email, phone, education, workhist, bio, applicationType, password};
      const user = await signUp(formData);
      this.props.setUser(user)
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Position Applying For</label>
            <select name="applicationType" value={this.state.applicationType} onChange={this.handleChange}>
                <option value="Junior Web Developer">Junior Web Developer</option>
                <option value="Web Dev Intern">Web Dev Intern</option>
                <option value="Journalism Intern">Journalism/Writing Intern</option>
            </select>

            <label>Full Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />





            <label>Phone Number</label>
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} required />

            <label>Brief education history </label>
            <textarea name="education" value={this.state.education} rows="4" cols="50" onChange={this.handleChange}></textarea>

            <label>Brief work history </label>
            <textarea name="workhist" value={this.state.workhist} rows="4" cols="50" onChange={this.handleChange}></textarea>

            <label>Brief self description (Achievements, hobbies, interests, etc.)</label>
            <textarea name="bio" value={this.state.bio} rows="4" cols="50" onChange={this.handleChange}></textarea>

            <div> </div>

            <h5>An account will be created with the information provided above. Please enter a password.</h5>



            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

            <label>Confirm Password</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />

            <button type="submit" disabled={disable}>APPLY</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}