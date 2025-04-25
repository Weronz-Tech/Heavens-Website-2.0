// components/IconRenderer.js
import { 
    FaWifi, FaUtensils, FaShower, FaTshirt, FaLock, FaBolt,
    FaPlay, FaPause, FaWhatsapp, FaFacebook 
  } from 'react-icons/fa';
  import { 
    FiMapPin, FiPhone, FiMail, FiShare2, FiLink 
  } from 'react-icons/fi';
  import { 
    MdCleaningServices, MdLocalLaundryService 
  } from 'react-icons/md';
  
  const iconComponents = {
    FaWifi,
    FaUtensils,
    FaShower,
    FaTshirt,
    FaLock,
    FaBolt,
    FaPlay,
    FaPause,
    FaWhatsapp,
    FaFacebook,
    FiMapPin,
    FiPhone,
    FiMail,
    FiShare2,
    FiLink,
    MdCleaningServices,
    MdLocalLaundryService
  };
  
  export const IconRenderer = ({ iconName, ...props }) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent {...props} /> : null;
  };