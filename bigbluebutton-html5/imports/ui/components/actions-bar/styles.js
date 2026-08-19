import styled from 'styled-components';
import { smallOnly } from '/imports/ui/stylesheets/styled-components/breakpoints';
import { smPaddingX, smPaddingY, barsPadding } from '/imports/ui/stylesheets/styled-components/general';
import { colorWhite, colorBackground } from '/imports/ui/stylesheets/styled-components/palette';
import Button from '/imports/ui/components/common/button/component';

const ActionsBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 12px;
`;

const ActionsBarWrapper = styled.section`
  flex: 1;
  padding: 0 16px;
  height: 70px;
  background-color: #0d0e12;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  order: 3;
  display: flex;
  align-items: center;

  /* ButtonWrapper (circle button outer element) */
  .buttonWrapper {
    border-radius: 12px !important;
    min-width: 40px !important;
    height: 40px !important;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  /* ButtonSpan (the inner span that holds the icon) */
  .buttonWrapper > span {
    border-radius: 12px !important;
    width: 40px !important;
    height: 40px !important;
    box-shadow: none !important;
  }

  /* Icon inside buttons */
  .buttonWrapper i,
  .buttonWrapper svg {
    font-size: 20px !important;
    opacity: 1 !important;
    color: currentColor !important;
  }

  /* Default (inactive) button style */
  .buttonWrapper:not(.primary):not(.danger):not(.success):not([aria-pressed="true"]) > span:not([style*="display: none"]):not([hidden]) {
    background-color: #1e2128 !important;
    color: #ffffff !important;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 2px 4px rgba(0,0,0,0.2) !important;
    border: 1px solid rgba(255, 255, 255, 0.04) !important;
  }

  .buttonWrapper:not(.primary):not(.danger):not(.success):not([aria-pressed="true"]):hover > span:not([style*="display: none"]):not([hidden]) {
    background-color: rgba(255, 255, 255, 0.15) !important;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0,0,0,0.3) !important;
  }

  /* Active/primary button style */
  .buttonWrapper.primary > span,
  .buttonWrapper.success > span,
  .buttonWrapper[aria-pressed="true"] > span {
    background-color: #7ca82b !important;
    color: #ffffff !important;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.1) !important;
    border: 1px solid #8ab836 !important;
  }

  /* Danger/muted button style */
  .buttonWrapper.danger > span,
  .buttonWrapper.muted > span {
    background-color: #ef4444 !important;
    color: #ffffff !important;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.1) !important;
    border: 1px solid #f87171 !important;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex: 0;
  @media ${smallOnly} {
    bottom: ${smPaddingX};
    left: ${smPaddingX};
    right: auto;
    [dir="rtl"] & {
      left: auto;
      right: ${smPaddingX};
    }
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex: 0;
  justify-content: center;
  > *:not(span):not(:last-child) {
    @media ${smallOnly} {
      margin: 0 ${smPaddingY};
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  flex: 0;
  position: relative;
  [dir="rtl"] & {
    right: auto;
    left: ${smPaddingX};
  }
  @media ${smallOnly} {
    right: 0;
    left: 0;
    display: contents;
  }
`;

const RaiseHandButton = styled(Button)`
  ${({ ghost }) => ghost && `
    & > span {
      box-shadow: none;
      background-color: transparent !important;
      border-color: ${colorWhite} !important;
    }
  `}
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0 6px;
  }
`;

const ReactionsDropdown = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0.2em 0.2em 0.2em 0.2em;
  text-align: center;
  max-height: 270px;
  width: 270px;
  em-emoji {
    cursor: pointer;
  }
`;

const Separator = styled.div`
  height: 2.5rem;
  width: 0;
  border: 1px solid ${colorWhite};
  align-self: center;
  opacity: .75;
`;

const Gap = styled.div`
  display: flex;
  gap: 12px;
`;

export default {
  ActionsBar,
  Left,
  Center,
  Right,
  RaiseHandButton,
  ButtonContainer,
  ReactionsDropdown,
  Wrapper,
  ActionsBarWrapper,
  Gap,
  Separator,
};
