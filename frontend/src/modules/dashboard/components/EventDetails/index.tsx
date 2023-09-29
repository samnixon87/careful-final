import { useEffect } from "react";
import {
  Panel,
  CloseWrapper,
  BG,
  Notes,
  EventDetailsPill,
  P,
  PillDescription,
  H1,
  Note,
  EventType,
} from "./styles";
import { Close } from "../../../common/styles";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../common/useStore";
import { ICareEventSanitised } from "../../../common/interfaces";

interface IProps {
  event: ICareEventSanitised;
  closePanel: () => void;
  eventDetailsPanelState: string;
}

export const EventDetails: React.FC<IProps> = ({
  event,
  closePanel,
  eventDetailsPanelState,
}) => {
  const { careRecipientName, panelEl, prevEvent } = useStore();

  useEffect(() => {
    if (prevEvent.current !== event) {
      panelEl.current!.scrollTop = 0;
    }
    prevEvent.current = event;
  }, [event, prevEvent]);

  return (
    <>
      <BG onClick={closePanel} $eventDetailsPanelState={eventDetailsPanelState} />
      <Panel $eventDetailsPanelState={eventDetailsPanelState} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $eventDetailsPanelState={eventDetailsPanelState}>
          <Close />
        </CloseWrapper>

        {event && (
          <>
            <Notes>
              <H1>Summary:</H1>
              <Note>
                This visit lasted from{" "}
                {dayjs((Object as any).values(event)[0].time).format(" HH:mm ")}{" "}
                to{" "}
                {dayjs((Object as any).values(event).at(-1).time).format(
                  " HH:mm"
                )}
                .
              </Note>
              {event.find((e: any) => e.event_type === "alert raised" || "fall detected" || "emergency response")
                ? "An alert was raised. This indicates that the carer is concerned."
                : ""}
              {event.map((e: any, key: number) => {
                if (e.event_type === "general observation") {
                  return (
                    <>
                      <H1 key={key}>Notes from the caregiver:</H1>
                      <Note>
                        {e.note.replaceAll("[redacted]", careRecipientName)}
                      </Note>
                    </>
                  );
                }
              })}
            </Notes>
            {event.map((e: any, key: number) => (
              <EventDetailsPill key={key}>
                <P>{dayjs(e.time).format(" HH:mm ")}</P>
                <PillDescription>
                  <EventType>{e.event_type}</EventType>
                  <P>{e.description}</P>
                  <P>{e.payload.note}</P>
                  <P>{e.payload.fluid}</P>
                  <P>{e.payload.pad_condition}</P>
                  <P>{e.payload.mood}</P>
                </PillDescription>
                {e.event_type === "alert raised" ||
                e.event_type === "no medication observation received" ||
                e.event_type === "fall detected"||
                e.event_type === "emergency response"||
                e.event_type === "no medication observation received" ||
                e.event_type === "visit cancelled" ||
                e.event_type === "concern raised" ||
                e.event_type === "regular medication not taken" ||
                e.event_type === "alert qualified"  ? (
                  <P>
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      style={{ color: "#ed1d1d" }}
                    />
                  </P>
                ) : (
                  <P>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "#53c5c1" }}
                    />
                  </P>
                )}
              </EventDetailsPill>
            ))}
          </>
        )}
      </Panel>
    </>
  );
};

export default EventDetails;
