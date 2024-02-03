import { Schema, model, models, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  imdbID: string;
  Year?: string;
  Poster?: string;
  Type: string;
  bookmarked: boolean;
}

const FilmsSchema = new Schema({
  title: { type: String, required: true },
  imdbID: { type: String, required: true, unique: true },
  Year: { type: String },
  Poster: { type: String },
  Type: { type: String },
  bookmarked: { type: Boolean, default: true },
});

const Film = models.User || model("Film", FilmsSchema);

export default Film;
