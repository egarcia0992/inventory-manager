import React, { useState } from "react";
import { Button } from "react-bootstrap";

function InsertProduct() {
    const [productName, setProductName] = useState("");
    const [productCount, setProductCount] = useState("0");
    const [productPrice, setProductPrice] = useState("0.00");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/products/add-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productName, productCount, productPrice }),
        })
            .then(response => {
                if (response.ok) {
                    alert("Product created successfully!");
                    setProductName("");
                    setProductCount("0");
                    setProductPrice("0.00");
                } else {
                    alert("Failed to create product.");
                }
            })
            .catch(error => console.error("Error creating product:", error));
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9.]/g, "");
        const [integerPart, decimalPart] = numericValue.split(".");
        const formattedDecimalPart = (decimalPart || "").slice(0, 2);
        // Combine integer and decimal parts
        const formattedValue = formattedDecimalPart ? 
            `${integerPart}.${formattedDecimalPart}` : 
            integerPart;
        setProductPrice(formattedValue || "0.00");
    };

    return (
        <>
            <h1>Create New Product</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <form style={{ width: "30%" }}>
                    <div className="form-group">
                        <label htmlFor="ProductName">Name</label>
                        <input
                            type="text"
                            id="ProductName"
                            name="productName"
                            placeholder="Enter Name"
                            className="form-control"
                            aria-describedby="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ProductCount">Count</label>
                        <input
                            type="number"
                            step="1"
                            min="0"
                            id="ProductCount"
                            name="productCount"
                            placeholder="Enter Count"
                            className="form-control"
                            aria-describedby="productCount"
                            value={productCount}
                            onChange={(e) => setProductCount(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ProductPrice">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            id="ProductPrice"
                            name="productPrice"
                            placeholder="Enter Price"
                            className="form-control"
                            aria-describedby="productPrice"
                            value={productPrice}
                            onChange={handlePriceChange}
                        />
                    </div>
                    <br />
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary btn-lg"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}

export default InsertProduct;
