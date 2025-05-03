import "../App.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Friendzy</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Friendzy.
            </span>
        </div>
        <div className="loginRight">
            <div className="RegisterBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Log into Account</button>
            </div>
        </div>

      </div>
    </div>
  )
}
