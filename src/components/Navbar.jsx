import logo from "../images/logo.png";
import styles from "../css/Navbar.module.css";
import { useState } from "react";
import bar from '../images/togle.png';
import cross from '../images/cross.png';



function Navbar() {

    const [togle, settogle] = useState(bar)
    const [menu, setMenu] = useState(false)

    const handleOnclick = () => {
        if (togle == bar) {
            settogle(cross)
            setMenu(true)
        }
        if (togle == cross) {
            settogle(bar)
            setMenu(false)
        }

    }


    return <>
        <section className={`${styles.navbar}`}>
            <div className={`${styles.nav} justify-between items-center px-10 py-2`}>
                <div className={`${styles.logo} w-[50%]`}>
                    <img src={logo} alt="" />
                </div>
                <div className={`${styles.menu} text-white flex w-[50%] justify-between`}>
                    <a href="#">
                        Home
                    </a>
                    <a href="#">
                        Events
                    </a>
                    <a href="#">
                        Projects
                    </a>
                    <a href="#">
                        Out Team
                    </a>
                    <a href="#">
                        Contact Us
                    </a>
                </div>
                <div className={`${styles.togle}`} onClick={() => handleOnclick()}>
                    <img className="w-[45px]" src={togle} alt="" />
                </div>
            </div>
            <div className="hr h-[0.5px] bg-zinc-500"></div>
        </section>

       {menu?  <section className={`${styles.mobile_menu}`}>
            <div className={`${styles.menu} text-white w-full`}>
                <a href="#">
                    Home
                </a>
                <a href="#">
                    Events
                </a>
                <a href="#">
                    Projects
                </a>
                <a href="#">
                    Out Team
                </a>
                <a href="#">
                    Contact Us
                </a>
            </div>
        </section> : ""}
    </>
}

export default Navbar