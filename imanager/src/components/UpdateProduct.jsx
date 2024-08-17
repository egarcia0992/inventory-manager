import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function UpdateProduct() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    
    const navigate = useNavigate();
    const location = useLocation();
    const prod = location.state.p;
    const [productId, setProductId] = useState(prod.productId);
    const [productName, setProductName] = useState(prod.productName);
    const [productPrice, setProductPrice] = useState(prod.productPrice);
    const [productCount, setProductCount] = useState(prod.productCount);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${BASE_URL}/products/${prod.productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId, productName, productPrice, productCount }),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Product updated successfully!");
                    navigate("/products");
                } else {
                    alert("Failed to update product.");
                }
            })
            .catch((error) => console.error("Error updating product:", error));
    };

    return (
        <>
            <h1>Update Product</h1>
            <h2>{prod.productName}</h2>

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
                        <label htmlFor="ProductPrice">Price</label>
                        <input
                            type="number"
                            id="ProductPrice"
                            name="productPrice"
                            placeholder="Enter Price"
                            className="form-control"
                            aria-describedby="productPrice"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ProductCount">Inventory</label>
                        <input
                            type="number"
                            id="ProductCount"
                            name="productCount"
                            placeholder="Enter Count"
                            className="form-control"
                            aria-describedby="productCount"
                            value={productCount}
                            onChange={(e) => setProductCount(e.target.value)}
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

export default UpdateProduct;
