
// 'use client';

// import { authClient } from '@/lib/auth-client';
// import React, { useState } from 'react';
// import Link from 'next/link';

// const UserInfoPage = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const { data: session , isPending} = authClient.useSession();
//     const user = session?.user;
//     const handleSignOut = async()=>{
//         await authClient.signOut()
//     }
//     if (isPending) {
//          return null;
//          }
//     return (
//         <div>
//             {user ? (
//                 <div className="flex items-center gap-2">
//                     {/* Avatar */}
//                     <div className="avatar">
//                         <div className="w-10 h-10 rounded-full bg-[#05893E] text-white flex items-center justify-center overflow-hidden">
//                             {user.image ? (
//                                 <img
//                                     src={user.image as string}
//                                     alt={user.name || 'User'}
//                                     className="w-full h-full object-cover"
//                                 />
//                             ) : (
//                                 <span className="text-lg font-bold">
//                                     {user.name?.charAt(0).toUpperCase()}
//                                 </span>
//                             )}
//                         </div>
//                     </div>

//                     {/* <select  className="select select-ghost pt-2">
//                         <option className=' font-bold' disabled={true}></option>
//                         <div className=''>
//                         <option className="font-semibold text-sm sm:text-base">{user.name}</option>
//                         <option className='text-gray-500'>{user.email}</option>
//                         </div>
//                         <option className=''>👤 আমার প্রোফাইল</option>
//                         <option className='text-red-500'>↩ সাইন আউট</option>
//                     </select> */}
//                     <div className="relative">
//                         {/* Dropdown Toggle */}
//                         <button
//                             type="button"
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
//                         >
//                             <span className="font-semibold text-sm sm:text-base">
//                                 {user.name}
//                             </span>

//                             <span
//                                 className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''
//                                     }`}
//                             >
//                                 ▼
//                             </span>
//                         </button>

//                         {/* Dropdown Menu */}
//                         {isOpen && (
//                             <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg z-50">

//                                 {/* User Information */}
//                                 <div className="px-3 py-2 border-b border-gray-200">
//                                     <p className="font-semibold text-sm text-gray-900">
//                                         {user.name}
//                                     </p>

//                                     <p className="text-sm text-gray-500 break-all">
//                                         {user.email}
//                                     </p>
//                                 </div>

//                                 {/* Profile */}
//                                 <button
//                                     type="button"
//                                     onClick={() => {
//                                         setIsOpen(false);
//                                         // Add profile navigation here
//                                     }}
//                                     className="w-full text-left px-3 py-2 mt-1 rounded-lg hover:bg-gray-100 text-sm"
//                                 >
//                                     👤 আমার প্রোফাইল
//                                 </button>

//                                 {/* Sign Out */}
//                                 <button onClick={handleSignOut}
//                                     type="button"
//                                     // onClick={() => {
//                                     //     setIsOpen(false);
//                                     //     // Add sign-out logic here
//                                     // }}
//                                     className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-500 text-sm"
//                                 >
//                                     ↩ সাইন আউট
//                                 </button>
//                             </div>
//                         )}
//                     </div>

//                 </div>
//             ) : (
//                 <div className="flex gap-2 sm:gap-3 shrink-0">
//                     <Link href="/sign-in">
//                         <button className="btn btn-sm sm:btn-md">
//                             সাইন ইন
//                         </button>
//                     </Link>

//                     <Link
//                         href="/sign-up"
//                         className="btn btn-sm sm:btn-md text-white bg-[#05893E] hover:bg-[#047a36]"
//                     >
//                         সাইন আপ
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserInfoPage;





// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { authClient } from '@/lib/auth-client';
// import Image from 'next/image';

// const UserInfoPage = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const { data: session, isPending } = authClient.useSession();
//     const user = session?.user;

//     const handleSignOut = async () => {
//         const { error } = await authClient.signOut();

//         if (!error) {
//             setIsOpen(false);
//         }
//     };

//     if (isPending) {
//         return null;
//     }

//     return (
//         <div>
//             {user ? (
//                 <div className="flex items-center gap-2">
//                     {/* Avatar */}
//                     <div className="avatar">
//                         <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#05893E] text-white">
//                             {user.image ? (
//                                 <Image width={36}
//                                 height={36}
//                                     src={user.image}
//                                     alt={user.name || 'User'}
//                                     className="h-full w-full object-cover"
//                                 />
//                             ) : (
//                                 <span className="text-lg font-bold">
//                                     {user.name?.charAt(0).toUpperCase() || 'U'}
//                                 </span>
//                             )}
//                         </div>
//                     </div>

//                     {/* User Dropdown */}
//                     <div className="relative">
//                         <button
//                             type="button"
//                             onClick={() => setIsOpen((prev) => !prev)}
//                             aria-expanded={isOpen}
//                             className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100"
//                         >
//                             <span className="text-sm font-semibold sm:text-base">
//                                 {user.name}
//                             </span>

//                             <span
//                                 className={`text-xs transition-transform ${
//                                     isOpen ? 'rotate-180' : ''
//                                 }`}
//                             >
//                                 ▼
//                             </span>
//                         </button>

//                         {isOpen && (
//                             <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
//                                 {/* User Information */}
//                                 <div className="border-b border-gray-200 px-3 py-2">
//                                     <p className="text-sm font-semibold text-gray-900">
//                                         {user.name}
//                                     </p>

//                                     <p className="break-all text-sm text-gray-500">
//                                         {user.email}
//                                     </p>
//                                 </div>

//                                 {/* Profile */}
//                                 <Link
//                                     href="/profile"
//                                     onClick={() => setIsOpen(false)}
//                                     className="mt-1 block rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
//                                 >
//                                     👤 আমার প্রোফাইল
//                                 </Link>

//                                 {/* Sign Out */}
//                                 <Link href={'/sign-in'}><button
//                                     type="button"
//                                     onClick={handleSignOut}
//                                     className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50"
//                                 >
//                                     ↩ সাইন আউট
//                                 </button></Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             ) : (
//                 <div className="flex shrink-0 gap-2 sm:gap-3">
//                     <Link
//                         href="/sign-in"
//                         className="btn btn-sm sm:btn-md"
//                     >
//                         সাইন ইন
//                     </Link>

//                     <Link
//                         href="/sign-up"
//                         className="btn btn-sm bg-[#05893E] text-white hover:bg-[#047a36] sm:btn-md"
//                     >
//                         সাইন আপ
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserInfoPage;

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

const UserInfoPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error('সাইন আউট করা যায়নি, আবার চেষ্টা করুন');
            return;
        }

        setIsOpen(false);
        toast.success('সফলভাবে সাইন আউট হয়েছে');
        router.push('/sign-in');
        router.refresh();
    };

    if (isPending) {
        return null;
    }

    return (
        <div>
            {user ? (
                <div className="flex items-center gap-2">
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#05893E] text-white">
                            {user.image ? (
                                <Image
                                    width={36}
                                    height={36}
                                    src={user.image}
                                    alt={user.name || 'User'}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span className="text-lg font-bold">
                                    {user.name?.charAt(0).toUpperCase() || 'U'}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* User Dropdown */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-expanded={isOpen}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100"
                        >
                            <span className="text-sm font-semibold sm:text-base">
                                {user.name}
                            </span>

                            <span
                                className={`text-xs transition-transform ${
                                    isOpen ? 'rotate-180' : ''
                                }`}
                            >
                                ▼
                            </span>
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                                {/* User Information */}
                                <div className="border-b border-gray-200 px-3 py-2">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {user.name}
                                    </p>

                                    <p className="break-all text-sm text-gray-500">
                                        {user.email}
                                    </p>
                                </div>

                                {/* Profile */}
                                <Link
                                    href="/profile"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-1 block rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                                >
                                    👤 আমার প্রোফাইল
                                </Link>

                                {/* Sign Out */}
                                <button
                                    type="button"
                                    onClick={handleSignOut}
                                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50"
                                >
                                    ↩ সাইন আউট
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex shrink-0 gap-2 sm:gap-3">
                    <Link href="/sign-in" className="btn btn-sm sm:btn-md">
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="btn btn-sm bg-[#05893E] text-white hover:bg-[#047a36] sm:btn-md"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfoPage;