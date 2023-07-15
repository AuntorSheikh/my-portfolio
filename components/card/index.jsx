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
        <a href="#">
        <Button  button="Download CV" imgSrc= {"../../images/downArrow.svg"}/>
        </a>
    </div>
</div>

    );
};