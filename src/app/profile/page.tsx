


'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

interface ProfileMessage {
    type: 'success' | 'error';
    text: string;
}

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [name, setName] = useState<string | undefined>();
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<ProfileMessage | null>(null);

    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = (name ?? user?.name ?? '').trim();

        if (!trimmed) {
            setMessage({ type: 'error', text: 'নাম খালি রাখা যাবে না।' });
            return;
        }

        setSaving(true);
        setMessage(null);

        const { error } = await authClient.updateUser({ name: trimmed });

        if (error) {
            setSaving(false);
            setMessage({
                type: 'error',
                text: error.message || 'আপডেট করা যায়নি, আবার চেষ্টা করুন।',
            });
            return;
        }

        // success: go home and refresh so server components show the new name
        router.push('/');
        router.refresh();
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
        <div>
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
                                    value={name ?? user.name ?? ''}
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
        </div>
    );
};

export default ProfilePage;