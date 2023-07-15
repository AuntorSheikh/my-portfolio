 function Button(props){
    return(
        <a href="#_" class="inline-flex overflow-hidden text-black relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 rounded group">
            <span class="px-3.5 py-2 text-white bg-[#500724] group-hover:bg-purple-600 flex items-center justify-center">
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2001/svg"><path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </span>
        <span class="pl-4 pr-5 py-2.5 underline">{props.button}</span>
        </a>
    )
 };

 export default Button;

