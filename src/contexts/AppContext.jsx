import { createContext, useState, useContext } from "react"

// Creating a new context for app data and storing it in the AppDataContext variable
const AppDataContext = createContext()

// Defining a context provider component named 'AppDataProvider'
export const AppDataProvider = ({ children }) => {
  // Using the useState hook to initialize and manage the 'count', 'name', and 'quotes' states
  const [count, setCount] = useState(0)
  const [name, setName] = useState("I am Ron Burgundy?")
  const [quotes, setQuotes] = useState(["Imagination is more important than knowledge. - Albert Einstein", "The only way to do great work is to love what you do. - Steve Jobs", "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb", "You are never too old to set another goal or to dream a new dream. - C.S. Lewis", "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", "It does not matter how slowly you go as long as you do not stop. - Confucius", "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt", "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.", "The secret of getting ahead is getting started. - Mark Twain", "Don't watch the clock; do what it does. Keep going. - Sam Levenson", "You are never too old to set another goal or to dream a new dream. - C.S. Lewis", "I am kind of a Big deal - Ron Burgundy", "60% of the time it works 100% of the time - Brian Fantana", "I love lamp - Brick Tamland", "I'm in a glass case of emotion - Ron Burgundy", "I'm kind of a big deal - Ron Burgundy"])

  // Defining a function to increment the 'count' state by 1
  const addOne = () => setCount((count) => count + 1)

  // Defining a function to update the 'name' state based on user input
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:")
    if (newName) {
      setName(newName)
    }
  }

  // Defining static content data for the app
const appContent = {
  heading: "My App Title",
  subHeading: "I love coding in react",
}

  // Returning the provider component to make the app data available to child components
  return (
    <AppDataContext.Provider
      value={{ count, name, quotes, addOne, handleNameUpdate, appContent }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

// Defining a custom hook named 'useAppData' to provide an easier way to access the AppDataContext
export const useAppData = () => useContext(AppDataContext)