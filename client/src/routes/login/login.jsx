import { useContext, useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import apiReq from '../../lib/apiReq';
import { AuthContext } from '../../context/AuthContext';

function Login() {
  const [error, setError] = useState('');
  const [button, setButton] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButton(true);
    setError('');
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const res = await apiReq.post('/auth/login', {
        username,
        password,
      });
      updateUser(res.data);
      navigate('/');
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setButton(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required type="text" placeholder="Username" />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <button disabled={button}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
