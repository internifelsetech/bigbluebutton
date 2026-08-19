import styled from 'styled-components';
import QuickPollDropdownContainer from '/imports/ui/components/actions-bar/quick-poll-dropdown/container';
import {
  colorDanger,
  colorWhite,
  toolbarButtonColorDisabled,
} from '/imports/ui/stylesheets/styled-components/palette';
import {
  borderSize,
  smPaddingY,
  smPaddingX,
} from '/imports/ui/stylesheets/styled-components/general';
import Button from '/imports/ui/components/common/button/component';
import { mediumDown } from '/imports/ui/stylesheets/styled-components/breakpoints';

const PresentationToolbarWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: rgba(13, 14, 18, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 9999px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  min-width: 340px;
  max-width: 340px;
  color: #cbd5e1;

  @media ${mediumDown} {
    bottom: 8px;
  }

  & > *:empty {
    display: none;
  }

  & > div[hidden] {
    display: none !important;
  }

  /* Force icon colors for children to be light */
  button, [role="button"], [data-test="quickPollBtn"] {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    color: #94a3b8 !important;
    min-width: auto;
    width: 28px !important;
    height: 28px !important;
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px !important;
    
    & span {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
    
    i {
      color: #94a3b8 !important;
      font-size: 1.1rem !important;
      transition: color 0.2s, transform 0.1s;
    }
    
    &:hover,
    &:active,
    &[aria-pressed="true"],
    &.active {
      background-color: #7ca82b !important;
      border-color: #7ca82b !important;
    }

    &:hover i,
    &:active i,
    &[aria-pressed="true"] i,
    &.active i {
      color: #ffffff !important;
    }

    &:active i {
      transform: scale(0.95);
    }

    &:disabled, &[disabled] {
      background-color: transparent !important;
      cursor: not-allowed;
    }

    &:disabled i, &[disabled] i {
      color: rgba(148, 163, 184, 0.4) !important;
    }
  }
`;

const QuickPollButtonWrapper = styled.div`
  display: contents;
  min-width: 0;

  &:empty {
    display: none;
  }
`;

const QuickPollButton = styled(QuickPollDropdownContainer)`
  position: relative;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
`;

const PresentationSlideControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  &:empty {
    display: none;
  }
`;

const PrevSlideButton = styled(Button)``;

const NextSlideButton = styled(Button)``;

const SkipSlideSelect = styled.select`
  background: transparent;
  color: #e2e8f0;
  font-weight: 500;
  font-size: 12px;
  border: none;
  cursor: pointer;
  padding: 0 4px;
  
  &:-moz-focusring {
    outline: none;
  }
  &:focus, &:hover {
    outline: none;
    color: #ffffff;
  }
  & > option {
    color: #1e293b;
    background-color: #ffffff;
  }
`;

const PresentationZoomControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  &:empty {
    display: none;
  }

  /* Separator — keep margin symmetric so no left-bias */
  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgba(255, 255, 255, 0.15);
    margin: 0 2px;
    flex-shrink: 0;
  }
`;

const FitToWidthButton = styled(Button)`
  ${({ $fitToWidth }) => $fitToWidth && `
    background-color: #7ca82b !important;
    i { color: #ffffff !important; }
  `}
`;

const WBAccessButton = styled(Button)``;

const InfiniteWhiteboardButton = styled(Button)``;

const MultiUserTool = styled.span`
  background-color: ${colorDanger};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: -4px;
  right: -4px;
  color: ${colorWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

const MUTPlaceholder = styled.div`
  display: none;
`;

export default {
  PresentationToolbarWrapper,
  QuickPollButton,
  QuickPollButtonWrapper,
  PresentationSlideControls,
  PrevSlideButton,
  NextSlideButton,
  SkipSlideSelect,
  PresentationZoomControls,
  FitToWidthButton,
  MultiUserTool,
  WBAccessButton,
  MUTPlaceholder,
  InfiniteWhiteboardButton,
};
