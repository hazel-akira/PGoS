
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
        "py-3 px-4 rounded-2xl max-w-[80%] animate-fade-in shadow-sm",
        isUser 
          ? "bg-indigo-100 ml-auto rounded-tr-none text-gray-800 border border-indigo-200" 
          : "bg-white mr-auto rounded-tl-none text-gray-800 border border-gray-200"
      )}
    >
      <p className="text-sm md:text-base">{message}</p>
    </div>
  );
};

export default ChatMessage;
