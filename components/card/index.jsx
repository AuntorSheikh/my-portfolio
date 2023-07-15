import React from "react";
import Button from "../button";

export default function Card(props){
    return(
        <div className="relative max-w-xl p-8 mx-auto mb-8 text-black bg-[#e5e7eb] rounded-md shadow-2xl">
    <a href="#">
        <img className="w-24 h-full mx-auto rounded-full transform -translate-y-2 xs:mb-0 xs:mt-0 xs:mx-none md:w-32" src={props.imgSrc} alt=" Picture " />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-black">{props.body}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Button  button="Download CV"/>
        </a>
    </div>
</div>

    );
};