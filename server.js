import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";



import { createNote, getNotes, deleteNote } from "./controllers/NoteController.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

// MongoDB Connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/note", getNotes);       // ✔ fixed
app.post("/api/note", createNote);    // ✔ correct
app.delete("/api/note/:id", deleteNote);  // ✔ fixed

// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));
