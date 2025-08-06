import React, { useState, useRef, useEffect } from 'react';
import { X, Send, BotIcon } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to our support chat. How can I help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickReplies = [
    'SEO Services',
    'Social Media Marketing',
    'Contact Support'
  ];

  const botResponses: { [key: string]: string } = {
  'social media marketing': "We specialize in social media strategies across platforms like Facebook, Instagram, and TikTok. Are you looking to boost brand visibility, run ads, or manage content?",
  'website development': "We build modern, responsive websites tailored to your needs. Would you like to build a business site, portfolio, or e-commerce store?",
  'mobile app development': "We develop Android and iOS apps. Let us know what your app idea is, and we'll guide you through the process!",
  'seo services': "We offer on-page and off-page SEO to help your website rank better. Are you looking for technical SEO, content strategy, or backlinking?",
  'graphic design': "Our creative team can design logos, branding kits, social media posts, and more. What do you need designed?",
  'contact support': "You can reach us via email, phone, or our contact form. You can call us on +977-986-2282235 or email us at prasadinfotechinquiry@gmail.com.",
  'default': "Hi! 👋 Welcome to Prasad Info Tech. How can we assist you today? Try asking about our services like 'SEO', 'Website Development', or 'Design'."
};


  const sendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      time: currentTime
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickReplies(false);

    // Show typing indicator and send bot response
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        sendBotResponse(messageText);
      }, 1500 + Math.random() * 1000);
    }, 500);
  };

  const sendBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    let response = botResponses.default;
    
    for (let key in botResponses) {
      if (lowerMessage.includes(key)) {
        response = botResponses[key];
        break;
      }
    }

    const botMessage: Message = {
      id: Date.now() + 1,
      text: response,
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    // Auto-resize textarea
    const target = e.target;
    target.style.height = 'auto';
    target.style.height = Math.min(target.scrollHeight, 100) + 'px';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm h-[screen] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 animate-in slide-in-from-bottom-5 duration-500">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
           <BotIcon/>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Client Support</h3>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto h-[calc(600px-140px-80px)] space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex animate-in slide-in-from-bottom-2 duration-300 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className={`max-w-[75%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  message.sender === 'bot'
                    ? 'bg-gray-100 text-gray-800 rounded-bl-md'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md'
                }`}
              >
                {message.text}
              </div>
              <div
                className={`text-xs text-gray-500 mt-1 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {message.time}
              </div>
            </div>
          </div>
        ))}

        {/* Quick Replies */}
        {showQuickReplies && messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1.5 rounded-2xl text-xs transition-all hover:-translate-y-0.5"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md max-w-[75%]">
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-5 bg-gray-50/80 backdrop-blur-sm border-t border-gray-100">
        <div className="flex gap-3 items-end">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 border-2 border-gray-200 bg-white rounded-2xl px-4 py-3 text-sm resize-none outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all max-h-[100px] min-h-[44px]"
            rows={1}
          />
          <button
            onClick={() => sendMessage()}
            className="w-11 h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
