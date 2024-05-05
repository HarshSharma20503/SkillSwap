import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import { app } from "./app.js";
import { Server } from "socket.io";

dotenv.config();

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    console.log("Database connected");
    const server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

    const io = new Server(server, {
      pingTimeout: 60000,
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      console.log("Connected to socket");

      socket.on("setup", (userData) => {
        console.log("Connected to socket in setup: ", userData.username);
        socket.join(userData._id);
        socket.emit("connected");
      });

      socket.on("join chat", (chat) => {
        console.log("Joining chat: ", chat);
        socket.join(chat);
        console.log("Joined chat: ", chat);
      });

      socket.on("new message", (newMessage) => {
        console.log("New message: ", newMessage);
        var chat = newMessage.chatId;
        if (!chat.users) return console.log("Chat.users not defined");
        chat.users.forEach((user) => {
          if (user._id === newMessage.sender._id) return;
          io.to(user._id).emit("new message", newMessage);
        });
      });

      socket.on("typing", (room) => {
        console.log("Typing in room: ", room);
        socket.in(room).emit("typing");
      });

      socket.on("stop typing", (room) => {
        console.log("Stop typing in room: ", room);
        socket.in(room).emit("stop typing");
      });

      socket.off("setup", () => {
        console.log("Disconnected from socket");
        console.log("Disconnected from socket");
        socket.leave(userData._id);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
