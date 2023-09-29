import NameSelector from "../NameSelector";
import { Wrapper } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import Auth from "../Auth";
import { useEffect } from "react";
import { useStore } from "../../../common/useStore";

const LandingPage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { setAccessToken } = useStore();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "http://localhost:8000/", // Value in Identifier field for the API being called.
          },
        });
        setAccessToken(token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <>
      <Wrapper>
        {" "}
        {isAuthenticated ? (
          <NameSelector/>
        ) : (
          <Auth />
        )}
      </Wrapper>
    </>
  );
};
export default LandingPage;
