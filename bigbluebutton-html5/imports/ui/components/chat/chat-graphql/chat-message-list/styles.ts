import styled from 'styled-components';
import { smPaddingX } from '/imports/ui/stylesheets/styled-components/general';
import { ScrollboxVertical } from '/imports/ui/stylesheets/styled-components/scrollable';
import { ButtonElipsis } from '/imports/ui/stylesheets/styled-components/placeholders';

interface MessageListProps {
  isRTL: boolean;
  $hasMessageToolbar: boolean;
}

interface UnreadButtonProps {
  isRTL: boolean;
}

export const MessageList = styled(ScrollboxVertical)<MessageListProps>`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-flow: column;
  outline-style: none;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  z-index: 2;
  padding-bottom: ${smPaddingX};

  ${({ isRTL }) => isRTL && `
    padding-left: ${smPaddingX};
  `}

  ${({ isRTL }) => !isRTL && `
    padding-right: ${smPaddingX};
  `}
`;

export const UnreadButton = styled(ButtonElipsis)<UnreadButtonProps>`
  flex-shrink: 0;
  text-transform: uppercase;
  margin-top: .25rem;
  z-index: 3;
  align-self: center;
`;

export const PageWrapper = styled.div``;

export const Content = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default {
  MessageList,
  UnreadButton,
  PageWrapper,
  Content,
};
