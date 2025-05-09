import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FiChevronRight } from 'react-icons/fi';
import CTA from '../components/CTA'
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import home3 from "../assets/images/home3.jpg";
import SEO from '../components/SEO';

const ServiceItem = ({ number, title, description }) => (
  <motion.div
    className="border-t border-gray-100 py-6 md:py-8 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    <Link to="/properties" className="block">
      <div className="flex items-start justify-between transition-opacity duration-300">
        <div className="flex-1">
          <div className="text-gold-500 mb-1 md:mb-2 font-mono text-xs md:text-sm tracking-wider">{number}</div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 group-hover:text-[#631930] transition-colors duration-500">
            {title}
          </h3>
          <p className="mt-2 md:mt-4 text-gray-500 max-w-2xl leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
        <motion.div
          className="text-gray-300 group-hover:text-gold-500 transition-colors duration-500 hover:text-[#631930] flex items-center ml-4"
          whileHover={{ x: 5 }}
        >
          <FiChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

const About = () => {

  useEffect(() => {
    // Handle scroll to testimonials if URL has hash
    if (window.location.hash === '#testimonials') {
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        setTimeout(() => {
          testimonialsSection.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure page is loaded
      }
    }
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <SEO
        title="About Us | Heaves Living"
        description="Learn more about Heaves Living – your trusted provider for affordable and comfortable PG accommodations in Bangalore."
        keywords="About Heaves Living, PG company Bangalore, PG service, students and working professionals"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-cream-50/80 to-cream-50"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#ffff] to-transparent"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            {/* Left Column */}
            <motion.div variants={fadeIn}>
              <motion.div
                className="text-gold-500 mb-4 md:mb-6 uppercase tracking-wider text-xs md:text-sm font-medium"
                {...fadeIn}
              >
                About Heavens Living
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 md:mb-8 text-gray-900"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#631930]">Elevating</span>
                <span className="block">Refined Living</span>
                <span className="block">To Divine</span>
                <span className="block">Perfection</span>
              </motion.h1>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={fadeIn} transition={{ delay: 0.2 }}>
              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                At Heavens Living, we don't just build properties - we craft sanctuaries.
                Founded with a vision to redefine premium living, our journey has been
                guided by uncompromising standards, exquisite attention to detail, and
                a passion for creating spaces that inspire.
              </motion.p>
              <motion.div
                className="mt-8 md:mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link
                  to="/properties"
                  className="group inline-flex items-center text-gold-600 hover:text-gold-800 transition-colors duration-300 text-base md:text-lg"
                >
                  Explore Our Properties
                  <HiArrowUpRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto md:text-center mb-12 md:mb-20">
            <motion.div
              className="text-gold-500 mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-medium"
              {...fadeIn}
            >
              Our Philosophy
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 text-gray-900"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Where <span className="font-serif italic text-[#631930]">Elegance</span> Meets <span className="font-serif italic text-[#631930]">Essence</span>
            </motion.h2>
            <motion.p
              className="text-gray-500 text-base md:text-lg leading-relaxed"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              We believe true elegance lies in the harmony of design, comfort, and soul.
              Each Heavens Living property is a testament to this philosophy, blending
              architectural brilliance with thoughtful amenities that elevate everyday living.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              {
                title: "Timeless Design",
                description: "Our properties feature classic architectural elements fused with contemporary sophistication.",
                icon: "🏛️"
              },
              {
                title: "Uncompromising Quality",
                description: "From foundation to finishes, we accept nothing less than perfection in materials and craftsmanship.",
                icon: "✨"
              },
              {
                title: "Thoughtful Living",
                description: "Every space is designed to enhance daily life, promoting both comfort and inspiration.",
                icon: "🧘"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-cream-50 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="bg-cream-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column */}
            <div>
              <motion.div
                className="text-gold-500 mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-medium"
                {...fadeIn}
              >
                Signature Services
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12 text-gray-900"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                <span className="font-serif italic text-[#631930]">Exceptional</span> Experiences, <span className="font-serif italic text-[#631930]">Tailored</span> For You
              </motion.h2>

              {/* Luxury Illustration */}
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 mb-8 md:mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-gold-300 rounded-xl md:rounded-2xl rotate-3"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl md:rounded-2xl shadow-xl transform -rotate-1"
                  style={{ backgroundImage: `url(${home3})` }}
                ></div>              </motion.div>
            </div>

            {/* Right Column - Services List */}
            <div>
              <ServiceItem
                number="01"
                title="Heavenly Residences"
                description="Discover our curated collection of premium residences, each offering unparalleled comfort, security, and amenities designed for discerning homeowners."
              />
              <ServiceItem
                number="02"
                title="Concierge Services"
                description="Our dedicated concierge team provides white-glove service, from property maintenance to lifestyle management, ensuring effortless living."
              />
              <ServiceItem
                number="03"
                title="Bespoke Interior Design"
                description="Transform your residence into a masterpiece with our personalized interior design services, curated to reflect your unique taste and lifestyle."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-cream-50 overflow-hidden mb-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Heading */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gold-500 mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 text-gray-900">
              <span className="font-serif italic text-[#631930]">Voices</span> of Our{" "}
              <span className="font-serif italic text-[#631930]">Residents</span>
            </h2>
          </motion.div>

          {/* Continuous auto-scrolling testimonials */}
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee">
              {/* Repeat reviews twice for infinite smooth loop */}
              {[...Array(2)].flatMap((_, repeatIndex) =>
                [
                  {
                    quote:
                      "I’m really happy with my stay at Heavens Living - Flora Inn and I’m really impressed with the experience. The PG has a warm and welcoming ambiance, making it feel like a home away from home. The rooms are clean and comfortable, and the staff is friendly and always ready to assist. The food is good, and the overall environment is peaceful and relaxed. It’s a great option for anyone looking for a reliable PG in Bangalore. Looking forward to seeing it grow even more!",
                    author: "Nikhil Babu",
                    role: "2 months ago",
                    img: `${img1}`
                  },
                  {
                    quote:
                      "Their spacious suite is the main attraction along with secure setting.  There is a security at night.Jigani Side's best mess meal.I always feel as though I'm at home as well as staff members behaved politely.",
                    author: "Honey",
                    role: "a month ago",
                    img: `${img2}`
                  },
                  {
                    quote:
                      "A place to stay! Highly satisfied with my stay. The PG is clean, well-maintained, and provides all the necessary amenities. The management is friendly and responsive. Highly recommended!",
                    author: "Manu Alex",
                    role: "Manu Alex",
                    img: `${img3}`
                  },
                  {
                    quote:
                      "I had an amazing stay at Heavens Living Flora Inn ( Gents PG), The location is perfect—just near to HCL Tech. The Rooms and Dining area are clean, comfortable, and well-maintained.",
                    author: "Anwar Sadath",
                    role: "2 months ago",
                    img: `${img4}`
                  },
                  {
                    quote:
                      "I’ve been staying at Heavens Living PG for a while, and the food is one of the best things about this place! The meals are fresh, hygienic, and have a good mix of variety, covering both North and South Indian cuisines. The taste is home-like, and they make sure there’s a balance between nutrition and flavor.",
                    author: "Saleel Mohammed",
                    role: "2 months ago",
                    img: `${img5}`
                  },
                  {
                    quote:
                      "Best pg in jigani bommasandra. They provide best food with top quality. It is near to hcl gate no 2. If you are looking for pg go for heavens living",
                    author: "United Educators",
                    role: "a month ago",
                    img: `${img6}`
                  },
                ].map((review, index) => (
                  <div
                    key={`${repeatIndex}-${index}`}
                    className="bg-cream-50 rounded-xl shadow-sm w-[300px] p-6 mx-2 flex-shrink-0"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={review.img}
                        alt={review.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm">{review.author}</h4>
                        <p className="text-gray-500 text-xs">{review.role}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 text-sm mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      {review.quote.length > 110 ? review.quote.slice(0, 110) + '...' : review.quote}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Google Reviews Button */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Heavens+Living+-+Flora+Inn/@12.7894847,77.6509629,17z/data=!4m8!3m7!1s0x3bae6b102129bec7:0x269e46f969a347c0!8m2!3d12.7894847!4d77.6509629!9m1!1b1!16s%2Fg%2F11w_v1ccvf?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-gold-600 hover:text-gold-800 transition-colors duration-300 text-base md:text-lg"
            >
              Read More on Google Reviews
              <HiArrowUpRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

        </div>

        {/* Marquee animation */}
        <style>
          {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 40s linear infinite;
          }
        `}
        </style>
      </section>

      <CTA />
    </div>
  );
};

export default About;