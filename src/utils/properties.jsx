import {
  FaWifi, FaUtensils, FaShower, FaTshirt, FaBolt,
  FaUserShield,
  FaVideo,
  FaDoorOpen,
  FaGamepad,
  FaHamburger,
  FaUsers,
  FaDumbbell,
  FaBuilding,
  FaDice,
  FaCogs,
  FaGlassMartiniAlt,
  FaBook,
  FaLaptop,
  FaSpa,
  FaDoorClosed,
  FaArrowAltCircleUp,
  FaTv,
  FaHotTub,
  FaTint,
  FaIceCream,
  FaCoffee
} from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import {
  MdBathtub,
  MdCleaningServices, MdHome, MdKitchen, MdLocalLaundryService
} from 'react-icons/md';
import home3 from "../assets/images/home3.jpg";
import roombed from "../assets/images/roombed.jpg";
import dining from "../assets/images/dining.jpg";
import roomwithtv from "../assets/images/roomwithtv.jpg";
import video1 from '../assets/videos/homeV.mp4';
import video2 from '../assets/videos/bloominn.mp4';
import boominn from "../assets/images/boominn.jpg";
import bloominn1 from "../assets/images/blomminnroom1.jpg";
import bloominn2 from "../assets/images/bloominnroom2.jpg";
import bloominn3 from "../assets/images/bloominnroom3.jpg";

export const properties = [
  {
    id: 'flora-inn',
    name: "Flora Inn",
    location: "92 Sannidhi Layout, Bande Nalla Sandra Near HCL Tech Gate No 2,Jigani, Bommasandra, Bengaluru",
    map: "https://maps.app.goo.gl/RCRkL4mjuACrwGwy8",
    description: "Flora Inn blends timeless aesthetics with modern essentials—designed for students and professionals seeking a stylish, peaceful, and connected place to live",
    images: [
      { type: 'image', url: home3 },
      { type: 'image', url: dining },
      { type: 'video', url: video1 },
      { type: 'image', url: roombed },
      { type: 'image', url: roomwithtv },
    ],
    amenities: [
      { name: "High-Speed WIFI", icon: <FaWifi /> }, // Wi-Fi icon is appropriate for Wi-Fi
      { name: "CCTV", icon: <FaVideo /> }, // CCTV can use the FaVideo icon (security camera)
      { name: "Security", icon: <FaUserShield /> }, // FaUserShield is ideal for Security
      { name: "Housekeeping", icon: <MdCleaningServices /> }, // MdCleaningServices works well for Housekeeping
      { name: "Spacious Cupboard", icon: <FaDoorClosed /> },
      { name: "24/7 Power Backup", icon: <FaBolt /> }, // FaBolt is suitable for Power Backup
      { name: "Washing Machine", icon: <MdLocalLaundryService /> }, // MdLocalLaundryService is great for Laundry
      { name: "Daily Meals", icon: <FaUtensils /> }, // FaUtensils is perfect for Meals
      { name: "Attached Bathroom", icon: <FaShower /> }, // FaShower fits the Attached Bathroom concept
      { name: "Lift", icon: <FaArrowAltCircleUp /> }, // Represents upward movement, suitable for elevator
      { name: "Streaming TV", icon: <FaTv /> }, // FaTv directly represents a television
      { name: "Water Purifier", icon: <FaTint /> }, // FaTint represents water and purification, symbolizing clean water.
      { name: "Hot Water Supply", icon: <FaHotTub /> }, // FaHotTub symbolizes heated water facilities very well
      { name: "Linen Provided", icon: <FaTshirt /> }, // FaTshirt works for Linen Provided (clothing)
      { name: "Self Kitchen", icon: <MdKitchen /> },
      { name: "Refrigerator", icon: <FaIceCream /> },
    ],
    foodPlan: {
      included: true,
      description: "Nutritious and hygienic meals served daily in our dining area",
      sampleMenu: {
        breakfast: ["Idli-Sambar", "Poha", "Dosa", "Upma", "Bread-Jam", "Paratha"],
        lunch: ["Rice-Dal-Sabzi", "Rajma-Rice", "Vegetable Biryani", "Sambar-Rice", "Chapati-Curry"],
        dinner: ["Roti-Curry", "Pasta", "Noodles", "Dosa", "Khichdi", "Sandwiches"]
      }
    },
    startingPrice: "₹6,500/month",
    oneSharing: "16,000/mo*",
    twoSharing: "8,000/mo*",
    threeSharing: "7,000/mo*",
    fourSharing: "6,500/mo*",
    deposit: "₹10,000 (refundable)",
    preferredBy: 'Boys',
    contact: {
      phone: "+91 9876543210",
      email: "contact@florainn.com"
    },
    occupancyTypes: ["Single", "Double", "Triple"],
    rules: [
      "No smoking in rooms",
      "Visitors allowed only in common areas",
      "Quiet hours after 11 PM",
      "Monthly rent payment in advance"
    ],
    services: [
      { name: "24/7 Gate Open", icon: <FaDoorOpen /> }, // FaDoorOpen is suitable for 24/7 gate open
      { name: "Entertainment Zone", icon: <FaGamepad /> }, // FaGamepad works well for Entertainment Zone
      { name: "Barbeque Area", icon: <FaHamburger /> }, // FaHamburger is a good fit for BBQ or food-related services
      { name: "Gathering Area", icon: <FaUsers /> }, // FaUsers icon represents a Gathering Area
      { name: "Workout Zone", icon: <FaDumbbell /> }, // FaDumbbell fits perfectly for a gym or fitness-related service
      { name: "Meditation Area", icon: <FaSpa /> }, // FaLotus is ideal for a Meditation Area
      { name: "Attached Bathroom", icon: <MdBathtub /> },
      { name: "Cooking Lounge", icon: <GiCookingPot /> },
      { name: "Attached Balcony", icon: <MdHome /> }, // FaBalcony directly represents a balcony or outdoor space
      { name: "Dining Area", icon: <FaBuilding /> }, // FaBuilding works for AC Dining Hall (large enclosed space)
      { name: "Unlimited Juice", icon: <FaGlassMartiniAlt /> }, // FaGlassMartiniAlt fits Unlimited Juice or beverage services
      { name: "Customised Rooms", icon: <FaCogs /> }, // FaCogs is appropriate for Customised Rooms (adjustment or personalization)
      { name: "Study Area", icon: <FaBook /> }, // FaBook works for a Study Area
      { name: "Indoor & Outdoor Games", icon: <FaGamepad /> }, // FaGamepad symbolizes general gameplay and recreation
      { name: "Work Area", icon: <FaLaptop /> }, // FaLaptop fits the concept of a Workspace
      { name: "Integrated Cafe", icon: <FaCoffee /> }, // FaCoffee represents a cafe or coffee-related space, perfect for a cafe
    ],
    weeklyMenu: [
      {
        day: "MONDAY",
        breakfast: "DOSA, TOMATO CHUTNEY, SAMBAR",
        lunch: "MEALS, RICE, SAMBAR, AVIVAL, PAPADAM",
        dinner: "CHAPTER, MASALA CURRY"
      },
      {
        day: "TUESDAY",
        breakfast: "POORI, BAAJI",
        lunch: "MEALS, MORUCURRY, THORAN",
        dinner: "MANDI RICE MAYONNAISE"
      },
      {
        day: "WEDNESDAY",
        breakfast: "PUTTU, KADALA",
        lunch: "RICE, PAPPADAM, PACHADI, PULIYINCHI",
        dinner: "POROTTA, GREEN BEANS, CHICKEN CURRY"
      },
      {
        day: "THURSDAY",
        breakfast: "IDLI, SAMBAR",
        lunch: "MEALS, FISH CURRY/VEG CURRY, THORAN, PICKEL",
        dinner: "GHEE RICE, DHAL CURRY"
      },
      {
        day: "FRIDAY",
        breakfast: "DOSA, TOMATO CHUTNEY, COCONUT CHUTNEY",
        lunch: "CHOR, SOYA BEAN, UPPERI",
        dinner: "EGG BIRIYANI"
      },
      {
        day: "SATURDAY",
        breakfast: "PASTHA, KETCHUP",
        lunch: "MEALS, VEG CURRY, THORAN, PICKEL",
        dinner: "CHAPTER, BAAJI CURRY"
      },
      {
        day: "SUNDAY",
        breakfast: "UPMAVU, BANANA",
        lunch: "MEALS, VEG CURRY, RASAM",
        dinner: "BIRIYANI DUM SPECIAL"
      }
    ]
  },


  {
    id: 'bloom-inn',
    name: "Bloom Inn",
    location: "92 Sannidhi Layout, Bande Nalla Sandra Near HCL Tech Gate No 2,Jigani, Bommasandra, Bengaluru",
    map: "https://maps.app.goo.gl/RDskfcqg4mZW2KPw7",
    description: "Bloom Inn redefines modern living with effortless elegance—a harmonious blend of style, comfort, and convenience designed for students and professionals seeking a refined retreat",
    images: [
      { type: 'image', url: boominn },
      { type: 'image', url: bloominn2 },
      { type: 'video', url: video2 },
      { type: 'image', url: bloominn1 },
      { type: 'image', url: bloominn3 },
    ],
    amenities: [
      { name: "High-Speed WIFI", icon: <FaWifi /> }, // Wi-Fi icon is appropriate for Wi-Fi
      { name: "CCTV", icon: <FaVideo /> }, // CCTV can use the FaVideo icon (security camera)
      { name: "Security", icon: <FaUserShield /> }, // FaUserShield is ideal for Security
      { name: "Housekeeping", icon: <MdCleaningServices /> }, // MdCleaningServices works well for Housekeeping
      { name: "Spacious Cupboard", icon: <FaDoorClosed /> },
      { name: "24/7 Power Backup", icon: <FaBolt /> }, // FaBolt is suitable for Power Backup
      { name: "Washing Machine", icon: <MdLocalLaundryService /> }, // MdLocalLaundryService is great for Laundry
      { name: "Daily Meals", icon: <FaUtensils /> }, // FaUtensils is perfect for Meals
      { name: "Attached Bathroom", icon: <FaShower /> }, // FaShower fits the Attached Bathroom concept
      { name: "Lift", icon: <FaArrowAltCircleUp /> }, // Represents upward movement, suitable for elevator
      { name: "Streaming TV", icon: <FaTv /> }, // FaTv directly represents a television
      { name: "Water Purifier", icon: <FaTint /> }, // FaTint represents water and purification, symbolizing clean water.
      { name: "Hot Water Supply", icon: <FaHotTub /> }, // FaHotTub symbolizes heated water facilities very well
      { name: "Linen Provided", icon: <FaTshirt /> }, // FaTshirt works for Linen Provided (clothing)
      { name: "Self Kitchen", icon: <MdKitchen /> },
      { name: "Refrigerator", icon: <FaIceCream /> },
    ],
    foodPlan: {
      included: true,
      description: "Delicious and balanced meals prepared with fresh ingredients",
      sampleMenu: {
        breakfast: ["Pongal", "Upma", "Idli-Vada", "Bread-Omelette", "Poha", "Dosa"],
        lunch: ["Jeera Rice-Dal", "Palak Paneer-Roti", "Vegetable Fried Rice", "Curd Rice", "Rajma Chawal"],
        dinner: ["Chole Bhature", "Veg Noodles", "Methi Paratha", "Pav Bhaji", "Upma", "Sandwiches"]
      }
    },
    startingPrice: "₹6,000/month",
    oneSharing: "16,000/mo*",
    twoSharing: "8,000/mo*",
    threeSharing: "7,000/mo*",
    fourSharing: "6,500/mo*",
    fiveSharing: "6,000/mo*",
    deposit: "₹12,000 (refundable)",
    preferredBy: 'Girls',
    contact: {
      phone: "+91 9876543211",
      email: "info@bloominn.com"
    },
    occupancyTypes: ["Single", "Double", "Triple", "Quad"],
    rules: [
      "No smoking or alcohol",
      "Visitor hours: 10AM-8PM",
      "Silent hours: 10PM-7AM",
      "Rent due on 1st of each month",
      "Keep common areas clean"
    ],
    services: [
      { name: "24/7 Gate Open", icon: <FaDoorOpen /> }, // FaDoorOpen is suitable for 24/7 gate open
      { name: "Entertainment Zone", icon: <FaGamepad /> }, // FaGamepad works well for Entertainment Zone
      { name: "Barbeque Area", icon: <FaHamburger /> }, // FaHamburger is a good fit for BBQ or food-related services
      { name: "Gathering Area", icon: <FaUsers /> }, // FaUsers icon represents a Gathering Area
      { name: "Workout Zone", icon: <FaDumbbell /> }, // FaDumbbell fits perfectly for a gym or fitness-related service
      { name: "Meditation Area", icon: <FaSpa /> }, // FaLotus is ideal for a Meditation Area
      { name: "Attached Bathroom", icon: <MdBathtub /> },
      { name: "Cooking Lounge", icon: <GiCookingPot /> },
      { name: "Attached Balcony", icon: <MdHome /> }, // FaBalcony directly represents a balcony or outdoor space
      { name: "Dining Area", icon: <FaBuilding /> }, // FaBuilding works for AC Dining Hall (large enclosed space)
      { name: "Unlimited Juice", icon: <FaGlassMartiniAlt /> }, // FaGlassMartiniAlt fits Unlimited Juice or beverage services
      { name: "Customised Rooms", icon: <FaCogs /> }, // FaCogs is appropriate for Customised Rooms (adjustment or personalization)
      { name: "Study Area", icon: <FaBook /> }, // FaBook works for a Study Area
      { name: "Indoor & Outdoor Games", icon: <FaGamepad /> }, // FaGamepad symbolizes general gameplay and recreation
      { name: "Work Area", icon: <FaLaptop /> }, // FaLaptop fits the concept of a Workspace
      { name: "Integrated Cafe", icon: <FaCoffee /> }, // FaCoffee represents a cafe or coffee-related space, perfect for a cafe
    ],
    weeklyMenu: [
      {
        day: "MONDAY",
        breakfast: "DOSA, TOMATO CHUTNEY, SAMBAR",
        lunch: "MEALS, RICE, SAMBAR, AVIVAL, PAPADAM",
        dinner: "CHAPTER, MASALA CURRY"
      },
      {
        day: "TUESDAY",
        breakfast: "POORI, BAAJI",
        lunch: "MEALS, MORUCURRY, THORAN",
        dinner: "MANDI RICE MAYONNAISE"
      },
      {
        day: "WEDNESDAY",
        breakfast: "PUTTU, KADALA",
        lunch: "RICE, PAPPADAM, PACHADI, PULIYINCHI",
        dinner: "POROTTA, GREEN BEANS, CHICKEN CURRY"
      },
      {
        day: "THURSDAY",
        breakfast: "IDLI, SAMBAR",
        lunch: "MEALS, FISH CURRY/VEG CURRY, THORAN, PICKEL",
        dinner: "GHEE RICE, DHAL CURRY"
      },
      {
        day: "FRIDAY",
        breakfast: "DOSA, TOMATO CHUTNEY, COCONUT CHUTNEY",
        lunch: "CHOR, SOYA BEAN, UPPERI",
        dinner: "EGG BIRIYANI"
      },
      {
        day: "SATURDAY",
        breakfast: "PASTHA, KETCHUP",
        lunch: "MEALS, VEG CURRY, THORAN, PICKEL",
        dinner: "CHAPTER, BAAJI CURRY"
      },
      {
        day: "SUNDAY",
        breakfast: "UPMAVU, BANANA",
        lunch: "MEALS, VEG CURRY, RASAM",
        dinner: "BIRIYANI DUM SPECIAL"
      }
    ]
  },
];