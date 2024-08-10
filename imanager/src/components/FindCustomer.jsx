import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FindCustomer() {
    const [customerName, setCustomerName] = useState(``);
    const [customers, setCustomers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/customers/find-customer/${customerName}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("No customers found");
                }
            })
            .then(async (data) => {
                setCustomers(await data);
            })
            .catch((error) => {
                setCustomers([]);
            });
    };

    const formatDateTime = (dateTimeString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            // second: "2-digit", //only apply for extra precision
        };
        const date = new Date(dateTimeString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <>
            <h1>Find Customer By Name</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <form style={{ width: "30%" }}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="CustomerName"
                            name="customerName"
                            placeholder="Enter Name"
                            className="form-control"
                            aria-describedby="customerName"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
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
                {customers.map((c, index) => (
                    <ul
                        style={{ listStyleType: "none", margin: 0, padding: 0 }}
                        key={index}
                    >
                        <li>ID: {c.customerId}</li>
                        <li>Name: {c.customerName}</li>
                        <li>Email: {c.customerEmail}</li>
                        <li>Created On: {formatDateTime(c.createdAt)}</li>
                    </ul>
                ))}
            </div>
        </>
    );
}

export default FindCustomer;
