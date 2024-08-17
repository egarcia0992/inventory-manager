import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Products() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/products/all-products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) =>
                console.error(
                    "There was an error fetching the products!",
                    error
                )
            );
    }, []);

    return (
        <>
            <div>
                <Button
                    onClick={() => navigate("/insert-p")}
                    style={{ margin: "20px" }}
                >
                    Insert Product
                </Button>
                <Button
                    onClick={() => navigate("/find-p")}
                    style={{ margin: "20px" }}
                >
                    Find Product
                </Button>
            </div>
            <div style={{ display: "flex" }} className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Product ID</th>
                            <th scope="col">All Products</th>
                            <th scope="col">Inventory</th>
                            <th scope="col">Price</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((p, index) => (
                            <tr key={index}>
                                <td>{p.productId}</td>
                                <td>{p.productName}</td>
                                <td>{p.productCount}</td>
                                <td>{p.productPrice}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/update-p", {
                                                state: { p },
                                            })
                                        }
                                    >
                                        Update
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/delete-p", {
                                                state: { p },
                                            })
                                        }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Products;
