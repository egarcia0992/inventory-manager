import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function Home() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/customers/newest-customers`)
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((error) =>
                console.error(
                    "There was an error fetching the customers!",
                    error
                )
            );
    }, []);
    useEffect(() => {
        fetch(`${BASE_URL}/products/low-count-products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) =>
                console.error(
                    "There was an error fetching the products!",
                    error
                )
            );
    }, []);

    const formatDateTime = (dateTimeString) => {
        const options = {
            // year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            // second: "2-digit", //only apply for extra precision
        };
        const date = new Date(dateTimeString);
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <>
            <h1>Home</h1>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <h2>Newest Customers</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date Created</th>
                                </tr>
                            </thead>

                            <tbody>
                                {customers.map((c, index) => (
                                    <tr key={index}>
                                        <td>{c.customerId}</td>
                                        <td>{c.customerName}</td>
                                        <td>{c.customerEmail}</td>
                                        <td>{formatDateTime(c.createdAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4">
                        <h2>Lowest Inventory Products</h2>
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
                </div>
            </div>
        </>
    );
}

export default Home;
