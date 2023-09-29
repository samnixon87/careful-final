import styled from 'styled-components'
import { fadeIn } from '../../../common/styles'

export const UL = styled.div`
  padding-left: 0px;
  margin-top: 12px;
  margin-bottom: 32px;
  @media (max-width: 800px) {
    margin-bottom: 48px;
  }
`

interface IListProps {
  $isPanelOpen?: any;
  $top?: any;
};

export const List = styled.div<IListProps>`
  padding: 16px 40px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px` : 0)};
  animation: ${fadeIn} 0.8s ease-in-out;
  @media (max-width: 800px) {
    margin-top: 10px;
    padding-top: 20px;
  }
`
