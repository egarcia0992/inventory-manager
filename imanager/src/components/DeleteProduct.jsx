import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function DeleteProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const prod = location.state.p;

    return (
        <>
            <h1>Are You Sure You Want To Delete The User:</h1>
            <br/>
            <h2>{prod.productId}</h2>
            <h2>{prod.productName}</h2>
            <h2>{prod.productPrice}</h2>
            {/* <Button onClick={handleDelete}> Delete </Button> */}
        </>
    );
}

export default DeleteProduct;
