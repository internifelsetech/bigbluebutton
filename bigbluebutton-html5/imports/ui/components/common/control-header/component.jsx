import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';
import Left from './left/component';
import Right from './right/component';

const Header = ({
  leftButtonProps,
  rightButtonProps,
  customRightButton,
  title,
  'data-test': dataTest,
  ...rest
}) => {
  const renderCloseButton = () => (
    <Right {...rightButtonProps} />
  );

  const renderCustomRightButton = () => (
    <Styled.RightWrapper>
      {customRightButton}
    </Styled.RightWrapper>
  );

  return (
    <Styled.Header data-test={dataTest ? dataTest : ''} {...rest}>
      {leftButtonProps ? <Left {...leftButtonProps} /> : title ? <h2 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#333', margin: 0, paddingLeft: '0.5rem' }}>{title}</h2> : <div />}
      {customRightButton
        ? renderCustomRightButton()
        : rightButtonProps
          ? renderCloseButton()
          : null}
    </Styled.Header>
  );
}

Header.propTypes = {
  leftButtonProps: PropTypes.object,
  rightButtonProps: PropTypes.object,
  customRightButton: PropTypes.element,
  title: PropTypes.string,
  dataTest: PropTypes.string,
};

export default Header;
