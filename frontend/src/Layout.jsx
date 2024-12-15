import { Outlet, useNavigate } from "react-router-dom";
import AltHeadbar from "./navbars/AltHeadbar";
import Headbar from "./navbars/Headbar";
import Footer from "./components/Footer";
import { AdminHeadbar } from "./navbars/AdminHeadbar";
import { admintokenremove, usertokenremove } from "./redux/reduxslices/authslice";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const uselessHandler = () => {
        console.log("oproyojonio function");
    }

    const adminlogouthandler = () => 
    {
        localStorage.removeItem('token');
    
        dispatch(admintokenremove());
        navigate("/");
    }

    const logoutHandler = () => 
    {
        localStorage.removeItem('usertoken');

        dispatch(usertokenremove());
        navigate("/register");
    }

    const userloginSelector = useSelector(state => state.auth.usertoken);
    const adminloginSelector = useSelector(state => state.auth.admintoken);

    return (
        <>
            <div className="wrapper">
                {
                    adminloginSelector ? (<AdminHeadbar adminlogouthandler={adminlogouthandler}></AdminHeadbar>)
                        :
                        (userloginSelector ? (<AltHeadbar logoutHandler={logoutHandler}></AltHeadbar>) : (<Headbar></Headbar>))
                }

                <div className="super-sub">
                    <Outlet context={{ uselessHandler }} ></Outlet>
                </div>
                <Footer></Footer>
            </div >
        </>
    );
};

export default Layout;




