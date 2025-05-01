// src/components/WhatsAppChat.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const ChatButtons = () => {
    return (
        <div className="fixed bottom-6 right-2 z-50 flex flex-col items-end gap-4">
            <a
                href="tel:+918660796594"
                className="group"
            >
                <div className="bg-[#631930] text-white flex items-center gap-3 px-2 py-2 rounded-full shadow-lg transform transition-all duration-300 group-hover:pr-6 group-hover:pl-4 group-hover:w-48 w-12 overflow-hidden">
                    <MdCall className="w-8 h-8 flex-shrink-0" />
                    <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 ml-5 transition-opacity duration-300 font-semibold">
                        Call Us
                    </span>
                </div>
            </a>
            <a
                href="https://wa.me/918660796594"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="bg-[#631930] text-white flex items-center gap-3 px-2 py-2 rounded-full shadow-lg transform transition-all duration-300 group-hover:pr-6 group-hover:pl-4 group-hover:w-48 w-12 overflow-hidden">
                    <FaWhatsapp className="w-8 h-8 flex-shrink-0" />
                    <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 ml-2 transition-opacity duration-300 font-semibold">
                        Chat with us
                    </span>
                </div>
            </a>
        </div>
    );
};

export default ChatButtons;
