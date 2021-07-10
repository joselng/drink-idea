import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [email, password] = e.target;

    dispatch(signIn(email.value, password.value));
  };

  return (
    <div className="container" style={{ marginTop: 40 }}>
      <h2>Entrar</h2>
      <p>Informe suas credenciais para acessar</p>
      <form onSubmit={handleSubmit}>
        <div className="row col-lg-6 col-xs-12 col-sm-9">
          <label htmlFor="email" className="mb-3">
            Email
            <input id="email" required name="email" type="email" className="form-control mt-1" placeholder="Informe seu email" />
          </label>
          <label htmlFor="password" className="mb-3">
            Senha
            <input id="password" required name="password" type="password" className="form-control mt-1" placeholder="Informe uma senha" />
          </label>
          <div className="container mt-3 mb-5">
            <button type="submit" className="btn btn-primary">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
