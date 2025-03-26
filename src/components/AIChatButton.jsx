import React from "react";

const AIChatButton = () => {
  const handleClick = () => {
    window.location.href = "https://chatoomate.vercel.app/";
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] cursor-pointer"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999, 
        pointerEvents: 'auto'
      }}
    >
      <div className="relative group">
        {/* Main button */}
        <div 
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          
          <span className="font-medium">Chat with My AI</span>
        </div>
        
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{
          background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
          animationDuration: '2s'
        }}></span>
      </div>
    </div>
  );
};

export default AIChatButton;