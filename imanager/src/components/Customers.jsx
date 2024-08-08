import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Customers() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/customers/all-customers")
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((error) =>
                console.error(
                    "There was an error fetching the customers!",
                    error
                )
            );
    }, []);

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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Customer ID</th>
                            <th scope="col">All Customers</th>
                            <th scope="col">Email</th>
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
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate("/update-c", {
                                                state: { c },
                                            })
                                        }
                                    >
                                        {" "}
                                        Update{" "}
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
                </table>
            </div>
        </>
    );
}

export default Customers;
