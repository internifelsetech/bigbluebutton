import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Resizable } from 're-resizable';
import { ACTIONS, PANELS } from '../layout/enums';
import ChatContainer from '/imports/ui/components/chat/chat-graphql/component';
import NotesContainer from '/imports/ui/components/notes/component';
import PollContainer from '/imports/ui/components/poll/container';
import BreakoutRoomContainer from '../breakout-room/breakout-room/component';
import TimerContainer from '/imports/ui/components/timer/panel/component';
import GuestUsersManagementPanel from '/imports/ui/components/waiting-users/waiting-users-graphql/component';
import Styled from './styles';
import ErrorBoundary from '/imports/ui/components/common/error-boundary/component';
import FallbackView from '/imports/ui/components/common/fallback-errors/fallback-view/component';
import GenericContentSidekickContainer from '/imports/ui/components/generic-content/generic-sidekick-content/container';
import UserListContainer from '/imports/ui/components/user-list/container';

const propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number,
  right: PropTypes.number,
  zIndex: PropTypes.number.isRequired,
  minWidth: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isResizable: PropTypes.bool.isRequired,
  resizableEdge: PropTypes.objectOf(PropTypes.bool).isRequired,
  contextDispatch: PropTypes.func.isRequired,
};

const SidebarContent = (props) => {
  const {
    top,
    left = null,
    right = null,
    zIndex,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
    isResizable,
    resizableEdge,
    contextDispatch,
    sidebarContentPanel,
    amIPresenter,
    isSharedNotesPinned,
    currentSlideId,
    amIModerator,
    userCount = 0,
  } = props;

  const [resizableWidth, setResizableWidth] = useState(width);
  const [resizableHeight, setResizableHeight] = useState(height);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartWidth, setResizeStartWidth] = useState(0);
  const [resizeStartHeight, setResizeStartHeight] = useState(0);

  useEffect(() => {
    if (!isResizing) {
      setResizableWidth(width);
      setResizableHeight(height);
    }
  }, [width, height]);

  const setSidebarContentSize = (dWidth, dHeight) => {
    const newWidth = resizeStartWidth + dWidth;
    const newHeight = resizeStartHeight + dHeight;

    setResizableWidth(newWidth);
    setResizableHeight(newHeight);

    contextDispatch({
      type: ACTIONS.SET_SIDEBAR_CONTENT_SIZE,
      value: {
        width: newWidth,
        height: newHeight,
        browserWidth: window.innerWidth,
        browserHeight: window.innerHeight,
      },
    });
  };

  const smallSidebar = width < (maxWidth / 2);
  const pollDisplay = sidebarContentPanel === PANELS.POLL ? 'inherit' : 'none';

  return (
    <Resizable
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
      size={{
        width,
        height,
      }}
      enable={{
        top: isResizable && resizableEdge.top,
        left: isResizable && resizableEdge.left,
        bottom: isResizable && resizableEdge.bottom,
        right: isResizable && resizableEdge.right,
      }}
      handleWrapperClass="resizeSidebarContentWrapper"
      onResizeStart={() => {
        setIsResizing(true);
        setResizeStartWidth(resizableWidth);
        setResizeStartHeight(resizableHeight);
      }}
      onResize={(...[, , , delta]) => setSidebarContentSize(delta.width, delta.height)}
      onResizeStop={() => {
        setIsResizing(false);
        setResizeStartWidth(0);
        setResizeStartHeight(0);
      }}
      style={{
        position: 'absolute',
        top,
        left,
        right,
        zIndex,
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        borderRadius: '16px',
        overflow: 'clip',
      }}
      handleStyles={{
        left: {
          width: '4px',
          height: '100vh',
          left: '-2px',
          cursor: 'ew-resize',
        },
        right: {
          width: '12px',
          height: '100vh',
          right: '-12px',
          cursor: 'ew-resize',
        },
      }}
    >
      <Styled.TabsWrapper>
         <Styled.TabButton 
             type="button"
             active={sidebarContentPanel === PANELS.CHAT} 
             onClick={(e) => {
                 e.stopPropagation();
                 e.preventDefault();
                 contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_IS_OPEN, value: true });
                 contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_PANEL, value: PANELS.CHAT });
                 contextDispatch({ type: ACTIONS.SET_ID_CHAT_OPEN, value: window.meetingClientSettings?.public?.chat?.public_group_id || 'public' });
             }}>
           <i className="tab-icon icon-ilmify-chat" aria-hidden="true" />
           Chat
         </Styled.TabButton>
         <Styled.TabButton 
             type="button"
             active={sidebarContentPanel === PANELS.USERLIST} 
             onClick={(e) => {
                 e.stopPropagation();
                 e.preventDefault();
                 contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_IS_OPEN, value: true });
                 contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_PANEL, value: PANELS.USERLIST });
             }}>
           <i className="tab-icon icon-ilmify-user" aria-hidden="true" />
           Users
           {userCount > 0 && <Styled.UserCountBadge>{userCount}</Styled.UserCountBadge>}
         </Styled.TabButton>
         <Styled.TabButton 
             type="button"
             active={sidebarContentPanel === PANELS.SHARED_NOTES} 
             onClick={(e) => {
                 e.stopPropagation();
                 e.preventDefault();
                 contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_IS_OPEN, value: true });
                 contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_PANEL, value: PANELS.SHARED_NOTES });
             }}>
           <i className="tab-icon icon-ilmify-file" aria-hidden="true" />
           Notes
         </Styled.TabButton>
         {amIModerator && (
           <Styled.TabButton 
               type="button"
               active={sidebarContentPanel === PANELS.POLL} 
               onClick={(e) => {
                   e.stopPropagation();
                   e.preventDefault();
                   contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_IS_OPEN, value: true });
                   contextDispatch({ type: ACTIONS.SET_SIDEBAR_CONTENT_PANEL, value: PANELS.POLL });
               }}>
             <i className="tab-icon icon-ilmify-polling" aria-hidden="true" />
             Poll
           </Styled.TabButton>
         )}
      </Styled.TabsWrapper>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {sidebarContentPanel === PANELS.CHAT
        && (
          <ErrorBoundary
            Fallback={FallbackView}
          >
            <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <ChatContainer width={width} />
            </div>
          </ErrorBoundary>
        )}
      {sidebarContentPanel === PANELS.USERLIST && (
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <UserListContainer />
        </div>
      )}
      {!isSharedNotesPinned && (
        <NotesContainer
          isToSharedNotesBeShow={sidebarContentPanel === PANELS.SHARED_NOTES}
        />
      )}
      {sidebarContentPanel === PANELS.BREAKOUT && <BreakoutRoomContainer />}
      {sidebarContentPanel === PANELS.TIMER && <TimerContainer isModerator={amIModerator} />}
      {sidebarContentPanel === PANELS.WAITING_USERS && <GuestUsersManagementPanel />}
      {sidebarContentPanel === PANELS.POLL && (
        <Styled.Poll
          style={{ minWidth, top: '0', display: pollDisplay }}
          id="pollPanel"
        >
          <PollContainer
            smallSidebar={smallSidebar}
            amIPresenter={amIPresenter}
            currentSlideId={currentSlideId}
          />
        </Styled.Poll>
      )}
      {sidebarContentPanel.includes(PANELS.GENERIC_CONTENT_SIDEKICK) && (
        <GenericContentSidekickContainer
          genericSidekickContentId={sidebarContentPanel}
        />
      )}
      </div>
    </Resizable>
  );
};

SidebarContent.propTypes = propTypes;
export default SidebarContent;
