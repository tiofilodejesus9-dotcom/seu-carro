
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';
import { Message } from '../types';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Olá! Sou seu Concierge de Experiências. Qual máquina você sonha em pilotar hoje pelas ruas de Luanda?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getGeminiResponse(newMessages);
    setMessages([...newMessages, { role: 'model', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,0,0,0.4)] hover:scale-110 transition-transform animate-bounce hover:animate-none"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-2 -right-2 bg-white text-red-600 text-[10px] font-bold px-2 py-1 rounded-full border border-red-600 uppercase">AI Expert</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-28 right-8 z-[100] w-[90vw] md:w-[400px] h-[500px] bg-black border border-white/10 rounded-3xl flex flex-col shadow-2xl transition-all duration-500 overflow-hidden ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'}`}>
        <div className="p-5 bg-red-600 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">IA Concierge</p>
              <p className="text-[10px] opacity-80 uppercase tracking-widest">Experiência Automóvel</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl flex gap-2 ${m.role === 'user' ? 'bg-red-600 text-white' : 'bg-white/10 text-white/90'}`}>
                {m.role === 'model' && <Bot size={16} className="shrink-0 mt-1" />}
                <p className="text-sm leading-relaxed">{m.content}</p>
                {m.role === 'user' && <User size={16} className="shrink-0 mt-1" />}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-2xl flex gap-2">
                <Bot size={16} className="animate-spin" />
                <p className="text-sm italic">Pensando na melhor experiência...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="flex gap-2 bg-white/5 rounded-full p-2 border border-white/10">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Qual sua dúvida sobre nossa frota?"
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatAssistant;
