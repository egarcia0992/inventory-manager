import "./App.css";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Products from "./components/Products";
import UpdateCustomer from "./components/UpdateCustomer.jsx";
import DeleteCustomer from "./components/DeleteCustomer.jsx";
import InsertCustomer from "./components/InsertCustomer.jsx";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="*" element={<NotFound/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Customers" element={<Customers/>}></Route>
                <Route path="/Products" element={<Products/>}></Route>
                <Route path="/update-c" element={<UpdateCustomer/>}></Route>
                <Route path="/delete-c" element={<DeleteCustomer/>}></Route>
                <Route path="/insert-c" element={<InsertCustomer/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
