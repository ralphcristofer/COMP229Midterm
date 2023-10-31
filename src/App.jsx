// Importing the required CSS styles for the application
import "./styles.css"

// Importing the NewProductForm component from the local file
import { NewProductForm } from "./NewProductForm";

// Defining the main App component
export default function App() {

  // The component returns a fragment containing a heading and the NewProductForm component
  return (
    <>
      <h2>New Product</h2>
      
      {/* Rendering the NewProductForm component */}
      <NewProductForm />
    </>
  )
}
