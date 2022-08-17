import React from 'react';
import FrontFace from './FrontFace';
import BackFace from './BackFace';

export default function Main({ data }) {
    return (
        <>
            <section
            className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white"
            >
            <div
                className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
            >
                <div
                className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
                >
                <FrontFace />
                <div
                    className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
                >
                <BackFace />
                </div>
                </div>
            </div>
            </section>
        </>
    )
}