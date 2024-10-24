import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <header className="p-4 flex justify-between items-center bg-custom-gradient shadow-lg ">
        {/* Logo and Title */}
        <Link to={'/'} className="flex items-center gap-2 text-primary3 ml-16">
          <span className="font-bold text-2xl">Kisandar</span>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 mr-16 text-base font-serif">
          {/* Home Button */}
          <Link to={'/MainSection'} className="px-4 py-2  text-primary3">
            Home
          </Link>

          {/* Farm Edu Button */}
          <Link to={'/farm'} className="px-4 py-2  text-primary3 ">
            Farm Edu
          </Link>

          {/* Shop Button (Only visible to vendors) */}
          {!!user && user.role === 'vendor' && (
            <Link
              to={'/vendor/shop'}
              className="px-4 py-2  text-primary3"
            >
              Payment Gateway
            </Link>
          )}
          {!!user && user.role === 'farmer' && (
            <Link
              to={'/farmer/quality'}
              className="px-4 py-2  text-primary3"
            >
              Contract
            </Link>
          )}
          {!!user && user.role === 'farmer' && (
            <Link
              to={'/farmer/ImagePage'}
              className="px-4 py-2  text-primary3"
            >
              Images
            </Link>
          )}

          {/* Dashboard Button (Only visible if logged in) */}
          {!!user && (
            <Link
              to={user.role === 'vendor' ? '/vendor/dashboard' : '/farmer/dashboard'}
              className="px-4 py-2  text-primary3"
            >
              Dashboard
            </Link>
          )}
          {!!user && (
            <Link
              to={user.role === 'vendor' ? '/vendor/offers' : '/farmer/offers'}
              className="px-4 py-2  text-primary3"
            >
              Offers
            </Link>
          )}
          <Link
          to={user ? '/account' : "/login"}
          className="flex items-center justify-center px-4 py-2 bg-primary3 text-white  hover:bg-green-600 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {/* User Name */}
          {!!user && (
            <div className="ml-2">
              {user.name}
            </div>
          )}
        </Link>
        </div>

        {/* User Account Button */}
        
      </header>
    </div>
  );
}



// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from './UserContext';
// import { useTranslation } from 'react-i18next';

// export default function Header() {
//   const { user } = useContext(UserContext);
//   const { i18n } = useTranslation();

//   // Function to change the language
//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <header className="p-5 flex justify-between items-center bg-slate-300 shadow-lg">
//       {/* Logo and Title */}
//       <Link to={'/'} className="flex items-center gap-2 text-primary3 ml-1">
//         <span className="font-bold text-2xl">Kisandar</span>
//       </Link>

//       {/* Navigation Buttons */}
//       <div className="flex items-center space-x-4">
//         {/* Home Button */}
//         <Link to={'/MainSection'} className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
//           {i18n.t('home')} {/* Translated */}
//         </Link>

//         {/* Farm Edu Button */}
//         <Link to={'/farm'} className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
//           {i18n.t('farmEdu')} {/* Translated */}
//         </Link>

//         {/* Payment Gateway (Only visible to vendors) */}
//         {!!user && user.role === 'vendor' && (
//           <Link
//             to={'/vendor/shop'}
//             className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300"
//           >
//             {i18n.t('Payment Gateway')} {/* Translated */}
//           </Link>
//         )}

//         {/* Dashboard Button (Only visible if logged in) */}
//         {!!user && (
//           <Link
//             to={user.role === 'vendor' ? '/vendor/dashboard' : '/farmer/dashboard'}
//             className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
//           >
//             {i18n.t('dashboard')} {/* Translated */}
//           </Link>
//         )}

//         {/* Offers Button (Only visible if logged in) */}
//         {!!user && (
//           <Link
//             to={user.role === 'vendor' ? '/vendor/offers' : '/farmer/offers'}
//             className="px-4 py-2 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition duration-300"
//           >
//             {i18n.t('Offers')} {/* Translated */}
//           </Link>
//         )}
//       </div>

//       {/* Language Switcher */}
//       <div className="flex space-x-4 items-center">
//         <button
//           onClick={() => changeLanguage('en')}
//           className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//         >
//           English
//         </button>
//         <button
//           onClick={() => changeLanguage('hi')}
//           className={`px-3 py-1 rounded ${i18n.language === 'hi' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//         >
//           हिंदी
//         </button>
//       </div>

//       {/* User Account Button */}
//       <Link
//         to={user ? '/account' : "/login"}
//         className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>

//         {/* Display User's Name if Logged In */}
//         {!!user && (
//           <span className="ml-2">
//             {user.name}
//           </span>
//         )}
//       </Link>
//     </header>
//   );
// }




// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from './UserContext';

// export default function Header() {
//   const {user} = useContext(UserContext)
//   return (
//     <div>
//       <header className="p-5 flex justify-between bg-slate-300">
//         <Link
//           to={'/'}
//           className="flex items-center gap-1"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="size-8 -rotate-90"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
//             />
//           </svg>
//           <span className="font-bold text-xl">kisandhaar</span>
//         </Link>
//         <div className="flex gap-2 border-2 border-black rounded-full px-4 py-2 shadow-md shadow-gray-300">
//           <Link to={'/MainSection'}>Home</Link>
//           <div className="border border-black"></div>
//           <Link to={'/farm'}>Farm Edu</Link>
//           <div className="border border-black"></div>
//           <Link to={'/'}>Dashboard</Link>
//         </div>
//         <Link
//           to={user?'/account':"/login"}
//           className="flex items-center gap-2 border-2 border-black rounded-full px-4 py-2 "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//           <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="size-6 relative top-1"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//           {!!user && (
//             <div>
//               {user.name}
//             </div>
//           )}
//         </Link>
//       </header>
//     </div>
//   );
// }


