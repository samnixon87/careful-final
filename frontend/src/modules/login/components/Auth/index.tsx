import { useAuth0 } from "@auth0/auth0-react";
import { Container, Login } from "./styles";

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Container>
        <p>Please login to your Careful account</p>
        <Login onClick={() => loginWithRedirect()}>Log In</Login>
      </Container>
    </>
  )
};

export default Auth;
