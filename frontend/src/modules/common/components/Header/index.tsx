import { HeaderContainer, Title, Logout } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";

export const Nav = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <>
      <HeaderContainer>
        <a href="/">
          <Title>Careful</Title>
        </a>
        {isAuthenticated ? (
          <Logout
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Logout>
        ) : (
          <></>
        )}
      </HeaderContainer>
    </>
  );
};

export default Nav;
