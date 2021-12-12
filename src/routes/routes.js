import Home from "../components/Home";
//seller
import Addnew_seller from "../components/seller/Addnew_seller";
import Allpdts_seller from "../components/seller/Allpdts_seller";
import Login_seller from "../components/seller/Login_seller";
import Register_seller from "../components/seller/Register_seller";
import Options_seller from "../components/seller/Options_seller";
import Profile_seller from "../components/seller/Profile_seller";
import Pdt_seller_edit from "../components/seller/Pdt_seller_edit";
import Profile_edit_seller from "../components/seller/Profile_edit_seller";
//owner
import Home_owner from "../components/owner/Home_owner";
import Login_owner from "../components/owner/Login_owner";
import Register_owner from "../components/owner/Register_owner";
import Options_owner from "../components/owner/Options_owner";
import Ordermore_owner from "../components/owner/Ordermore_owner";
import Profile_owner from "../components/owner/Profile_owner";
import Staff_owner from "../components/owner/Staff_owner";
import Staffadd_owner from "../components/owner/Staffadd_owner";
import Staff_edit_owner from "../components/owner/Staff_edit_owner";
import Pdt_owner_edit from "../components/owner/Pdt_owner_edit";
import Profile_edit_owner from "../components/owner/Profile_edit_owner";

const routes = [
  { path: "/", element: <Home /> },
  //seller
  { path: "/seller/addnew", element: <Addnew_seller /> },
  { path: "/seller/allpdts", element: <Allpdts_seller /> },
  { path: "/seller/pdt/edit", element: <Pdt_seller_edit /> },
  { path: "/seller/login", element: <Login_seller /> },
  { path: "/seller/register", element: <Register_seller /> },
  { path: "/seller/options", element: <Options_seller /> },
  { path: "/seller/profile", element: <Profile_seller /> },
  { path: "/seller/profile/edit", element: <Profile_edit_seller /> },
  //owner
  { path: "/owner/home", element: <Home_owner /> },
  { path: "/owner/login", element: <Login_owner /> },
  { path: "/owner/register", element: <Register_owner /> },
  { path: "/owner/options", element: <Options_owner /> },
  { path: "/owner/profile", element: <Profile_owner /> },
  { path: "/owner/profile/edit", element: <Profile_edit_owner /> },
  { path: "/owner/staff", element: <Staff_owner /> },
  { path: "/owner/profile/addstaff", element: <Staffadd_owner /> },
  { path: "/owner/staff/edit", element: <Staff_edit_owner /> },
  { path: "/owner/pdt/edit", element: <Pdt_owner_edit /> },
  { path: "/owner/ordermore", element: <Ordermore_owner /> },
  // product edit owner i.e  pdt_owner_edit
];

export default routes;
