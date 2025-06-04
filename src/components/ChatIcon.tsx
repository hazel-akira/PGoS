import React, { useState } from 'react';
import { X } from 'lucide-react';
import ChatContainer from './ChatContainer';

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
    
        <div className=" text-gray-800 px-4 py-2 rounded-xl shadow-lg max-w-[200px] animate-bounce">
          <p className="text-sm">Hello, I'm PGoS AI assistant. Need help?</p> 
        </div>
      
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full shadow-lg bg-gray-100 transition-colors animate-bounce dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img 
            src="/images/chatbot.png" 
            alt="Chat" 
            className="w-20 h-20 dark:invert dark:brightness-200" 
          />
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="bg-white rounded-lg shadow-xl w-[350px] h-[500px]">
            <ChatContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIcon; 