import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import ChatContainer from './ChatContainer';
import { useMenu } from './MenuContext';


// interface ChatIconProps {
//   isMenuOpen: boolean;
// }

const ChatIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMenuOpen } = useMenu();

  // Don't show chat icon when menu is open
  if (isMenuOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* {!isOpen && (
        <div className="text-gray-800 px-4 py-2 rounded-lg shadow-lg max-w-[200px] animate-bounce">
          <p className="text-sm">Hello, I'm PGoS AI assistant. Need help?</p> 
        </div>
      )}*/}
      
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full shadow-lg bg-blue-500 transition-colors animate-bounce dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <MessageCircle className="w-10 h-10 text-[#f0eff3]" />
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