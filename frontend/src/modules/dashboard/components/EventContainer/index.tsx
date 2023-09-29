import { useEffect } from "react";
import Visit from "../Visit";
import { debounce } from "lodash-es";
import { UL, List } from "./styles";
import { useStore } from "../../../common/useStore";
import { ICareEvent } from "../../../common/interfaces";

interface IProps {
  pickEvent: (event: ICareEvent) => void;
}

const EventContainer: React.FC<IProps> = ({ pickEvent }) => {
  const {
    careEvents,
    isPanelOpen,
    scroll,
    setScroll,
    prevPanelState,
  } = useStore();

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY);
    }, 100);

    if (!isPanelOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPanelOpen]);

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll);
    }

    prevPanelState.current = isPanelOpen;
  }, [isPanelOpen, prevPanelState, scroll]);

  return (
    <>
      <List>
        {Object.keys(careEvents!).map((key: string) => (
          <UL key={key}>
            <Visit
              careEvents={careEvents![key as keyof typeof careEvents]}
              pickEvent={pickEvent}
            />
          </UL>
        ))}
      </List>
    </>
  );
};

export default EventContainer;
