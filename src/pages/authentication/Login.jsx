import { useContext, useState } from "react";
import { Button, Header } from "../../components";
import { Link, useNavigate } from "react-router";
import errorData from "./errorData";
import Authentication from "../../services/Authentication";
import Storage from "../../services/Storage";
import ToastContext from "../../context/ToastContext";
import Input from "../../components/custom/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(errorData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);

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
      Storage.setItem("user", data);
      if (error) {
        throw error;
      }
      showToast("Login realizado com sucesso!", "success");
      navigate("/");
    } catch (error) {
      showToast("Erro ao realizar login. Verifique suas credenciais.", "error");
      console.error("Falha no Login", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-start min-h-[calc(100dvh-74px)]">
        <div className="flex flex-col gap-2 px-14 mt-10 w-md shadow-lg h-96 justify-center">
          <div className="font-[roboto] font-bold italic text-3xl text-center text-auth-welcome-text mb-2">
            Seja bem-vindo!
          </div>
          <div className="flex flex-col gap-1">
            <Input
              type="email"
              placeholder="E-mail"
              labelId="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={
                errorMessage.email.visible ? errorMessage.email.message : null
              }
            />
            <Input
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
          </div>
          {loading ? (
            <div>Entrando...</div>
          ) : (
            <Button
              intent="primary"
              className=" italic px-6 py-2 self-center mt-4"
              onClick={handleLogin}
            >
              Entrar
            </Button>
          )}
          <Link
            to="/register"
            className="text-center mt-4 text-text hover:underline font-[roboto]"
          >
            Registrar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
