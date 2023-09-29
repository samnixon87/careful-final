import styled from "styled-components";
import { Pill } from "../../../common/styles";

interface IPanelProps {
  $eventDetailsPanelState: string;
}

export const Panel = styled.article<IPanelProps>`
  background-color: #ffe581;
  border-left: 2px solid #000;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;
  right: ${({ $eventDetailsPanelState }) =>
    $eventDetailsPanelState === "entering" ||
    $eventDetailsPanelState === "entered"
      ? 0
      : "-660px"};
  bottom: 0;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: ${({ $eventDetailsPanelState }) =>
      $eventDetailsPanelState === "entering" ||
      $eventDetailsPanelState === "entered"
        ? 0
        : "-100vh"};
    right: unset;
    z-index: 3;
  }
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 0;
`;

interface ICloseWrapperProps {
  $eventDetailsPanelState: string;
}

export const CloseWrapper = styled(Pill)<ICloseWrapperProps>`
  display: ${({ $eventDetailsPanelState }) =>
    $eventDetailsPanelState === "entered" ? "flex" : "none"};
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`;

interface IBGProps {
  onClick: () => void;
  $eventDetailsPanelState: string;
}

export const BG = styled.div<IBGProps>`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({ $eventDetailsPanelState }) =>
    $eventDetailsPanelState === "entering" ||
    $eventDetailsPanelState === "entered"
      ? 1
      : 0};
  pointer-events: ${({ $eventDetailsPanelState }) =>
    $eventDetailsPanelState === "exited" ? "none" : "auto"};
  transition: 300ms;
`;

export const Notes = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  min-height: 15%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 0;
  padding: 16px 36px;
  border: 3px solid #54c5c1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 8px 10px 0 0 #b6e5e5;
  color: #00254d;
`;

export const Note = styled.div`
  margin-top: 8px;
  font-size: x-large;
  margin-bottom: 8px;
`;

export const H1 = styled.h1`
  margin-top: 8px;
  margin-bottom: 0px;
  font-size: small;
  font-weight: normal;
  padding: 0px;
`;

export const EventDetailsPill = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 85%;
  max-width: 1000px;
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 0;
  padding: 8px 36px;
  border: 3px solid #54c5c1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 4px 5px 0 0 #b6e5e5;
  color: #00254d;
`;

export const PillDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: 36px;
`;

export const EventType = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 0;
  text-transform: capitalize;
  font-weight: bold;
`;
