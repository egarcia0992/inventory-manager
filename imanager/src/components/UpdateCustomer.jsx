import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function UpdateCustomer() {
    const navigate = useNavigate();
    const location = useLocation();
    const cust = location.state.c;
    const [customerId, setCustomerId] = useState(cust.customerId);
    const [customerName, setCustomerName] = useState(cust.customerName);
    const [customerEmail, setCustomerEmail] = useState(cust.customerEmail);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/customers/${cust.customerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({customerId, customerName, customerEmail}),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Customer updated successfully!");
                    navigate("/customers");
                } else {
                    alert("Failed to update customer.");
                }
            })
            .catch((error) => console.error("Error updating customer:", error));
    };

    return (
        <>
            <h1>Update Customer</h1>
            <h2>{cust.customerName}</h2>

            <div style={{display: "flex", justifyContent: "center"}}>

                <form style={{width: "30%"}}>
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
                    <br/>
                    <Button onClick={handleSubmit} type="submit" className="btn btn-primary btn-lg">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}

export default UpdateCustomer;