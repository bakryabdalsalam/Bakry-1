import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { personalInfo } from '@/data/portfolio';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  // Format WhatsApp number for the API link
  const whatsappNumber = personalInfo.phone.replace(/\D/g, '');
  return (
    <section id="contact" className="section overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Got a question or proposal, or just want to say hello? Let's chat on WhatsApp.
          </p>
        </motion.div>

        <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-12 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<FaEnvelope className="text-primary" />}
                  title="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                />
                <ContactItem 
                  icon={<FaPhone className="text-primary" />}
                  title="Phone"
                  value={personalInfo.phone}
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                />
                <ContactItem 
                  icon={<FaMapMarkerAlt className="text-primary" />}
                  title="Location"
                  value={personalInfo.location}
                />
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Call to Action */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Chat on WhatsApp
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm available for a quick chat on WhatsApp. Feel free to reach out any time 
                for project inquiries, collaborations, or just to say hello!
              </p>
              
              <div className="mt-auto">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full flex items-center justify-center text-lg py-4 transition-transform hover:scale-105"
                >
                  <FaWhatsapp className="mr-3 text-xl" />
                  Chat on WhatsApp
                </a>
                
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Available on WhatsApp during business hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Modified ContactItem to improve animation performance on mobile
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, href }) => {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="flex items-start"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h4>
        {href ? (
          <a 
            href={href} 
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactSection; 