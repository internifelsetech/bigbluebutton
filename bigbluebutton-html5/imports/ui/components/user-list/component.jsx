import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectWbResizeEvent from '/imports/ui/components/presentation/resize-wrapper/component';
import Styled from './styles';
import CustomLogo from './custom-logo/component';
import UserContentContainer from './user-list-content/container';

const propTypes = {
  compact: PropTypes.bool,
  showBranding: PropTypes.bool.isRequired,
};

const defaultProps = {
  compact: false,
};

class UserList extends PureComponent {
  render() {
    const {
      compact,
      showBranding,
    } = this.props;
    const logoUrl = '/html5client/resources/images/ilmify.webp';

    return (
      <Styled.UserList data-test="userListContainer">
        {
          showBranding
            && !compact
            && logoUrl
            ? <CustomLogo CustomLogoUrl={logoUrl} /> : null
        }
        <UserContentContainer compact={compact} />
      </Styled.UserList>
    );
  }
}

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;

export default injectWbResizeEvent(UserList);
