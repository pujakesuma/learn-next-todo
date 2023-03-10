import { Todo } from "../utils/types"
import Link from "next/link"

// Define the components props
interface IndexProps {
  todos: Array<Todo>
}

// define the page component
export default function Index(props: IndexProps) {
  const { todos } = props

  return (
    <div>
      <div>
        <h1>What&apos;s up, Wan!</h1>
        <h2>Click On Todo to see it individually</h2>
        <Link href="/todos/create"><button>Create a New Todo</button></Link>
        {/* MAPPING OVER THE TODOS */}
        {todos.map(todo => (
          <div key={todo._id}>
            <Link href={`/todos/${todo._id}`}>
              <h3 style={{ cursor: "pointer" }}>
                {todo.item} - {todo.completed ? "completed" : "incomplete"}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

// GET PROPS FOR SERVER SIDE RENDERING
export async function getServerSideProps() {
  // get todo data from API
  const res = await fetch(process.env.API_URL as string)
  const todos = await res.json()

  // return props
  return {
    props: { todos },
  }
}

