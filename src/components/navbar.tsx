import { useWindowSize } from "@/hooks/useWindowSize"
import { BreakPoints } from "@/hooks/breakpoints";
import { useState } from 'react';
const { mobileSize, tabletSize, laptopSize } = BreakPoints()

function getInTouchButton(windowWidth: number) {
    if (windowWidth < laptopSize) {
        return (
            <li className="nav-item ps-3 py-2 w-100 bg-light" >
                <a className='nav-link'  href="#"><strong>Get in touch</strong></a>
            </li>
        )
    }

    return (
        <div className="btn btn-secondary mr-2 rounded-pill m-3'">
            Get in touch
        </div>
    )
}


export default function Navbar() {
    const { width } = useWindowSize();
    const deviceIsMobile = width < laptopSize
    return (
        <nav className={"navbar fixed-top navbar-expand-lg navbar-light bg-white d-flex justify-content-evenly " + (deviceIsMobile ? "p-0 navbar-expand-lg" : "p-3")}>
            <div className='d-flex flex-nowrap justify-content-evenly'>
                <div className="navbar-brand"><img src={deviceIsMobile ? `/imgs/J_W dark noB - fav.svg` : "/imgs/Full name-stacked.svg"} /></div>
            </div>
            <div className="navbar-collapse collapsed transition bg-none p-0" id="navbarText" >
                <div className={"d-flex justify-content-between w-100 p-0 " + (deviceIsMobile ? `flex-column` : "")}>
                    <ul className="navbar-nav w-auto mr-auto">
                        <li className="nav-item ps-3 active">
                            <a className='nav-link description' href="#">Bio</a>
                        </li>
                        <li className="nav-item ps-3">
                            <a className='nav-link experience' href="#">Experiences</a>
                        </li>
                        <li className="nav-item ps-3">
                            <a className='nav-link skills' href="#">Skills</a>
                        </li>
                        <li className="nav-item ps-3">
                            <a className='nav-link education' href="#">Education</a>
                        </li>
                        {deviceIsMobile && getInTouchButton(width)}
                    </ul>
                    {!deviceIsMobile && getInTouchButton(width)}
                </div>
            </div>
        </nav>
    )
}
