import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function DeleteCustomer() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();
    const location = useLocation();
    const cust = location.state.c;

    const handleDelete = () => {
        fetch(`${BASE_URL}/customers/${cust.customerId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("Customer deleted successfully!");
                    navigate("/customers");
                } else {
                    alert("Failed to delete customer.");
                }
            })
            .catch((error) => console.error("Error deleting customer:", error));
    };

    return (
        <>
            <h1>Are You Sure You Want To Delete The User:</h1>
            <br/>
            <h2>{cust.customerId}</h2>
            <h2>{cust.customerName}</h2>
            <h2>{cust.customerEmail}</h2>
            <Button onClick={handleDelete}> Delete </Button>
        </>
    );
}

export default DeleteCustomer;