import styled from 'styled-components';
import {
  whiteboardToolbarMargin,
} from '/imports/ui/stylesheets/styled-components/general';
import Button from '/imports/ui/components/common/button/component';

const DecreaseZoomButton = styled(Button)``;

const IncreaseZoomButton = styled(Button)``;

const ResetZoomButton = styled(Button)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 11px !important;
  font-family: monospace;
  margin-left: ${whiteboardToolbarMargin};
  margin-right: ${whiteboardToolbarMargin};
  position: relative;
  
  /* Override default button styles for floating theme */
  color: #94a3b8 !important; /* slate-400 */
  background-color: transparent !important;
  border-radius: 4px !important;
  box-shadow: none !important;
  border: none !important;
  min-width: 48px;

  /* Don't icon-ize the text */
  & > span > i {
    display: none !important;
  }
  
  /* Text directly instead of an icon */
  &::after {
    content: attr(data-custom-icon);
  }

  &:focus,
  &:hover {
    outline: none !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important;
  }

  &:hover {
    opacity: 1;
  }
`;

export default {
  DecreaseZoomButton,
  IncreaseZoomButton,
  ResetZoomButton,
};
