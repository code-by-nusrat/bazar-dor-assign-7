// 'use client'

// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";

// const ProfilePage = () => {
//     const { data: session } = authClient.useSession();
//     const user = session?.user;
//     console.log(user)
//     return (
//         <div>
//             <h2>আমার প্রোফাইল</h2>
//             <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

//             <div>
//                 <div className="avatar">
//                     <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#05893E] text-white">
//                         {user.image ? (
//                             <Image
//                                 src={user.image}
//                                 alt={user.name || 'User'}
//                                 className="h-full w-full object-cover"
//                             />
//                         ) : (
//                             <span className="text-lg font-bold">
//                                 {user.name?.charAt(0).toUpperCase() || 'U'}
//                             </span>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;


// 'use client';

// import { authClient } from '@/lib/auth-client';
// import Image from 'next/image';

// const ProfilePage = () => {
//     const { data: session, isPending } = authClient.useSession();
//     const user = session?.user;

//     if (isPending) {
//         return (
//             <div className="flex min-h-[50vh] items-center justify-center">
//                 <span className="loading loading-spinner loading-lg text-green-600"></span>
//             </div>
//         );
//     }

//     if (!user) {
//         return (
//             <div className="mx-auto max-w-3xl px-4 py-10 text-center">
//                 <h2 className="text-xl font-bold">আমার প্রোফাইল</h2>
//                 <p className="mt-2 text-gray-500">
//                     প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <main className="min-h-screen bg-base-200 px-3 py-8 sm:px-6 sm:py-12">
//             <div className="mx-auto w-full max-w-3xl">

//                 {/* Page heading */}
//                 <div className="mb-6">
//                     <h1 className="text-2xl font-bold sm:text-3xl">
//                         আমার প্রোফাইল
//                     </h1>
//                     <p className="mt-2 text-sm text-gray-500 sm:text-base">
//                         আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
//                     </p>
//                 </div>

//                 {/* Profile card */}
//                 <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

//                     {/* Green banner */}
//                     <div className="h-24 bg-[#05893E] sm:h-32" />

//                     <div className="px-4 pb-6 sm:px-8 sm:pb-8">

//                         {/* Avatar */}
//                         <div className="-mt-12 mb-4 sm:-mt-16">
//                             <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#05893E] text-3xl font-bold text-white sm:h-32 sm:w-32 sm:text-4xl">
//                                 {user.image ? (
//                                     <Image
//                                         src={user.image}
//                                         alt={user.name || 'User'}
//                                         width={128}
//                                         height={128}
//                                         className="h-full w-full object-cover"
//                                     />
//                                 ) : (
//                                     user.name?.charAt(0).toUpperCase() || 'U'
//                                 )}
//                             </div>
//                         </div>

//                         {/* User name and email */}
//                         <div className="mb-6">
//                             <h2 className="break-words text-xl font-bold sm:text-2xl">
//                                 {user.name || 'নাম পাওয়া যায়নি'}
//                             </h2>
//                             <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
//                                 {user.email}
//                             </p>
//                         </div>

//                         <div className="border-t border-gray-200 pt-5">
//                             <h3 className="mb-4 text-lg font-semibold">
//                                 অ্যাকাউন্টের তথ্য
//                             </h3>

//                             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

//                                 <div className="rounded-xl bg-gray-50 p-4">
//                                     <p className="mb-1 text-sm text-gray-500">
//                                         পুরো নাম
//                                     </p>
//                                     <p className="break-words font-medium">
//                                         {user.name || 'তথ্য নেই'}
//                                     </p>
//                                 </div>

//                                 <div className="rounded-xl bg-gray-50 p-4">
//                                     <p className="mb-1 text-sm text-gray-500">
//                                         ইমেইল ঠিকানা
//                                     </p>
//                                     <p className="break-all font-medium">
//                                         {user.email || 'তথ্য নেই'}
//                                     </p>
//                                 </div>

//                                 <div className="rounded-xl bg-gray-50 p-4 sm:col-span-2">
//                                     <p className="mb-1 text-sm text-gray-500">
//                                         ইমেইল যাচাই
//                                     </p>
//                                     <p className={`font-medium ${user.emailVerified ? 'text-green-700' : 'text-orange-600'}`}>
//                                         {user.emailVerified
//                                             ? 'যাচাই করা হয়েছে'
//                                             : 'এখনও যাচাই করা হয়নি'}
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// };

// export default ProfilePage;

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [name, setName] = useState('');
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState(null); // { type: 'success' | 'error', text }

    // Fill the input once the user is loaded
    useEffect(() => {
        if (user?.name) setName(user.name);
    }, [user?.name]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const trimmed = name.trim();

        if (!trimmed) {
            setMessage({ type: 'error', text: 'নাম খালি রাখা যাবে না।' });
            return;
        }

        setSaving(true);
        setMessage(null);

        const { error } = await authClient.updateUser({ name: trimmed });

        setSaving(false);

        if (error) {
            setMessage({
                type: 'error',
                text: error.message || 'আপডেট করা যায়নি, আবার চেষ্টা করুন।',
            });
        } else {
            setMessage({ type: 'success', text: 'প্রোফাইল সফলভাবে আপডেট হয়েছে।' });
        }
    };

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => router.push('/'),
            },
        });
    };

    if (isPending) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-green-600"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-10 text-center">
                <h2 className="text-xl font-bold">আমার প্রোফাইল</h2>
                <p className="mt-2 text-gray-500">
                    প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
                </p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#f1f5f0] px-4 py-8 sm:px-6 sm:py-12">
            <div className="mx-auto w-full max-w-3xl space-y-5">

                {/* Page heading */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        আমার প্রোফাইল
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Top card: avatar, name, email, sign out */}
                <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-xl font-bold text-gray-600">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || 'User'}
                                    width={56}
                                    height={56}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                user.name?.charAt(0).toUpperCase() || 'U'
                            )}
                        </div>

                        <div className="min-w-0">
                            <h2 className="truncate text-lg font-semibold text-gray-800">
                                {user.name || 'নাম পাওয়া যায়নি'}
                            </h2>
                            <p className="truncate text-sm text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-500 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="M9 14 4 9l5-5" />
                            <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
                        </svg>
                        সাইন আউট
                    </button>
                </section>

                {/* Info / update form card */}
                <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                    <h3 className="mb-5 text-base font-semibold text-gray-800">
                        তথ্য
                    </h3>

                    <form onSubmit={handleUpdate} className="space-y-4 sm:px-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-gray-700"
                            >
                                নাম
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="আপনার নাম লিখুন"
                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/20"
                            />
                        </div>

                        {message && (
                            <p
                                className={`text-sm ${
                                    message.type === 'success'
                                        ? 'text-green-700'
                                        : 'text-red-600'
                                }`}
                            >
                                {message.text}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={saving}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#05893E] px-4 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#047535] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {saving && (
                                <span className="loading loading-spinner loading-xs"></span>
                            )}
                            {saving ? 'আপডেট হচ্ছে...' : 'আপডেট'}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;
