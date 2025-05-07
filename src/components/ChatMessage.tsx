
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
          ? "bg-indigo-100 ml-auto rounded-tr-none text-gray-800" 
          : "bg-indigo-600 mr-auto rounded-tl-none text-white"
      )}
    >
      <p className="text-sm md:text-base">{message}</p>
    </div>
  );
};

export default ChatMessage;
