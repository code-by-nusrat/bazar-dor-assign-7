

const Footer = () => {
    return (
        <footer className="w-full bg-white">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 font-medium">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6 text-center sm:text-left">
                    <p className="text-sm sm:text-base text-gray-700">
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>

                    <p className="text-xs sm:text-sm text-gray-700">
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
