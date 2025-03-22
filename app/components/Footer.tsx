'use client'; 
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; 
import { supabase } from '@/lib/supabase';

export default function Footer() {
  const handleLogin = async () => {
    await supabase.auth.signOut();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        queryParams: {
          prompt: 'select_account',
        },
      },
    });

    if (error) {
      console.error('OAuth Login Error:', error);
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#E2A240] mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#E2A240] transition-colors duration-300 cursor-pointer text-sm md:text-base"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#E2A240] transition-colors duration-300 cursor-pointer text-sm md:text-base"
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#E2A240] transition-colors duration-300 cursor-pointer text-sm md:text-base"
                  >
                    Solar Platform
                  </ScrollLink>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="additional-services"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#E2A240] transition-colors duration-300 cursor-pointer text-sm md:text-base"
                  >
                    Services
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="blogs"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#E2A240] transition-colors duration-300 cursor-pointer text-sm md:text-base"
                  >
                    Blogs
                  </ScrollLink>
                </li>
                <li>
                  <button
                    onClick={handleLogin}
                    className="hover:text-[#E2A240] transition-colors duration-300 text-sm md:text-base"
                  >
                    Login as Admin
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#E2A240] mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#E2A240] transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#E2A240] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#E2A240] transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#E2A240] transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#E2A240] mb-4">
              Contact Info
            </h3>
            <p className="mb-2 text-sm md:text-base">
              Email: contact@isunsynergy.com
            </p>
            <p className="mb-2 text-sm md:text-base">
              Phone: +91 8989586714
            </p>
            <p className="mb-2 text-sm md:text-base">
              Address: Shop No.40-A, First Floor Maple High Street Narmadapuram Road Bhopal - 462026
            </p>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm md:text-base">
            © 2025 I-Sun Synergy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}