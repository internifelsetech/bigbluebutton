import styled from 'styled-components';
import Icon from '/imports/ui/components/common/icon/component';
import { barsPadding, borderSize } from '/imports/ui/stylesheets/styled-components/general';
import {
  colorWhite,
  colorDanger,
  colorGrayDark,
  colorBackground,
  colorGray,
} from '/imports/ui/stylesheets/styled-components/palette';
import { fontSizeBase } from '/imports/ui/stylesheets/styled-components/typography';
import { phoneLandscape, smallOnly } from '/imports/ui/stylesheets/styled-components/breakpoints';
import Button from '/imports/ui/components/common/button/component';

const Navbar = styled.header`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.5rem;
  background-color: #0d0e12;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 1rem;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex: 1;
`;

const ArrowLeft = styled(Icon)`
  position: absolute;
  font-size: 40%;
  color: ${colorWhite};
  left: .25rem;
  @media ${smallOnly} {
    display: none;
  }
`;

const ArrowRight = styled(Icon)`
  position: absolute;
  font-size: 40%;
  color: ${colorWhite};
  right: .0125rem;
  @media ${smallOnly} {
    display: none;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
`;

const PresentationTitle = styled.h1`
  font-weight: 400;
  color: ${colorWhite};
  font-size: ${fontSizeBase};
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 30vw;
`;

const TitleButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 11px;
  font-weight: 600;
  color: #e2e8f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${colorWhite};
    border-radius: 9999px;
  }

  > [class^="icon-ilmify-"] {
    font-size: 75%;
  }

  i {
    margin-left: .5rem;
    margin-right: .5rem;
    font-size: .75rem;
  }
`;

const PluginInfoComponent = styled.h1`
  font-weight: 400;
  color: ${colorWhite};
  font-size: ${fontSizeBase};
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 30vw;
`;

const PluginComponentWrapper = styled.div`
  margin: 0 .5rem;
`;

const PluginSeparatorWrapper = styled.div`
  color: ${colorGray};
  font-size: ${fontSizeBase};
  margin: 0 1rem;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  gap: 8px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;

  @media ${phoneLandscape} {
    margin-top: .25rem;
  }
`;

const NavbarToggleButton = styled(Button)`
  margin: 0;
  z-index: 3;

  ${({ hasNotification }) => hasNotification && `
    position: relative;

    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      bottom: ${borderSize};
      right: 3px;
      background-color: ${colorDanger};
      border: ${borderSize} solid ${colorGrayDark};
    }
  `}
`;

export default {
  Navbar,
  Top,
  Left,
  ArrowLeft,
  ArrowRight,
  Center,
  PresentationTitle,
  TitleButton,
  Right,
  Bottom,
  NavbarToggleButton,
  PluginInfoComponent,
  PluginComponentWrapper,
  PluginSeparatorWrapper,
};
