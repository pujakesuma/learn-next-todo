import mongoose, {Model} from "mongoose";

const {DATABASE_URL} = process.env

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log('Mongoose Connection Established')

  // OUR TODO SCHEMA
  const TodoSchema = new mongoose.Schema({
    item: String,
    completed: Boolean
  })

  // OUT TODO MODEL
  const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)

  return { conn, Todo }
}