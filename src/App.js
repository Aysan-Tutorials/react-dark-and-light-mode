import React, {useState} from 'react';
import {FaMoon, FaSun} from 'react-icons/fa';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
        <div className={darkMode ? "app-container dark-mode" : "app-container light-mode" }>
            <div className="theme-switch">
                {!darkMode
                ?
                <span onClick={()=>setDarkMode(!darkMode)}>
                    <FaMoon className="fa-icon"/>&nbsp; Dark Mode
                </span>
                :
                <span onClick={()=>setDarkMode(!darkMode)}>
                    <FaSun className="fa-icon"/>&nbsp; Light Mode
                </span>
                }
                
                
            </div>
            <div className="form-container">
                <div className="form-caption">Login</div>
                <form>
                    <div className="form-input">
                        <input type="text" required autocomplete="off"/>
                        <label>Username</label>
                    </div>
                    <div className="form-input">
                        <input type="password" required autocomplete="off"/>
                        <label>Password</label>
                    </div>
                    <div className="checkbox">
                        <div>
                            <input type="checkbox" id="chk"/>
                            <label for="chk">Remember me</label>
                            <span className="checkmarker"></span>
                        </div>
                        <div>
                            <a>Forgot password?</a>
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit">Sign In</button>
                    </div>
                </form>
                <hr className="hr" />
                <div className="signup-container">
                    <label>don't have account yet?</label>
                    <a>Sign up</a>
                </div>
            </div>
        </div>
  );
}

export default App;
