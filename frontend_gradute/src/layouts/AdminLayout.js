import Footer from "../components/admin/Footer";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sitebar";

export default function AdminLayout(props) {
    return (
        <>
            {/* loader Start  */}
            {/* <div id="loading">
                <div id="loading-center">
                </div>
            </div> */}
            {/* <!-- loader END --> */}
            {/* <!-- Wrapper Start --> */}
            <div class="wrapper">
                <Sidebar />
                <Navbar />
                {props.children}
            </div>
            <Footer />
        </>
    )
} 