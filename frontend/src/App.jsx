import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CustomerLookup from "./components/Table/Customer/CustomerLookup";
import CustomerResults from "./components/Table/Customer/CustomerResults";

import TempTable from "./components/Table/Customer/TempTable";

function App() {
    return (
        <>
            <NavBar />
            {/* <Content /> */}
            <CustomerLookup />
            <Footer />
        </>
    );
}

export default App;
