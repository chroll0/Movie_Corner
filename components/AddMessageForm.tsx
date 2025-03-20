"use client"; // For Next.js 13+ client components

import { useState } from "react";

const AddMessageForm = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }), // Send data to the backend
      });

      if (!res.ok) {
        throw new Error("Failed to add message");
      }

      alert("Message added successfully!");
      setContent(""); // Clear the input
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your message"
        rows={4}
        cols={50}
      />
      <button type="submit">Add Message</button>
    </form>
  );
};

export default AddMessageForm;
