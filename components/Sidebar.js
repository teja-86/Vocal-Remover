"use client"
// components/Sidebar.js
// "use client";
import { icons } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link"; // Use the Next.js Link component
import { BsPeople } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FiAlignLeft } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { TbShovelPitchforks } from "react-icons/tb";
import { FaWhiskeyGlass } from "react-icons/fa6";
import { useState } from "react";
import { TiContacts } from "react-icons/ti";
import { MdDashboard, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdRemoveRoad } from "react-icons/md";
import { SlCamrecorder } from "react-icons/sl";
import { MdEmojiFlags } from "react-icons/md";
import { MdOutlineCallSplit } from "react-icons/md";
import { IoIosCut } from "react-icons/io";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { GiJoin } from "react-icons/gi";


const sidebarItems = [
    {
        name : "Remover",
        href : "/",
        icon : MdRemoveRoad 
    },
    {
        name : "Spitter",
        href : "/splitter-ai",
        icon : MdOutlineCallSplit 
    },
    {
        name : "Pitcher",
        href : "/pitch",
        icon : TbShovelPitchforks 
    },
    {
        name : "Key BPM Finder",
        href : "/key-bpm-finder",
        icon : FaWhiskeyGlass 
    },
    {
        name : "Cutter",
        href : "/cutter",
        icon : IoIosCut 
    },
    {
        name : "Joiner",
        href : "/joiner",
        icon : GiJoin 
    },
    {
        name : "Recorder",
        href : "/voice-recorder",
        icon : SlCamrecorder 
    },
    {
        name : "Karaoke",
        href : "/karaoke",
        icon : BsFillRecordCircleFill 
    },
    {
        name : "Support",
        href : "/support",
        icon : FiMail 
    },
    {
        name : "",
        href : "/support",
        icon : MdEmojiFlags 
    },
    

]

export default function Sidebar() {

    const [isCollasedSidebar, setIsCollasedSidebar] = useState(false);
    const toggleSidebarCollaseHandler = () => {
        setIsCollasedSidebar((prev) => !prev);
    }
    return (
        <div className="sidebar__wrapper">
            <button className="btn" onClick={toggleSidebarCollaseHandler}>
                <MdOutlineKeyboardArrowLeft/>
            </button>
            <aside className="sidebar" data-collapse = {isCollasedSidebar}>
                <div className="sidebar_top">
                    <button className="btn_top" onClick={toggleSidebarCollaseHandler}>
                    <FiAlignLeft />
                    </button>
                </div>
                <ul className="sidebar__list">
                   {sidebarItems.map(({name, href, icon : Icon}) => (
                         <li className="sidebar__item" key={name}>
                         <Link href={href} className="sidebar__link">
                             <span className="sidebar__icon">
                                 <Icon />
                             </span>
                             <span className="sidebar__name">{name}</span>
                         </Link>
                     </li>
                   ))}
                </ul>
            </aside>
        </div>
    );
}
