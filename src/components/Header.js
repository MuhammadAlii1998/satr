import React from "react";
import Logo from "./../images/SatrLogo.png";
const Header = () => {
    return(
        <div>
            <div className=" flex justify-center  w-[100%] h-[28px] top-header-bg">
                <h1 className="text-white font-extrabold "> Merging Style with Elegance</h1>
            </div>
            <div className="flex w-[100%] h-[100px] bg-black">
                <div className="float-left ml-1 ">
                    <img src={Logo} alt="Logo" width="100px" />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Header;