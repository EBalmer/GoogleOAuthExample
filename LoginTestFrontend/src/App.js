import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function App() {

  const validate = (response) => {
    const token = response.tokenId
    console.log("posting")
    axios.post("http://localhost:8080/login", {
      token
    })
  }

  const loginFailed = () => {
    console.log("NOPE")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleLogin
          //Make sure to include your client ID below
            clientId="YOUR_CLIENT_ID_GOES_HERE!!!"
            buttonText="Login"
            onSuccess={validate}
            onFailure={loginFailed}
            cookiePolicy={'single_host_origin'}
          />,
        </a>
      </header>
    </div>
  );
}

export default App;
