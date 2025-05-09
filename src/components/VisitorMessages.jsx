import React, { useState, useEffect } from "react";

const VisitorMessages = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedMessages =
      JSON.parse(localStorage.getItem("visitorMessages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    const newMsg = {
      name,
      email,
      message,
      time: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
      read: false,
    };

    const updatedMessages = [newMsg, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem("visitorMessages", JSON.stringify(updatedMessages));

    setSuccess(true);
    setError("");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSuccess(false), 3000);
  };

  const deleteMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem("visitorMessages", JSON.stringify(updated));
    if (updated.length === 0) {
      setShowMessages(false); // hide message section if none left
    }
  };

  const markAsReadAndShow = () => {
    const updated = messages.map((msg) => ({ ...msg, read: true }));
    setMessages(updated);
    localStorage.setItem("visitorMessages", JSON.stringify(updated));
    setShowMessages(true);
  };

  const hasUnread = messages.some((msg) => !msg.read);

  return (
    <section
      id="visitor-messages"
      className="py-20 bg-gray-900/97 text-gray-300 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Leave a Message
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mb-10 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-gray-200 outline-none focus:ring-2 ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-gray-200 outline-none focus:ring-2 ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 text-gray-200 outline-none focus:ring-2 ring-blue-500"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded text-white font-semibold transition duration-300"
            >
              Submit
            </button>
          </div>
          {success && (
            <p className="text-green-400 text-center mt-2">
              Message saved successfully!
            </p>
          )}
          {error && <p className="text-red-400 text-center">{error}</p>}
        </form>

        {/* Conditionally show "New message" box */}
        {messages.length > 0 && !showMessages && (
          <div
            className="bg-blue-800 text-white text-center py-3 px-4 rounded-md shadow-md cursor-pointer hover:bg-blue-700 transition"
            onClick={markAsReadAndShow}
            data-aos="fade-up"
          >
            {hasUnread
              ? "💬 New message received. Click to view."
              : "📨 View Messages"}
          </div>
        )}

        {/* Show actual messages */}
        {showMessages && messages.length > 0 && (
          <div
            className="space-y-4 mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xl font-semibold">All Messages</h4>
              <button
                onClick={() => setShowMessages(false)}
                className="text-sm text-red-400 hover:underline"
              >
                Hide Messages
              </button>
            </div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-4 rounded-md shadow-md relative"
              >
                <div className="flex justify-between items-center">
                  <p className="font-bold text-pink-300">{msg.name}</p>
                  <p className="text-sm text-gray-400">{msg.time}</p>
                </div>
                <p className="text-sm text-blue-300">{msg.email}</p>
                <p className="mt-2 text-base text-gray-200">{msg.message}</p>
                <button
                  onClick={() => deleteMessage(idx)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VisitorMessages;
