
import React from 'react';
import { cn } from '@/lib/utils';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div
      className={cn(
        "py-2 px-3 rounded-lg max-w-[80%] animate-fade-in",
        isUser 
          ? "bg-chat-user ml-auto rounded-tr-none" 
          : "bg-chat-bot mr-auto rounded-tl-none"
      )}
    >
      <p className="text-sm md:text-base">{message}</p>
    </div>
  );
};

export default ChatMessage;
