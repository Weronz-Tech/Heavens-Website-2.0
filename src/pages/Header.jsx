import CTA from '../components/CTA';
import video from '../assets/videos/heavens-video.mp4';
import app1 from "../assets/images/app1.png";
import app2 from "../assets/images/app2.png";
import app3 from "../assets/images/app3.png";
import app4 from "../assets/images/app4.jpg";
import { useRef } from 'react';
import { FaRegSmileBeam, FaSpa } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';


const Header = () => {

  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      number: '01',
      title: "Resident Registration",
      desc: "Upon registration, residents can log in, complete their profiles, and access all community features seamlessly.",
      img: `${app1}`,
      label: "Complete Your Profile"
    },
    {
      number: '02',
      title: "Meal Booking System",
      desc: "Residents can easily book their daily meals and special dietary requirements through our intuitive meal planning interface.",
      img: `${app2}`,
      label: "Book Your Meals"
    },
    {
      number: '03',
      title: "Heavens Café & Restaurant",
      desc: "Explore our premium dining options, place orders from the café menu, and reserve tables at our restaurant - all within the app.",
      img: `${app3}`,
      label: "Dining & Reservations"
    },
    {
      number: '04',
      title: "Payment & History",
      desc: "Easily manage payments, track your transaction history, and stay updated on any outstanding dues through your dashboard.",
      img: `${app4}`,
      label: "View Payment History"
    }
  ];

  // Optional auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const MagneticButton = ({ children, onClick, className }) => {
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
      const button = buttonRef.current;
      button.style.transform = "translate(0px, 0px)";
    };

    return (
      <button
        ref={buttonRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative inline-block transition-transform duration-300 ease-out ${className}`}
      >
        {children}
      </button>
    );
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const clipReveal = {
    hidden: {
      opacity: 0,
      clipPath: 'inset(100% 0 0 0)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0 0 0)',
      transition: {
        duration: 1,
        ease: [0.65, 0.05, 0.36, 1],
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream-50 h-screen relative overflow-hidden">
        {/* 🔹 Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffff] to-transparent"></div>
        </div>

        {/* 🔸 Foreground Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="space-y-3 text-[#101828]"
          >
            <motion.h2
              variants={clipReveal}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
              style={{ lineHeight: '1.2' }} // Adjusted line-height and letter-spacing
            >
              Where{' '}
              <span className="italic font-serif text-[#631930]">Elegance</span> Meets
            </motion.h2>

            <motion.h1
              variants={clipReveal}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font- italic font-serif text-[#631930]"
              style={{ lineHeight: '1.2' }} // Adjusted line-height and letter-spacing
            >
              Heavenly Living
            </motion.h1>
          </motion.div>

          {/* Button without hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <MagneticButton className="mt-10 md:mt-14 px-8 py-3 border border-[#631930] text-[#631930] font-semibold rounded-full shadow-md bg-white">
              <Link
                to="/properties"
                className="inline-flex items-center text-base md:text-lg"
              >
                Explore Our Properties
                <HiArrowUpRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Resident Journey Section */}
      <section className="relative overflow-hidden bg-cream-50 md:p-8">
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[#8B5A2B]/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-20 w-72 h-72 rounded-full bg-[#101828]/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-28 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience Your <span className="text-[#631930] font-serif italic">Heavenly</span> Journey
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Seamless refinement awaits you — from your first moment to every day at Heavens Living
            </motion.p>
          </div>

          {/* Story Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-[#8B5A2B]/20 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Story Items */}
            <div className="space-y-28 lg:space-y-36">
              {/* 1. Welcome Experience */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="lg:pr-20"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[#631930] text-sm font-medium mb-4">STEP 01</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">Tailored Reception</h3>
                  <p className="text-gray-600 mb-6">
                    Our concierge team greets you with warm hospitality, ensuring a smooth transition to your new home. Experience personalized onboarding with all amenities prepared to perfection.
                  </p>
                  <ul className="space-y-3">
                    {['24/7 concierge service', 'Personalized assistance', 'Seamless transition support', 'Exclusive welcome amenities'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#631930]/10 flex items-center justify-center mr-3">
                          <div className="w-2 h-2 rounded-full bg-[#631930]"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
                    alt="Luxury reception"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
                    <h4 className="text-white text-xl font-medium">Our Grand Lobby</h4>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 -left-3 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#8B5A2B] border-4 border-[#faf6f2] z-10"></div>
                </motion.div>
              </div>

              {/* 2. Accommodation */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="lg:order-2 lg:pl-20"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[#631930] text-sm font-medium mb-4">STEP 02</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">Your Private Sanctuary</h3>
                  <p className="text-gray-600 mb-6">
                    Step into your meticulously designed residence, where every detail reflects refined living. Premium furnishings, smart home features, and personalized spaces await.
                  </p>
                  <ul className="space-y-3">
                    {['Premium bedding', 'Smart lighting', 'Ergonomic workspace', 'Housekeeping'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#631930]/10 flex items-center justify-center mr-3">
                          <div className="w-2 h-2 rounded-full bg-[#631930]"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="lg:order-1 relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-glamping-illustration_23-2149377094.jpg?t=st=1745841968~exp=1745845568~hmac=0750f37b39726eaac116d453a6467924519146e758fa02d06dc9565e1022af9b&w=826"
                    alt="Premium room"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
                    <h4 className="text-white text-xl font-medium">Signature Suite</h4>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 -left-3 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#631930] border-4 border-[#faf6f2] z-10"></div>
                </motion.div>
              </div>

              {/* 3. Dining Experience */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="lg:pr-20"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[#631930] text-sm font-medium mb-4">STEP 03</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">Exceptional Dining</h3>
                  <p className="text-gray-600 mb-6">
                    Enjoy chef-crafted meals in elegant, thoughtfully designed settings. Our seasonal menus are both nutritious and flavorful, tailored to every preference.
                  </p>
                  <ul className="space-y-3">
                    {['Daily chef specials', 'Nutritionist-approved', 'Elegant dining settings', 'Seasonal culinary events'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#631930]/10 flex items-center justify-center mr-3">
                          <div className="w-2 h-2 rounded-full bg-[#631930]"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-iranian-woman-illustration_23-2149857688.jpg?t=st=1745842118~exp=1745845718~hmac=7874a546fffc278ab51f8739530a854e1b0b6d8e62583a3947f760123985192f&w=900"
                    alt="Dining area"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
                    <h4 className="text-white text-xl font-medium">Gourmet Dining Hall</h4>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 -left-3 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#631930] border-4 border-[#faf6f2] z-10"></div>
                </motion.div>
              </div>

              {/* 4. Homestyle Meals */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="lg:order-2 lg:pl-20"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[#631930] text-sm font-medium mb-4">STEP 04</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">Daily Homestyle Meals</h3>
                  <p className="text-gray-600 mb-6">
                    Enjoy nutritious, home-cooked meals prepared fresh every day. Our kitchen offers balanced menus that bring the comfort of traditional flavors to your everyday routine.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Freshly cooked vegetarian and non-vegetarian meals',
                      'Weekly rotating menus',
                      'Balanced and hygienic food',
                      'Special weekend treats',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#631930]/10 flex items-center justify-center mr-3">
                          <div className="w-2 h-2 rounded-full bg-[#631930]"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="lg:order-1 relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://img.freepik.com/free-photo/indian-thali-traditional-food_466689-76204.jpg?w=1380"
                    alt="Homestyle Food"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-8">
                    <h4 className="text-white text-xl font-medium">Comfort on Every Plate</h4>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 -left-3 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#631930] border-4 border-[#faf6f2] z-10"></div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column */}
            <div>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12 text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-serif italic text-[#631930]">Seamless</span> Living, <span className="font-serif italic text-[#631930]">Connected</span> Through Smart Solutions
              </motion.h2>

              {/* Scaled Wrapper */}
              <div className="transform scale-85 md:scale-90 lg:scale-90 mx-auto">
                <motion.div
                  className="relative w-full aspect-square max-w-md mx-auto h-[600px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Device Frame */}
                  <div className="absolute w-[300px] inset-0 rounded-[40px] border-[14px] border-gray-900 overflow-hidden shadow-2xl z-10 ml-7"></div>

                  {/* Screen Content */}
                  <div className="absolute w-[285px] inset-3 rounded-[32px] overflow-hidden bg-gray-100 ml-7">
                    {/* App Screens */}
                    <motion.div
                      className="absolute inset-0 flex"
                      animate={{ x: `-${activeFeature * 100}%` }}
                      transition={{ type: "spring", stiffness: 400, damping: 40, duration: 0.1 }}
                    >
                      {features.map((feature, i) => (
                        <div key={i} className="min-w-full h-full relative">
                          <img
                            src={feature.img}
                            alt={feature.label}
                            className="w-[275px] h-full"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-[188px] transform -translate-x-1/2 w-[120px] h-7 bg-gray-900 rounded-b-xl z-20"></div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - App Features List */}
            <div>
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className={`border-t border-[#e8e0d5] py-6 md:py-7  group ${activeFeature === i ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ opacity: 1 }}
                  animate={activeFeature === i ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                  onClick={() => setActiveFeature(i)}
                >
                  <div className="flex items-start justify-between cursor-pointer">
                    <div className="flex-1">
                      <div className="text-[#631930] font-mono text-xs tracking-wider">
                        {feature.number}
                      </div>
                      <h3 className="text-xl md:text-2xl font-medium text-gray-800 group-hover:text-[#631930] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                    <motion.div
                      className="text-gray-300 group-hover:text-[#8B5A2B] transition-colors duration-300 flex items-center ml-4"
                      whileHover={{ x: 5 }}
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* App Store Badges */}
              <div className="flex gap-4 mt-3 justify-center lg:justify-start">
                <motion.a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#631930] text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  App Store
                </motion.a>

                <motion.a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#631930] text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-.56-5.36L6.05 2.66l8.49 8.49 2.27-2.27zm6.53 3.94c.39-.39.39-1.02 0-1.41l-2.26-2.26c-.39-.39-1.02-.39-1.41 0l-1.71 1.71 3.67 3.67 1.71-1.71z" />
                  </svg>
                  Play Store
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 md:pl-9 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">

            {/* Left Content Section - No changes needed here */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mx-auto md:mx-0"
              >
                <h2 className="text-3xl md:text-5xl mb-6 font-light leading-tight">
                  <span className="italic text-[#631930] font-serif">Living</span>, Not Just Residing
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  At Heavens Living, life blossoms through togetherness, laughter, and shared experiences. More than just a place to live, it's a thriving community where every day brings new friendships, heartfelt celebrations, and lasting memories.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[{
                    Icon: FaRegSmileBeam,
                    title: "Moments That Matter",
                    desc: "From casual gatherings to joyful celebrations, every moment here brings neighbors closer and creates memories that last a lifetime."
                  }, {
                    Icon: FaSpa,
                    title: "Wellness in Every Step",
                    desc: "Shared journeys in health, mindfulness, and happiness — nurturing both body and spirit through meaningful community experiences."
                  }].map(({ Icon, title, desc }, i) => (
                    <motion.div
                      key={i}
                      className="p-6 rounded-xl shadow-md"
                    >
                      <div className="text-[#631930] mb-3">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    {[1, 2, 3, 4].map((item) => (
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        key={item}
                        src={`https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162179.jpg?w=826`}
                        alt="Community member"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 ml-10 md:ml-0">
                    <span className="font-medium text-gray-800">150+ residents</span> growing, thriving, and celebrating life together
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Animated Images Section - Modified for mobile */}
            <div className="md:w-1/2 relative h-[500px]">
              {/* Main Center Card */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <motion.div
                  className="w-[200px] h-[240px] md:w-72 md:h-96 rounded-xl shadow-xl overflow-hidden relative transition-all duration-700 hover:shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
                    alt="Happy community moment"
                    className="w-full h-full object-cover"
                  />
                  <h3 className="absolute bottom-10 left-4 text-white text-xl font-medium">Moments of Joy</h3>
                  <p className="absolute bottom-4 left-4 text-white/80 text-sm">Living life, together</p>
                </motion.div>
              </motion.div>

              {/* Mobile View - Static Layout */}
              <div className="md:hidden absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full p-8">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl overflow-hidden shadow-md"
                    >
                      <img
                        src={`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80`}
                        alt={`Happy moment ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop View - Rotating Cards */}
              <div className="hidden md:block">
                {[1, 2, 3, 4].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="absolute w-28 md:w-44 h-40 md:h-60 rounded-xl overflow-hidden shadow-lg"
                    style={{
                      transform: `rotate(${index * 90}deg) translateX(180px) rotate(-${index * 90}deg)`,
                      animation: `orbit 16s linear infinite`,
                      animationDelay: `${index * -4}s`,
                      top: '50%',
                      left: '50%',
                      marginTop: '-120px',
                      marginLeft: '-88px',
                      zIndex: 5,
                    }}
                  >
                    <img
                      src={`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80`}
                      alt={`Happy moment ${item}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animation Keyframes */}
        <style jsx>{`
    @keyframes orbit {
      0% { transform: rotate(0deg) translateX(180px) rotate(0deg); opacity: 1; z-index: 5; }
      25% { transform: rotate(90deg) translateX(180px) rotate(-90deg); opacity: 0.9; z-index: 4; }
      50% { transform: rotate(180deg) translateX(180px) rotate(-180deg); opacity: 0.8; z-index: 3; }
      75% { transform: rotate(270deg) translateX(180px) rotate(-270deg); opacity: 0.9; z-index: 4; }
      100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); opacity: 1; z-index: 5; }
    }
  `}</style>
      </section>

      <CTA />
    </>
  );
};

export default Header;