import { useState } from "react";
import { Button, Header } from "../../components";
import InputBox from "../../components/custom/inputBox";
import { Link, useNavigate } from "react-router";
import errorData from "./errorData";
import Authentication from "../../services/Authentication";
import Storage from "../../services/Storage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(errorData);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage(errorData);

    if (email === "") {
      setErrorMessage((prev) => ({
        ...prev,
        email: { message: "Email é obrigatório", visible: true },
      }));
      return;
    }

    if (password === "") {
      setErrorMessage((prev) => ({
        ...prev,
        password: { message: "Senha é obrigatório", visible: true },
      }));
      return;
    }
    if (password.length < 6) {
      setErrorMessage((prev) => ({
        ...prev,
        password: {
          message: "Senha precisa conter pelo menos 6 caractéres",
          visible: true,
        },
      }));
      return;
    }
    try {
      setLoading(true);
      const { data, error } = await Authentication.login(email, password);
      setMessage("Login realizado com sucesso!");
      Storage.setItem('user', data);
      if (error) {
        throw error;
      }
      navigate("/");
    } catch (error) {
      setMessage("Erro ao realizar login. Verifique suas credenciais.");
      console.error("Falha no Login", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-start min-h-[calc(100dvh-74px)]">
        <div className="flex flex-col gap-2 px-14 mt-10 w-md shadow-lg h-96 justify-center">
          <div className="font-[roboto] font-bold italic text-3xl text-center text-bg-header mb-2">
            Seja bem vindo!
          </div>
          <InputBox
            type="email"
            placeholder="E-mail"
            labelId="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={
              errorMessage.email.visible ? errorMessage.email.message : null
            }
          />
          <InputBox
            type="password"
            placeholder="Senha"
            labelId="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={
              errorMessage.password.visible
                ? errorMessage.password.message
                : null
            }
          />
          {loading ? (
            <div>Entrando...</div>
          ) : (
            <Button
              className="bg-pink-400 text-white font-[roboto] font-bold italic rounded-full px-6 py-2 
          h-12 self-center hover:bg-pink-500 shadow-md cursor-pointer mt-4"
              onClick={handleLogin}
            >
              Entrar
            </Button>
          )}

          <div className="text-bg-header text-center">{message ? message : null}</div>
          <Link
            to="/register"
            className="text-center mt-4 text-pink-400 hover:underline font-[roboto]"
          >
            Registrar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
