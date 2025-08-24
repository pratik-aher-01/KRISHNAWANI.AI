// pages/index.js
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
    // Dummy AI response for now
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "This is a divine response ✨" },
      ]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      
      {/* Top Bar */}
      <div className="p-4 text-center text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 shadow-lg">
        KRISHNAVANI.AI
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-2xl max-w-[80%] ${
              msg.type === "user"
                ? "ml-auto bg-white text-black"
                : "mr-auto bg-blue-600 text-white shadow-glow"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-white flex items-center space-x-2 shadow-inner">
        <input
          className="flex-1 p-2 rounded-lg border-2 border-blue-500 outline-none text-black"
          placeholder="Type your doubt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition"
        >
          ➤
        </button>
      </div>
    </div>
  );
            }
