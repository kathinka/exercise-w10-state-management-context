// Importing necessary hooks and context
import { useAppData } from "../contexts/AppContext"

// Defining a functional component named 'Home'
export const Home = () => {
  const { count, name, addOne, handleNameUpdate, appContent } = useAppData()

  // Logging the extracted values to the console for debugging purposes
  console.log({ count, name, addOne, handleNameUpdate, appContent })

  // Rendering the component's JSX
  return (
    <div>
      <h1>{appContent.heading}</h1>
      <p>{appContent.subHeading}</p>
      <p>{appContent.text}</p>
			<h2>{name}</h2>
      <button onClick={addOne}>Count: {count}</button>
      <button onClick={handleNameUpdate}>Name: {name}</button>
    </div>
  )
}