import Image from "next/image";
import hamburgerIcon from "../public/header/Menu_Alt_01.svg"

export default function Header() {
    return (
        <div className={`Header z-50 h-20 xl:h-28 fixed top-0 left-0 w-full bg-[#FFFFFF] rounded-b-xl xl:bg-[#FFFFFF1A] xl:rounded-none`}>
            <div className={`h-full flex flex-row justify-between items-center py-2 mx-3 xl:py-5 xl:mx-7`}>
                <div className={`flex flex-col flex-shrink-0`}>
                    <div className={`relative m-0 p-0 w-full h-9 xl:h-12 `}>
                        <span className={`absolute top-0 bottom-0 w-full h-full bg-no-repeat bg-contain bg-left`} style={{ backgroundImage: `url('../header/BalanceLogo.png')`}}></span>
                    </div>
                    <div className={`text-xs xl:text-sm`}>Powered by EN-Novelty</div>
                </div>
                <nav className={`nav-desktop hidden xl:block `}>
                    <ul className={`flex flex-row justify-evenly gap-10 py-2 px-8 bg-white rounded-full`}>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">What's next</a></li>
                        <li><a href="#">Download guide</a></li>
                        <li>
                            <select className={``}>
                                <option value="EN">EN</option>
                                <option value="ZH">ZH</option>
                            </select>
                        </li>
                    </ul>
                </nav>
                <div className={`nav-mobile flex justify-end xl:hidden w-full `}>
                    <button className={`hamburger-icon relative m-0 p-0 `}>
                        <Image src={hamburgerIcon} width={48} alt="hamburger-icon" />
                    </button>    
                </div>

            </div>
        </div>
    );
  }
  