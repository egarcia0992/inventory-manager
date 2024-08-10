import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function DeleteProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const prod = location.state.p;

    const handleDelete = () => {
        fetch(`http://localhost:8080/products/${prod.productId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("Customer deleted successfully!");
                    navigate("/products");
                } else {
                    alert("Failed to delete customer.");
                }
            })
            .catch((error) => console.error("Error deleting customer:", error));
    };

    return (
        <>
            <h1>Are You Sure You Want To Delete The Product:</h1>
            <br />
            <h2>ID: {prod.productId}</h2>
            <h2>Name: {prod.productName}</h2>
            <h2>Price: {prod.productPrice}</h2>
            <h2>Count: {prod.productCount}</h2>
            <Button onClick={handleDelete}> Delete </Button>
        </>
    );
}

export default DeleteProduct;
