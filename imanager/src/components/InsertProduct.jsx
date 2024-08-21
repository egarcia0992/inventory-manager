import React, { useState } from "react";
import { Button } from "react-bootstrap";

function InsertProduct() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [productName, setProductName] = useState("");
    const [productCount, setProductCount] = useState("0");
    const [productPrice, setProductPrice] = useState("0.00");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            fetch(`${BASE_URL}/products/add-product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productName: productName,
                    productCount: Number(productCount),
                    productPrice: Number(productPrice),
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Product created successfully!");
                        setProductName("");
                        setProductCount("0");
                        setProductPrice("0.00");
                        setErrors({});
                    } else {
                        alert("Failed to create product.");
                    }
                })
                .catch((error) =>
                    console.error("Error creating product:", error)
                );
        }
    };

    const handleCountChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setProductCount(value);
        }
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d{0,2}$/.test(value)) {
            setProductPrice(value);
        }
    };

    const preventInvalidKeysCount = (e) => {
        const isDigit = e.key >= "0" && e.key <= "9";
        const isControlKey =
            e.key === "Backspace" ||
            e.key === "Delete" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight";
        if (!isDigit && !isControlKey) {
            e.preventDefault();
        }
    };
    const preventInvalidKeysPrice = (e) => {
        const isDigit = e.key >= "0" && e.key <= "9";
        const isControlKey =
            e.key === "." ||
            e.key === "Backspace" ||
            e.key === "Delete" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight";
        if (!isDigit && !isControlKey) {
            e.preventDefault();
        }
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!productName.trim()) {
            formErrors.productName = "Product name is required.";
            isValid = false;
        }
        if (
            !Number.isInteger(Number(productCount)) ||
            Number(productCount) < 0
        ) {
            formErrors.productCount =
                "Count must be a whole number greater than or equal to 0.";
            isValid = false;
        }
        if (isNaN(productPrice) || Number(productPrice) < 0) {
            formErrors.productPrice =
                "Price must be a number greater than or equal to 0.";
            isValid = false;
        }
        setErrors(formErrors);
        return isValid;
    };

    return (
        <>
            <h1>Create New Product</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <form style={{ width: "30%" }}>
                    <div className="form-group">
                        <label htmlFor="ProductName">Name</label>
                        <input
                            type="text"
                            id="ProductName"
                            name="productName"
                            placeholder="Enter Name"
                            className="form-control"
                            aria-describedby="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ProductCount">Count</label>
                        <input
                            type="number"
                            step="1"
                            min="0"
                            id="ProductCount"
                            name="productCount"
                            placeholder="Enter Count"
                            className="form-control"
                            aria-describedby="productCount"
                            value={productCount}
                            onChange={handleCountChange}
                            onKeyDown={preventInvalidKeysCount}
                        />
                        {errors.productCount && (
                            <p className="error">{errors.productCount}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="ProductPrice">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            id="ProductPrice"
                            name="productPrice"
                            placeholder="Enter Price"
                            className="form-control"
                            aria-describedby="productPrice"
                            value={productPrice}
                            onChange={handlePriceChange}
                            onKeyDown={preventInvalidKeysPrice}
                        />
                        {errors.productPrice && (
                            <p className="error">{errors.productPrice}</p>
                        )}
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

export default InsertProduct;
