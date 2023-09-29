import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "../Header";
import LandingPage from "../../../login/components/LandingPage";
import CareRecord from "../../../dashboard/components/CareRecord";
import NotFound from "../NotFound";
import { GlobalStyle } from "../../styles";
import { useStore } from "../../../common/useStore";

export const App = () => {
  const {
    accessToken,
    initializeAccessToken,
    setCareRecipients,
    setCaregivers,
  } = useStore();

  // Fix for weird styled-components vs react bug that still isn't resolved: https://github.com/styled-components/styled-components/issues/3738
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const GlobalStyleProxy: any = GlobalStyle;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      withCredentials: true,
    },
  };

  useEffect(() => {
    initializeAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      loadCareRecipients();
    }
  }, [accessToken]);

  const loadCareRecipients = async () => {
    const resCareRecipients = await axios.get(
      "http://localhost:8000/care-recipients/",
      config
    );
    const resCaregivers = await axios.get(
      "http://localhost:8000/caregivers/",
      config
    );
    setCareRecipients(resCareRecipients.data.care_recipientsList);
    setCaregivers(resCaregivers.data.caregiversList);
  };

  return (
    <>
      <GlobalStyleProxy />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="events/:name" element={<CareRecord />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
