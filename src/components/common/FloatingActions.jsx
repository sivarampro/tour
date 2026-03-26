import { MessageCircle, Bot } from 'lucide-react';
import './FloatingActions.css';

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      <button className="float-btn ai-btn hover-glow" title="AI Assistant">
        <Bot size={24} />
      </button>
      <button className="float-btn whatsapp-btn hover-glow" title="Chat on WhatsApp">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingActions;
