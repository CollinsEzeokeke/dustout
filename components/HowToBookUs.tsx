import React from 'react';
import Image from 'next/image';
import BookingStepIcon from './icons/BookingStepIcon';
import FormIcon from './icons/FormIcon';
import CalendarIcon from './icons/CalendarIcon';
import ServiceIcon from './icons/ServiceIcon';

const HowToBookUs = () => {
  const steps = [
    {
      icon: <FormIcon className="w-12 h-12 text-blue-600" />,
      step: 1,
      title: "Fill Our Form",
      description: "Complete our simple booking form with your details and requirements.",
    },
    {
      icon: <ServiceIcon className="w-12 h-12 text-blue-600" />,
      step: 2,
      title: "Select Service",
      description: "Choose from our range of professional cleaning services tailored to your needs.",
    },
    {
      icon: <CalendarIcon className="w-12 h-12 text-blue-600" />,
      step: 3,
      title: "Pick a Date",
      description: "Select a convenient date and time for our cleaning professionals to visit.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50" id="how-to-book">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-16">
          How to Book Us
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image displays at the end on mobile, start on desktop */}
          <div className="order-last lg:order-first lg:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/howToBookUs.png"
                alt="How to Book Dustout Cleaning Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Steps content */}
          <div className="lg:w-1/2 space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row gap-5 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="flex flex-col items-center md:items-start">
                  <BookingStepIcon number={step.step} className="mb-3" />
                  <div className="hidden md:block">{step.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBookUs;