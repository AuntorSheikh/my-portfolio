import React from "react";
import Button from "../button";

export default function Card(props){
    return(
        <div className="relative max-w-xl p-8 mx-auto mb-8 text-purple-800 bg-[#a3e635] rounded-md shadow-2xl">
    <a href="#">
        <img className="w-24 h-full mx-auto rounded-full transform -translate-y-2 xs:mb-0 xs:mt-0 xs:mx-none md:w-32" src={props.imgSrc} alt=" Picture " />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-black">{props.body}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Button  button="Download CV"/>
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2001/svg"><path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </a>
    </div>
</div>

    );
};
