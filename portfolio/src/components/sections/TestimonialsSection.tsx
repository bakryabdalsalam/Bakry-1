import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '@/utils/animations';
import { testimonials } from '@/data/portfolio';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const length = testimonials.length;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (autoplay) {
      timer = setTimeout(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, 6000);
    }
    
    return () => clearTimeout(timer);
  }, [current, length, autoplay]);
  
  const nextSlide = () => {
    setAutoplay(false);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setAutoplay(false);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What clients and colleagues say about working with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 relative"
                  >
                    <div className="absolute top-6 left-8 text-primary/20 dark:text-primary/10">
                      <FaQuoteLeft size={40} />
                    </div>
                    
                    <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8 mt-4 relative z-10">
                      "{testimonial.text}"
                    </div>
                    
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 -mt-4 z-20">
            <motion.button 
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary focus:outline-none"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button 
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary focus:outline-none"
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 