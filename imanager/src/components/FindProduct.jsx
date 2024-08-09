import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FindProduct() {
    const [productName, setProductName] = useState(``);
    const [products, setProducts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/products/find-product/${productName}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("No products found");
                }
            })
            .then(async (data) => {
                setProducts(await data);
            })
            .catch((error) => {
                setProducts([]);
            });
    };

    return (
        <>
            <h1>Find Product By Name</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <form style={{ width: "30%" }}>
                    <div className="form-group">
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
            <div style={{ justifyContent: "center" }}>
                {products.map((p, index) => (
                    <ul
                        style={{ listStyleType: "none", margin: 0, padding: 0 }}
                        key={index}
                    >
                        <li>ID: {p.productId}</li>
                        <li>Name: {p.productName}</li>
                        <li>Inventory: {p.productCount}</li>
                        <li>Price: {p.productPrice}</li>
                    </ul>
                ))}
            </div>
        </>
    );
}

export default FindProduct;
