import { connectToDatabase } from "../../../lib/database";
import Message from "../../../lib/database/models/Message";

export const POST = async (req: Request) => {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Get data from the request body
    const { content } = await req.json();

    // Create a new message document
    const newMessage = new Message({
      content: content,
    });

    // Save to the database
    await newMessage.save();

    return new Response("Message added successfully", { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return new Response("Error adding message", { status: 500 });
  }
};
