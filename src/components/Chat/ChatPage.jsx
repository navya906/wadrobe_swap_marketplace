import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ChatPage.css';

const ChatPage = () => {
  const { userId } = useParams(); // simulate chat with a specific user
  const [messages, setMessages] = useState([
    { from: "you", text: "Hey! Loved your denim shirt." },
    { from: "them", text: "Thanks! I like your red jacket too." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { from: "you", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">💬 Chat with {userId}</h2>
      <div className="border p-4 rounded h-80 overflow-y-auto bg-gray-50 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.from === "you" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-1 rounded ${
                msg.from === "you" ? "bg-blue-200" : "bg-green-200"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
