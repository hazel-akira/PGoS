
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';

type Message = {
  text: string;
  isUser: boolean;
};

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setIsLoading(true);
    setInputValue('');
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponses = [
        "I'm here to help! What would you like to know?",
        "That's an interesting question. Let me think about that.",
        "I'm a simple demo bot right now, but I'm learning!",
        "I can provide information on various topics. Just ask!",
        "Thank you for chatting with me today!"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[500px] md:h-[600px] w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-indigo-600 p-4">
        <h2 className="text-white font-medium">Chat Assistant</h2>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            <ChatMessage 
              message={message.text} 
              isUser={message.isUser} 
            />
          </div>
        ))}
        {isLoading && (
          <div className="flex space-x-2 items-center mb-4">
            <div className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse"></div>
            <div className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse delay-150"></div>
            <div className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse delay-300"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200 flex items-center">
        <Input
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 mr-2"
        />
        <Button 
          onClick={handleSendMessage}
          disabled={isLoading || inputValue.trim() === ''} 
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatContainer;
