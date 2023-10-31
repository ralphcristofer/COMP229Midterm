import { useState } from "react";

export function NewProductForm() {

    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        category: "Men",
        quantity: "",
        price: ""
    });

    function handleSubmit(e) {
        e.preventDefault();

        console.log(JSON.stringify(newProduct));

        setNewProduct({
            name: "",
            description: "",
            category: "Men",
            quantity: "",
            price: ""
        })

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    }

    function handleReset(e) {
        setNewProduct({
            name: "",
            description: "",
            category: "Men",
            quantity: "",
            price: "",
        })
    }

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
            <input type="text" id="quantity" name="quantity" value={newProduct.quantity} onChange={handleChange} required />

            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" value={newProduct.price} onChange={handleChange} required />

            <button type="submit" id="submit" onSubmit={handleSubmit}>Submit</button>

            <button type="reset" id="cancel" onClick={handleReset}>Cancel</button>

        </form>
    )
}