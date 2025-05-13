import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatContainer from './ChatContainer';

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {!isOpen && (
        <div className=" text-gray-800 px-4 py-2 rounded-lg shadow-lg max-w-[200px] animate-bounce">
          {/* <p className="text-sm">Hello, I'm PGoS AI assistant. Need help?</p> */}
        </div>
      )}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors animate-bounce"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="bg-white rounded-lg shadow-xl w-[350px] h-[500px] overflow-hidden">
            <ChatContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIcon; 