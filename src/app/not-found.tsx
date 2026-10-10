import Link from 'next/link';

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-[#f1f5f0] px-4 py-12">
            <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
                <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-green-50 text-4xl">
                    🛒
                </div>

                <p className="mt-6 text-6xl font-extrabold tracking-tight text-[#05893E] sm:text-7xl">
                    ৪০৪
                </p>

                <h1 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                    পেজটি খুঁজে পাওয়া যায়নি
                </h1>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    আপনি যে পণ্য বা পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম বদলেছে, অথবা
                    লিংকটি ভুল।
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-lg bg-[#05893E] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#047535]"
                    >
                        হোম পেজে ফিরে যান
                    </Link>

                
                </div>
            </div>
        </main>
    );
};

export default NotFound;