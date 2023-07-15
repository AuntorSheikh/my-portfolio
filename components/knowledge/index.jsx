import React from "react"
import Button from "../button";

const Knowledge = () =>{
    return(
        <>
        <div className="relative max-w-xl p-8 mx-auto mb-8 text-purple-800 bg-[#fffbeb] hover:bg-[#fce7f3] rounded-md shadow-2xl">
        <div className="flex">
             <a href="#">
                 <img className="rounded-full h-16 w-16 mr-8 flex items-center justify-center" src={"../../images/profile.png"} alt=" Picture " />
             </a>
             <input className="shadow appearance-none border md:rounded-full w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Start a Post"></input>
        </div>
        <div><hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr></div>
        
        <a href="#">
        <div className="flex justify-between md:justify-between h-10 md:h-full w-60 md:w-full">
            <Button button="Photo" imgSrc= {"../../images/photo.svg"}/>
            <Button button="Write Article" imgSrc= {"../../images/write.svg"}/>
        </div>
        </a>
        </div>
        </>

    );
};

export default Knowledge;