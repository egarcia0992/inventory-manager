import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

function FindProduct() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [productName, setProductName] = useState(``);
    const [products, setProducts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}/products/find-product/${productName}`)
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
            <div
                style={{
                    justifyContent: "center",
                    width: "50%",
                    marginTop: "4vh",
                }}
                className="container"
            >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Inventory</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((p, index) => (
                            <tr key={index}>
                                <td>{p.productId}</td>
                                <td>{p.productName}</td>
                                <td>{p.productCount}</td>
                                <td>{p.productPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default FindProduct;
