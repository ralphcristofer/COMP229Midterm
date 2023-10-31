// Importing the useState hook from React
import { useState } from "react";

// Defining the NewProductForm component
export function NewProductForm() {

    // Using the useState hook to manage the state of the new product form
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        category: "Men",
        quantity: "",
        price: ""
    });

    // Using the useState hook to manage the state of form submission
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Using the useState hook to manage the state of alert visibility
    const [showAlert, setShowAlert] = useState(false);

    // Defining a function to handle form submission
    function handleSubmit(e) {
        e.preventDefault();

        // Logging the new product data to the console
        console.log(JSON.stringify(newProduct));

        // Resetting the new product data after form submission
        setNewProduct({
            name: "",
            description: "",
            category: "Men",
            quantity: "",
            price: ""
        });

        // Updating the state to reflect that the form has been submitted
        setIsSubmitted(true);
        
        // Showing an alert after form submission
        setShowAlert(true);

        // Hiding the alert after 2.5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setShowAlert(false);
        }, 2500);

    }

    // Defining a function to handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Updating the new product data when an input changes
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    }

    // Defining a function to handle form reset
    function handleReset(e) {
        
        // Resetting the new product data when the form is reset
        setNewProduct({
            name: "",
            description: "",
            category: "Men",
            quantity: "",
            price: "",
        })

        // Updating the state to reflect that the form has not been submitted
        setIsSubmitted(false);
    }

    // The component returns a form with various inputs and buttons for submitting and resetting the form
    return (
        <form className="new-product" onSubmit={handleSubmit}>
            
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={newProduct.name} onChange={handleChange} required />

            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={newProduct.description} onChange={handleChange} required />

            <label htmlFor="category" className="lblCategory">Category</label>
            <select name="category" id="category" value={newProduct.category} onChange={handleChange}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Teens">Teens</option>
            </select>

            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" value={newProduct.quantity} onChange={handleChange} required />

            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={newProduct.price} onChange={handleChange} required />

            <button type="submit" id="submit" onSubmit={handleSubmit}>Submit</button>

            <button type="reset" id="cancel" onClick={handleReset}>Cancel</button>

            {showAlert &&
                <div className="alert">
                    Form successfully submitted!
                </div>
            }

        </form>
    )
}
