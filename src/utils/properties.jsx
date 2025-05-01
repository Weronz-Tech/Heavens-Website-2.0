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

export const properties = [
  {
    id: 'flora-inn',
    name: "Flora Inn",
    location: "92 Sannidhi Layout, Bande Nalla Sandra Near HCL Tech Gate No 2,Jigani, Bommasandra, Bengaluru",
    map: "https://maps.app.goo.gl/RCRkL4mjuACrwGwy8",
    description: "Flora Inn blends timeless aesthetics with modern essentials—designed for students and professionals seeking a stylish, peaceful, and connected place to live",
    images: [
      { type: 'image', url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
      { type: 'image', url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
      { type: 'video', url: "https://example.com/video.mp4" },
      { type: 'image', url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
      { type: 'image', url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
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
        day: "Monday",
        breakfast: "Idli-Sambar",
        lunch: "Rice-Dal-Sabzi",
        dinner: "Roti-Curry"
      },
      {
        day: "Tuesday",
        breakfast: "Poha",
        lunch: "Rajma-Rice",
        dinner: "Pasta"
      },
      {
        day: "Wednesday",
        breakfast: "Dosa",
        lunch: "Vegetable Biryani",
        dinner: "Noodles"
      },
      {
        day: "Thursday",
        breakfast: "Upma",
        lunch: "Sambar-Rice",
        dinner: "Dosa"
      },
      {
        day: "Friday",
        breakfast: "Bread-Jam",
        lunch: "Chapati-Curry",
        dinner: "Khichdi"
      },
      {
        day: "Saturday",
        breakfast: "Paratha",
        lunch: "Rice-Dal-Sabzi",
        dinner: "Sandwiches"
      },
      {
        day: "Sunday",
        breakfast: "Idli-Sambar",
        lunch: "Vegetable Biryani",
        dinner: "Roti-Curry"
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
      { type: 'image', url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
      { type: 'image', url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
      { type: 'video', url: "https://example.com/bloom-video.mp4" },
      { type: 'image', url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
      { type: 'image', url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" },
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
        day: "Monday",
        breakfast: "Pongal",
        lunch: "Jeera Rice-Dal",
        dinner: "Chole Bhature"
      },
      {
        day: "Tuesday",
        breakfast: "Upma",
        lunch: "Palak Paneer-Roti",
        dinner: "Veg Noodles"
      },
      {
        day: "Wednesday",
        breakfast: "Idli-Vada",
        lunch: "Vegetable Fried Rice",
        dinner: "Methi Paratha"
      },
      {
        day: "Thursday",
        breakfast: "Bread-Omelette",
        lunch: "Curd Rice",
        dinner: "Pav Bhaji"
      },
      {
        day: "Friday",
        breakfast: "Poha",
        lunch: "Rajma Chawal",
        dinner: "Upma"
      },
      {
        day: "Saturday",
        breakfast: "Dosa",
        lunch: "Jeera Rice-Dal",
        dinner: "Sandwiches"
      },
      {
        day: "Sunday",
        breakfast: "Pongal",
        lunch: "Palak Paneer-Roti",
        dinner: "Chole Bhature"
      }
    ]
  },
];