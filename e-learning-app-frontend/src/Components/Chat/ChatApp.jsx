import React from 'react'
import { ChatEngine, ChatFeed } from 'react-chat-engine'
const projectID = '84cfb883-e289-4f6d-80de-01b42291de25';
function ChattApp() {
  return (
        <>
            <ChatEngine
      height="100vh"
      projectID="84cfb883-e289-4f6d-80de-01b42291de25"
      userName="javascriptmastery"
      userSecret="Subi@0604"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
        </>
  )
}

export default ChattApp