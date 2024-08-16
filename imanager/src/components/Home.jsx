import React from "react";
import { Table } from "react-bootstrap";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <div style={{ display: "flex" }} className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Customer ID</th>
                            <th scope="col">All Customers</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    {/* <tbody>
                        {customers.map((c, index) => (
                            <tr key={index}>
                                <td>{c.customerId}</td>
                                <td>{c.customerName}</td>
                                <td>{c.customerEmail}</td>
                                <td>{formatDateTime(c.createdAt)}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/products")
                                        }
                                    >
                                        Update
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/customers")
                                        }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </Table>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Customer ID</th>
                            <th scope="col">All Customers</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    {/* <tbody>
                        {customers.map((c, index) => (
                            <tr key={index}>
                                <td>{c.customerId}</td>
                                <td>{c.customerName}</td>
                                <td>{c.customerEmail}</td>
                                <td>{formatDateTime(c.createdAt)}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/products")
                                        }
                                    >
                                        Update
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/customers")
                                        }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </Table>
            </div>
        </>
    );
}

export default Home;
