import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState('non-resident'); // 'resident' or 'non-resident'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, message, userType });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {/* <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <a href="/" className="text-blue-500 hover:text-blue-600">Home</a>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-600">Contact Us</span>
        </div>
      </div> */}

      {/* Header Section with Image */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Background Card */}
              <div className="absolute inset-0 flex justify-center">
                <div 
                  className="w-full max-w-2xl h-[300px] bg-[#e6f7ff] transform translate-y-20"
                  style={{ 
                    clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
                    borderRadius: '30px',
                    WebkitBorderRadius: '30px',
                    MozBorderRadius: '30px'
                  }}
                ></div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img
                  src="/contact-person.png"
                  alt="Contact Us"
                  className="w-auto h-[300px] mx-auto"
                />
              </div>
            </div>
            
            <div className="relative mt-32">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact <span className="text-blue-500">Us</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Feel like Contacting Us? Submit your queries and we will get back to you as soon as possible
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 flex gap-4">
              <button
                className={`flex-1 py-2 px-4 rounded-md ${
                  userType === 'non-resident'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setUserType('non-resident')}
              >
                I am not a Resident yet
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md ${
                  userType === 'resident'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setUserType('resident')}
              >
                I am a Resident
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Tell us about your issue and we will get back to you as soon as possible
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  HostelXpert Solutions Private Limited<br />
                  123 Main Street<br />
                  Your City, State 12345
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Details</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> +1 234 567 8900
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> info@hostelxpert.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
