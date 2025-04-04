import { Routes, Route, Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CustomerLookup from "./components/Table/Customer/CustomerLookup";
import CustomerAddForm from "./components/Table/Customer/CustomerAddForm";

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Content />} />
                    <Route
                        path="/recipient_lookup"
                        element={<CustomerLookup />}
                    />
                    <Route
                        path="/recipient_add"
                        element={<CustomerAddForm />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
