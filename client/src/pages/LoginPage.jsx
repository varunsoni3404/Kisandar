// import { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../Components/UserContext";
// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const {setUser} = useContext(UserContext)
//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();
//     try {
//         const {data, status} = await axios.post("/login", { email, password });

//         if (status === 200) {
//             setUser(data);
//             setRedirect(true);
//         } else {
//             alert('Login unsuccessful. Please check your credentials.');
//         }

//     } catch (error) {
//         if (error.response && error.response.status === 401) {
//             alert("Invalid email or password. Please try again.");
//         } else {
//             alert("Login attempt failed. Please try again later.");
//         }
//     }
// }

//   if (redirect) {
//     return <Navigate to={"/MainSection"} />;
//   }

//   return (
//     <div className="mt-4 grow flex items-center justify-around">
//       <div className="mb-64">
//         <h1 className="text-4xl text-center mb-4">Login</h1>
//         <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//             required
//           />
//           <button className="primary hover:bg-rose-600">Login</button>
//           <div className="text-center py-2">
//             Don't have an Account yet?
//             <Link className="underline text-black" to={"/register"}>
//               Register Now
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-custom-bg-image">
//       <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
//         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 border border-gray-300">
//           <div className="text-center text-gray-500">LOGO</div>
//         </div>
//         <h2 className="text-center text-green-700 text-xl font-semibold mb-6 mt-6">
//           WELCOME BACK
//         </h2>
//         <form onSubmit={handleLoginSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full p-2 mb-4 border border-gray-300 rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 mb-4 border border-gray-300 rounded"
//           />
//           <button className="w-full bg-green-700 text-white py-2 rounded mb-4">
//             Login
//           </button>
//           <button className="w-full border border-green-700 text-green-700 py-2 rounded">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Components/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null); // Updated to hold a role
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data, status } = await axios.post(
        "/login",
        { email, password },
        { withCredentials: true }
      );

      if (status === 200) {
        // Make another request to fetch the user's profile
        const profileResponse = await axios.get("/profile", {
          withCredentials: true,
        });
        setUser(profileResponse.data); // Set the user data from the profile response
        setRedirect(data.role);
      } else {
        alert("Login unsuccessful. Please check your credentials.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid email or password. Please try again.");
      } else {
        alert("Login attempt failed. Please try again later.");
      }
    }
  }

  if (redirect === "farmer") {
    return <Navigate to="/farmer/dashboard" />;
  } else if (redirect === "vendor") {
    return <Navigate to="/vendor/dashboard" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg-image bg-cover">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-center text-green-700 text-xl font-semibold mb-6 mt-6">WELCOME BACK</h2>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <input
          
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <button className="w-full bg-primary3 text-white py-2 rounded mb-4 mt-1">Login</button>
          <div className="text-center py-2">
            Don't have an Account yet?
            <Link className="underline text-black" to={"/register"}>
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
