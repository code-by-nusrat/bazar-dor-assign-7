// 'use client'
// import { authClient } from '@/lib/auth-client';
// import React from 'react';

// const UserInfoPage = () => {
//     const { data: session } = authClient.useSession()
//     const user = session?.user
//     console.log(user, 'user')
//     return (
//         <div>
//             {
//                 user ? 
//                     <div className="avatar">
//                         <div className="w-24 rounded-xl">
//                             <img alt="Tailwind-CSS-Avatar-component" src={user ?.image } />
//                         </div>
//                     </div>
//                  :
//                     <div className="flex gap-2 sm:gap-3 shrink-0">

//                         <button className="btn btn-sm sm:btn-md"> সাইন ইন </button>
//                         <button className="btn btn-sm sm:btn-md text-white bg-[#05893E] hover:bg-[#047a36]"> সাইন আপ </button>
//                     </div>
//             }

//         </div>
//     );
// };

// export default UserInfoPage;

'use client';

import { authClient } from '@/lib/auth-client';
import React from 'react';
import Link from 'next/link';

const UserInfoPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    console.log(user, 'user');

    return (
        <div>
            {user ? (
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full bg-[#05893E] text-white flex items-center justify-center">
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name || 'User'}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-lg font-bold">
                                {user.name?.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex gap-2 sm:gap-3 shrink-0">
                    <Link href="/sign-in">
                        <button className="btn btn-sm sm:btn-md">
                            সাইন ইন
                        </button>
                    </Link>

                    <Link href="/sign-up">
                        <button className="btn btn-sm sm:btn-md text-white bg-[#05893E] hover:bg-[#047a36]">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfoPage;