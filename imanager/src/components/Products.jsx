import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Products(props) {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <Button onClick={() => navigate("/insert-p")} style={{ margin: "20px"}}>Insert Product</Button>
                <Button onClick={() => navigate("/find-p")} style={{ margin: "20px"}}>Find Product</Button>
            </div>
            <div style={{display: "flex"}} className="container">
                <table className="table table-striped">

                    <thead>
                    <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col">All Products</th>
                        <th scope="col">Inventory</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>

                    <tbody>
                    {/*{customers.map((c, index) => (*/}
                    {/*    <tr key={index}>*/}
                    {/*        <td>{c.customerId}</td>*/}
                    {/*        <td>{c.customerName}</td>*/}
                    {/*        <td>{c.customerEmail}</td>*/}
                    {/*        <td>*/}
                    {/*            <Button onClick={() => navigate("/update-c", {state: {c}})}> Update </Button>*/}
                    {/*        </td>*/}
                    {/*        <td>*/}
                    {/*            <Button onClick={() => navigate("/delete-c", {state: {c}})}> Delete </Button>*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*))}*/}
                    </tbody>

                </table>

            </div>
        </>
    );
}

export default Products;