import { Header } from "../components";
import InputBox from "../components/custom/inputBox";

function Login() {
  return (
    <>
      <Header />
      <InputBox placeholder="Username" />
      <InputBox type="password" placeholder="Password" />
    </>
  );
}

export default Login;
