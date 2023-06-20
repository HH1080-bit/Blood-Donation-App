import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
//import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Volunteers from "./Components/Volunteers/Volunteers";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AboutPage from "./Pages/Landing/AboutPage";
import Organization from "./Components/SignUp/Organization/Organization";
import User from "./Components/SignUp/User/User";
import LogOrg from "./Components/LogIn/Organizations/LogOrg";
import LogUser from "./Components/LogIn/User/LogUser";
import OrgProfile from "./Components/OrgProfile/OrgProfile";
import Terms from "./Components/Terms/Terms";
import ContactUs from "./Components/ContactUs/ContactUs";
import UserProfile from "./Components/Profile/user/userProfile";
import UserEdit from "./Components/Edit/UserEdit/UserEdit";
import { Toaster } from "react-hot-toast";
// Start Animation Library
import Aos from "aos";
import "aos/dist/aos.css";
import jwtDecode from "jwt-decode";

// End Animation Library

import OrgEdit from "./Components/OrgEdit/OrgEdit";
function App() {
  const [TokenData, setTokenData] = useState(localStorage.getItem("token"));
  function saveTokenData() {
    if (localStorage.getItem("token") === null) {
      setTokenData(null);
    } else {
      let encodedToken = localStorage.getItem("token");
      let decodedToken = jwtDecode(encodedToken);
      setTokenData(decodedToken);
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  useEffect(() => {
    saveTokenData();
  }, []);
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout TokenData={TokenData} setTokenData={setTokenData} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "terms",
          element: (
            <ProtectedRoute>
              <Terms />,
            </ProtectedRoute>
          ),
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
        {
          path: "volunteers",
          element: <Volunteers />,
        },
        {
          path: "Signup-org",
          element: <Organization />,
        },
        {
          path: "Signup-user",
          element: <User />,
        },
        {
          path: "Signup-org/signin-org",
          element: <LogOrg saveTokenData={saveTokenData} />,
        },
        {
          path: "Signup-user/signin-user",
          element: <LogUser saveTokenData={saveTokenData} />,
        },
        {
          path: "orgprofile",
          element: (
            <ProtectedRoute>
              <OrgProfile TokenData={TokenData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "userProfile",
          element: (
            <ProtectedRoute>
              <UserProfile TokenData={TokenData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "userProfile/edit",
          element: (
            <ProtectedRoute>
              <UserEdit TokenData={TokenData} saveTokenData={saveTokenData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "orgProfile/edit",
          element: (
            <ProtectedRoute>
              {" "}
              <OrgEdit TokenData={TokenData} saveTokenData={saveTokenData} />
            </ProtectedRoute>
          ),
        },

        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster />

      {/* <BrowserRouter> */}
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
