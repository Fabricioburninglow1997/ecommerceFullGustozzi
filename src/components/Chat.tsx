import React, { useState } from 'react';
import { sendChatMessage } from '../api/chat';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await sendChatMessage(message);
      setResponse(result.message);
      setMessage('');
    } catch (error) {
      console.error('Error in chat:', error);
      setResponse('Error al enviar el mensaje');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Escribe tu mensaje"
        />
        <button type="submit" className="bg-purple-600 text-white p-2 rounded">
          Enviar
        </button>
      </form>
      {response && <div className="mt-4 p-2 bg-gray-100 rounded">{response}</div>}
    </div>
  );
}

