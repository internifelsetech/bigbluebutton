import React from 'react';
import { defineMessages, injectIntl, useIntl } from 'react-intl';
import ModalSimple from '/imports/ui/components/common/modal/simple/component';

const intlMessages = defineMessages({
  title: {
    id: 'app.about.title',
    description: 'About title label',
  },
  version: {
    id: 'app.about.version',
    description: 'Client version label',
  },
  copyright: {
    id: 'app.about.copyright',
    defaultMessage: (new Date().getFullYear()),
    description: 'Client copyright label',
  },
  confirmLabel: {
    id: 'app.about.confirmLabel',
    description: 'Confirmation button label',
  },
  confirmDesc: {
    id: 'app.about.confirmDesc',
    description: 'adds descriptive context to confirmLabel',
  },
  dismissLabel: {
    id: 'app.about.dismissLabel',
    description: 'Dismiss button label',
  },
  dismissDesc: {
    id: 'app.about.dismissDesc',
    description: 'adds descriptive context to dissmissLabel',
  },
  version_label: {
    id: 'app.about.version_label',
    description: 'label for version bbb',
  },
});

const AboutComponent = (props) => {
  const {
    settings, isOpen, onRequestClose, priority,
  } = props;
  const intl = useIntl();
  const {
    html5ClientBuild,
    bbbServerVersion,
    displayBbbServerVersion,
  } = settings;

  return (
    <ModalSimple
      data-test="aboutModalTitleLabel"
      title={intl.formatMessage(intlMessages.title)}
      dismiss={{
        label: intl.formatMessage(intlMessages.dismissLabel),
        description: intl.formatMessage(intlMessages.dismissDesc),
      }}
      {...{
        isOpen,
        onRequestClose,
        priority,
      }}
    >
      <div style={{ padding: '10px 0', lineHeight: '1.5' }}>
        <strong>
          Ilmify
        </strong>
        <br />
        Smart Islamic Learning
        <br />
        <br />
        Client build:
        {' '}
        {html5ClientBuild}
        <br />
        {displayBbbServerVersion ? `ilmify version: ${bbbServerVersion}` : null}
        <br />
        <br />
        <a href="https://ilmify.app" target="_blank" rel="noreferrer">
          Visit Ilmify Website
        </a>
      </div>
    </ModalSimple>
  );
};

export default injectIntl(AboutComponent);
