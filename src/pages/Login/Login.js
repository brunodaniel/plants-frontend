import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      email: email,
      password: senha,
    };
    axios.post("/auth/Login", login).then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
    });
  };

  return (
    <div className="login">
      <h2 className="login_title">Login</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          required
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(event) => setSenha(event.target.value)}
        ></input>
        <input type="submit" value="login" />
      </form>
    </div>
  );
}
