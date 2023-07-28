import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="text-sm text-center px-10 py-6 text-base-100 border-base-300 dark:bg-boxdark-2">
                <div className="w-full h-[2px] bg-black dark:bg-white"></div>
                <div className="flex flex-col md:flex-row items-center justify-center mt-5 text-black dark:text-white">
                    <p>&copy; Copyright 2023, PT. Humpus Karbometil Selulosa. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;