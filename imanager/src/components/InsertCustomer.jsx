import React, { useState } from "react";
import { Button } from "react-bootstrap";

function InsertCustomer() {
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <h1>Create New Customer</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <form style={{ width: "30%" }}>
                    <div className="form-group">
                        <label htmlFor="CustomerName">Name</label>
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
                    <div className="form-group">
                        <label htmlFor="CustomerEmail">Email</label>
                        <input
                            type="text"
                            id="CustomerEmail"
                            name="customerEmail"
                            placeholder="Enter Email"
                            className="form-control"
                            aria-describedby="customerEmail"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
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

export default InsertCustomer;
