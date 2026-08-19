import styled from 'styled-components';
import { colorWhite } from '/imports/ui/stylesheets/styled-components/palette';
import { borderSize, navbarHeight, smPaddingX } from '/imports/ui/stylesheets/styled-components/general';
import { smallOnly, mediumUp } from '/imports/ui/stylesheets/styled-components/breakpoints';

/* Outer header strip — sticky so it never scrolls away */
const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f8fafc;
  padding: 5px 6px;
  margin: 0;
  flex-shrink: 0;
  gap: 2px;
  border-bottom: 1.5px solid #f1f5f9;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

/* Individual pill tab — active = white card on slate bg */
const TabButton = styled.button`
  flex: 1;
  border: ${props => props.active ? '1px solid rgba(124, 168, 43, 0.2)' : '1px solid transparent'};
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  color: ${props => props.active ? '#7ca82b' : '#64748b'};
  font-weight: ${props => props.active ? '700' : '500'};
  padding: 6px 2px;
  border-radius: 0.625rem;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: ${props => props.active ? '0 1px 3px rgba(124, 168, 43, 0.12)' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  white-space: nowrap;

  & i.tab-icon {
    font-size: 13px;
    line-height: 1;
  }

  &:hover {
    color: ${props => props.active ? '#7ca82b' : '#1e293b'};
    background: ${props => props.active ? '#ffffff' : 'rgba(226, 232, 240, 0.5)'};
  }
`;

/* Green count pill shown next to Users label */
const UserCountBadge = styled.span`
  background: rgba(124, 168, 43, 0.15);
  color: #7ca82b;
  padding: 1px 5px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.4;
`;

const Poll = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  overflow-x: hidden;
  outline: transparent;
  outline-width: ${borderSize};
  outline-style: solid;
  order: 2;
  height: 100%;
  box-sizing: border-box;
  background-color: ${colorWhite};
  min-width: 20em;
  padding: ${smPaddingX};

  @media ${smallOnly} {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    height: auto;
    top: ${navbarHeight};
    overflow: auto;
     &.no-padding {
      padding: 0;
    }
  }

  @media ${mediumUp} {
    position: relative;
    order: 1;
  }
`;

export default {
  Poll,
  TabsWrapper,
  TabButton,
  UserCountBadge,
};
