import React from "react";

function Footer(){
    return(
        <footer className="bg-[#a3e635]  mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <div>
            <a className="ml-8 text-center font-normal text-blue-gray-900 md:mb-0">© 2022 Auntor. All rights reserved.</a>
            </div>
            <div className="flex flex-row">
                            <a
                                    className="px-2 py-2 rounded mr-2 inline-flex items-center hover:text-primary text-white"
                                    href="https://www.linkedin.com/in/md-auntor-shak/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <img
                                    src={"../../images/linkedin.svg"}
                                    alt="Linkedin"
                                />
                                </a>
                                <a
                                    className="px-2 py-2 rounded mr-2 inline-flex items-center hover:text-primary text-white"
                                    href="https://www.facebook.com/auntorshak123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 <img
                                    src={"../../images/facebook.svg"}
                                    alt="Facebook"
                                />
                                </a>
                                <a
                                    className="px-2 py-2 rounded mr-2 inline-flex items-center hover:text-primary text-white"
                                    href="https://www.instagram.com/auntor_sheikh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 <img
                                    src={"../../images/instagram.svg"}
                                    alt="Instagram"
                                />
                                </a>
                                <a
                                    className="px- py-2 rounded mr-2 inline-flex items-center hover:text-primary text-white"
                                    href="https://twitter.com/DevForHires"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 <img
                                    src={"../../images/twitter.svg"}
                                    alt="Twitter"
                                />
                                </a>
								</div> 
        </footer>
    );
};
export default Footer;