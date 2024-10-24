// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   async function registerUser(ev) {
//     ev.preventDefault();
//     try {
//         await axios.post("/register", {
//             name,
//             email,
//             password,
//         });
//         alert("Registration successful");
//     } catch (e) {
//         console.error("Registration failed:", e);
//         alert(
//             e.response?.data?.error || "Registration failed. Please try again later."
//         );
//     }
// }
//   return (
//     <div className="mt-4 grow flex items-center justify-around">
//       <div className="mb-64">
//         <h1 className="text-4xl text-center mb-4">Register</h1>
//         <form className="max-w-md mx-auto" onSubmit ={registerUser}>
//           <input
//             type="text"
//             placeholder="Your name"
//             value={name}
//             onChange={(ev) => setName(ev.target.value)}
//             required
//           />
//           <input
//             type="email"
//             name=""
//             id=""
//             placeholder="your@email.com"
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//             required
//           />
//           <input
//             type="password"
//             name=""
//             id=""
//             placeholder="password"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//             required
//           />
//           <button className="primary hover:bg-rose-600">Register</button>
//           <div className="text-center py-2">
//             Already a member?
//             <Link className="underline text-black" to={"/login"}>
//               Login Now
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; 
// import axios from "axios";

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); 

//   async function registerUser(ev) {
//     ev.preventDefault();
//     try {
//       await axios.post("/register", {
//         name,
//         email,
//         password,
//       });
//       alert("Registration successful");
//       navigate("/"); // Redirect to homepage after successful registration
//     } catch (e) {
//       console.error("Registration failed:", e);
//       alert(
//         e.response?.data?.error || "Registration failed. Please try again later."
//       );
//     }
//   }

//   return (
//     <div className="mt-4 grow flex items-center justify-around">
//       <div className="mb-64">
//         <h1 className="text-4xl text-center mb-4">Register</h1>
//         <form className="max-w-md mx-auto" onSubmit={registerUser}>
//           <input
//             type="text"
//             placeholder="Your name"
//             value={name}
//             onChange={(ev) => setName(ev.target.value)}
//             required
//           />
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
//           <button className="primary hover:bg-rose-600">Register</button>
//           <div className="text-center py-2">
//             Already a member?
//             <Link className="underline text-black" to={"/login"}>
//               Login Now
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("farmer"); // Default role is farmer
  const navigate = useNavigate(); 

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
        role, // Include role in the request
      });
      alert("Registration successful");
      navigate("/"); // Redirect to homepage after successful registration
    } catch (e) {
      console.error("Registration failed:", e);
      alert(
        e.response?.data?.error || "Registration failed. Please try again later."
      );
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg-image bg-cover">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-center text-green-700 text-xl font-semibold mb-6 mt-6">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
          />
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
          <div className="my-4">
            <label>
              <input
                type="radio"
                value="farmer"
                checked={role === 'farmer'}
                onChange={(ev) => setRole(ev.target.value)}
              />
              Farmer
            </label>
            <label className="ml-4">
              <input
                type="radio"
                value="vendor"
                checked={role === 'vendor'}
                onChange={(ev) => setRole(ev.target.value)}
              />
              Vendor
            </label>
          </div>
          <button className="w-full bg-primary3 text-white py-2 rounded mb-4 mt-1">Register</button>
          <div className="text-center py-2">
            Already a member?
            <Link className="underline text-black" to={"/login"}>
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
