import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Customers() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/customers/all-customers`)
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((error) =>
                console.error(
                    "There was an error fetching the customers!",
                    error
                )
            );
    }, []);

    const formatDateTime = (dateTimeString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit", //only apply for extra precision
        };
        const date = new Date(dateTimeString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <>
            <div>
                <Button
                    onClick={() => navigate("/insert-c")}
                    style={{ margin: "20px" }}
                >
                    Insert Customer
                </Button>
                <Button
                    onClick={() => navigate("/find-c")}
                    style={{ margin: "20px" }}
                >
                    Find Customer
                </Button>
            </div>
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

                    <tbody>
                        {customers.map((c, index) => (
                            <tr key={index}>
                                <td>{c.customerId}</td>
                                <td>{c.customerName}</td>
                                <td>{c.customerEmail}</td>
                                <td>{formatDateTime(c.createdAt)}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/update-c", {
                                                state: { c },
                                            })
                                        }
                                    >
                                        Update
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/delete-c", {
                                                state: { c },
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

export default Customers;
