
import React, { Component } from 'react';
import { TextField, Button, Typography } from '@mui/material';

type FormData = {
  username: string;
  email: string;
  password: string;
};

type State = {
  formData: FormData;
  submittedData: FormData[];
  submitted: boolean;
};

class Login extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formData: { username: '', email: '', password: '' },
      submittedData: [],
      submitted: false,
    };
  }

  componentDidMount() {
    const submittedData = localStorage.getItem('submittedData');
    if (submittedData) {
      this.setState({
        submittedData: JSON.parse(submittedData),
        submitted: true,
      });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState(
      (prevState) => ({
        submittedData: [...prevState.submittedData, prevState.formData],
        submitted: true,
        formData: { username: '', email: '', password: '' },
      }),
      () => {
        localStorage.setItem('submittedData', JSON.stringify(this.state.submittedData));
      }
    );
  };

  render() {
    const { formData, submittedData, submitted } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={this.handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={this.handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={this.handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
        {submitted && (
          <div>
            <Typography variant="h6" component="h2" gutterBottom>
              Submitted Data
            </Typography>
            {submittedData.map((data, index) => (
              <div key={index}>
                <Typography>Username: {data.username}</Typography>
                <Typography>Email: {data.email}</Typography>
                <Typography>Password: {data.password}</Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    );

    
  }
}

export default Login;
