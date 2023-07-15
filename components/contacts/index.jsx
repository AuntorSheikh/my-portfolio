import React from "react";

const Contact = () =>{
    return(
        <div>
            <div className="relative w-48 p-8  ml-8 text-purple-800 bg-[#fffbeb] hover:bg-[#fce7f3] rounded-md shadow-2xl">
            <h1 className="text-3xl">/Contacts</h1>
            <h5>Who am i?</h5>
        </div>
        <div className="flex justify-between">
            <h1 className="w-96 ml-8">
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </h1>
            <div className="flex flex-row mt-8">
            <div className="relative w-auto p-8  ml-8 text-purple-800 bg-[#fffbeb] hover:bg-[#fce7f3] rounded-md shadow-2xl">
                <div className="flex flex-col">
                    <h1>Support me here</h1>
                    <h1>+8801950588597</h1>
                </div>
            </div>
            <div className="relative w-auto p-8  ml-8 text-purple-800 bg-[#fffbeb] hover:bg-[#fce7f3] rounded-md shadow-2xl">
                <div className="flex flex-col">
                    <h1>Message me here</h1>
                    <div className="flex flex-row">
                    <a href="#">
                      <img className="w-4 h-4 mt-1 p-px flex items-center justify-center" src={"../../images/email.svg"} alt=" Picture " />
                    </a>
                    <h1 className="">auntor.shak@northsouth.edu</h1>
                    </div>
                </div>
            </div>
            </div>
            
        </div>

        </div>
    );
};
export default Contact;