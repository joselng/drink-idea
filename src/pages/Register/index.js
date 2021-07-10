import React from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, email, password] = e.target;

    dispatch(userRegister(name.value, email.value, password.value));
  };

  return (
    <div className="container" style={{ marginTop: 40 }}>
      <h2>Cadastre-se</h2>
      <p>Informe seus dados abaixo para registrar um novo usuário</p>
      <form onSubmit={handleSubmit}>
        <div className="row col-lg-6 col-xs-12 col-sm-9">
          <label htmlFor="name" className="mb-3">
            Nome
            <input id="name" required name="name" type="text" className="form-control mt-1" placeholder="Informe seu nome" />
          </label>
          <label htmlFor="email" className="mb-3">
            Email
            <input id="email" required name="email" type="email" className="form-control mt-1" placeholder="Informe seu email" />
          </label>
          <label htmlFor="password" className="mb-3">
            Senha
            <input id="password" required name="password" type="password" className="form-control mt-1" placeholder="Informe uma senha" />
          </label>
          <div className="container mt-3 mb-5">
            <button type="submit" className="btn btn-primary">Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
