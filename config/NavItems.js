// config/NavItems.js

import { SlHome } from 'react-icons/sl'; // Simple Line Icons
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'; // Bootstrap Icons
import { FaTshirt, FaRedhat } from 'react-icons/fa'; // Font Awesome Icons

export const NavItems = [
  {
    href: '/',
    title: 'Homepage',
    icon: <SlHome size={20} />,
  },
  {
    href: '/about',
    title: 'About',
    icon: <BsInfoSquare size={20} />,
  },
  {
    href: '/contact',
    title: 'Contact',
    icon: <BsEnvelopeAt size={20} />,
  },
  {
    href: '/t-shirts',
    title: 'T-Shirts',
    icon: <FaTshirt size={20} />,
  },
  {
    href: '/hats',
    title: 'Hats',
    icon: <FaRedhat size={20} />,
  },
];
