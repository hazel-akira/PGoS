
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
    { text: "Hi there! Welcome to PGOS School's virtual assistant. How can I help you today?", isUser: false }
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
    
    // School-specific bot responses
    setTimeout(() => {
      const botResponses = [
        "Thank you for your question! Our admissions office is open Monday through Friday from 9 AM to 3 PM.",
        "PGOS School offers a comprehensive curriculum including arts, sciences, and athletics.",
        "Our school year begins in September and ends in June, with breaks in December and April.",
        "We offer various extracurricular activities including sports, robotics, debate, and arts programs.",
        "For more detailed information, you can visit our About page or contact our administrative office.",
        "Parents can access student records through our secure parent portal. Login credentials are provided at the beginning of each school year.",
        "School tours are available by appointment. Please contact our admissions office to schedule a visit."
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
    <div id="chatSection" className="flex flex-col h-[500px] md:h-[600px] w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-indigo-600 p-4">
        <h2 className="text-white font-medium">PGOS School Assistant</h2>
        <p className="text-white/80 text-sm">Ask about admissions, programs, or schedules</p>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
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
      
      <div className="p-4 border-t border-gray-200 flex items-center bg-white">
        <Input
          placeholder="Ask a question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 mr-2"
        />
        <Button 
          onClick={handleSendMessage}
          disabled={isLoading || inputValue.trim() === ''} 
          size="icon"
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatContainer;
