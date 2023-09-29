import { Fragment, useEffect } from "react";
import axios from "axios";
import Graph from "../Graph";
import EventContainer from "../EventContainer";
import EventDetails from "../EventDetails";
import Pagination from "../Pagination";
import { Container, EventBlock } from "./styles";
import { createDetailsObject } from "../../utils/helpers";
import { Transition } from "react-transition-group";
import { useStore } from "../../../common/useStore";
import { ICareEvent, ICareEventSanitised } from "../../../common/interfaces";

const CareRecord = () => {
  const {
    id,
    setId,
    setCareRecipientName,
    accessToken,
    selectedEvent,
    setSelectedEvent,
    setCareEvents,
    setCareEventsByDate,
    showPanel,
    setShowPanel,
    page,
    isLoading,
    setIsLoading,
  } = useStore();

  const loadCareEvents = async () => {
    const token = await accessToken;
    const careId = await id;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        withCredentials: true,
      },
    };
    const res = await axios.get(
      `http://localhost:8000/events/${careId}?page=${page}`,
      config
    );
    const daily_events = await res.data.daily_events;
    const visits_by_date = await res.data.visits_by_date;
    setCareEventsByDate(visits_by_date);
    setCareEvents(daily_events);
    setIsLoading(false);
  };

  useEffect(() => {
    // Grab care events
    const storedId = localStorage.getItem("id");
    if (storedId) {
      setId(storedId);
      loadCareEvents();
    }
    // Set care recipient name from locals
    setCareRecipientName(localStorage.getItem("name")!);
  }, [page, accessToken]);

  // Event details panel setters
  const pickEvent = (event: ICareEvent) => {
    const detailsObject: ICareEventSanitised = createDetailsObject(event);
    setSelectedEvent(detailsObject);
    loadCareEvents();
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  return (
    <Fragment>
      {isLoading ? (
        <Container>
          <EventBlock></EventBlock>
        </Container>
      ) : (
        <>
          <Container>
            <Graph />
          </Container>
          <EventContainer pickEvent={pickEvent} />
          <Pagination />
          <Transition in={showPanel} timeout={300}>
            {(eventDetailsPanelState) => (
              <EventDetails
                event={selectedEvent!}
                closePanel={closePanel}
                eventDetailsPanelState={eventDetailsPanelState}
              />
            )}
          </Transition>
        </>
      )}
    </Fragment>
  );
};

export default CareRecord;
