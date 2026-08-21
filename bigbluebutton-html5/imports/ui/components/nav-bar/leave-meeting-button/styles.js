import styled from 'styled-components';
import { smallOnly } from '/imports/ui/stylesheets/styled-components/breakpoints';
import Button from '/imports/ui/components/common/button/component';

const LeaveMeetingWrapper = styled.div`
  display: inline-block;
  
  ${({ $isMobile }) => !$isMobile && `
    margin: 0 0.125rem;
  `}
`;

const LeaveButton = styled(Button)`
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: 400;

  ${({ state }) => state === 'open' && `
    @media ${smallOnly} {
      display: none;
    }
  `}

  ${({ state }) => state === 'closed' && `
    z-index: 3;
  `}
`;

export default {
  LeaveMeetingWrapper,
  LeaveButton,
};
