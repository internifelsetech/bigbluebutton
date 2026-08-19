import styled, { css } from 'styled-components';
import { borderSize } from '/imports/ui/stylesheets/styled-components/general';
import { colorWhite, colorDanger, colorSuccess } from '/imports/ui/stylesheets/styled-components/palette';

const Switch = styled.div`
  &:hover,
  &:focus,
  &:focus-within {
    outline: transparent;
    outline-style: dotted;
    outline-width: ${borderSize};
  }

  &:focus,
  &:focus-within {
    outline-style: solid;
  }

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}

  ${({ disabled, animations }) => disabled && animations && `
    transition: opacity 0.25s;
  `}
`;

const ToggleTrack = styled.div`
  position: relative;
  overflow: hidden;
  width: 2.75rem;
  height: 1.5rem;
  padding: 0;
  border-radius: 1.5rem;
  background-color: ${colorWhite};
  border: 1px solid var(--color-gray-lightest, #D4D9DF);
  box-sizing: border-box;

  [dir="rtl"] & {
    width: 2.75rem;
  }

  ${({ animations }) => animations && `
    transition: all 0.2s ease;
  `}

  ${({ checked }) => checked && `
    background-color: var(--color-primary, #589E00);
    border-color: var(--color-primary, #589E00);
  `}

  ${({ invertColors, checked }) => invertColors && !checked && `
    background-color: var(--color-primary, #589E00) !important;
    border-color: var(--color-primary, #589E00) !important;
  `}

  ${({ invertColors, checked }) => invertColors && checked && `
    background-color: ${colorWhite} !important;
    border-color: var(--color-gray-lightest, #D4D9DF) !important;
  `}

`;

const ToggleTrackCheck = styled.div`
  display: none;
`;

const ToggleTrackX = styled.div`
  display: none;
`;

const ToggleThumb = styled.div`
  position: absolute;
  top: 0.15rem;
  left: ${({ isRTL }) => (isRTL ? '1.45rem' : '0.15rem')};
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  background-color: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.3);

  ${({ animations }) => animations && `
    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  `}

  ${({ checked }) => checked && css`
    left: ${({ isRTL }) => (isRTL ? '0.15rem' : '1.45rem')};
    box-shadow: 0px 1px 3px rgba(0,0,0,0.3);
  `}

  ${({ hasFocus }) => hasFocus && `
    box-shadow: 0px 0px 2px 3px #0F70D7;
  `}

  ${({ disabled }) => !disabled && `
    &:active{
      box-shadow: 0px 0px 5px 5px #0F70D7;
    }
  `}
`;

const ScreenreaderInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export default {
  Switch,
  ToggleTrack,
  ToggleTrackCheck,
  ToggleTrackX,
  ToggleThumb,
  ScreenreaderInput,
};
