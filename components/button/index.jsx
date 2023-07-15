 function Button(props){
    return(
        <div href="#_" className="inline-flex overflow-hidden text-black relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 rounded group">
            <span className="px-3.5 py-2 text-white bg-[#f8fafc] group-hover:bg-purple-600 flex items-center justify-center">
            <a href="#">
        <img className="w-4 h-4 ml-2 -mr-1" src={props.imgSrc} alt=" Picture " />
    </a>
            </span>
        <span className="pl-4 pr-5 py-2.5 underline">{props.button}</span>
        </div>
    )
 };

 export default Button;

