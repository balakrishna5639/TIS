import Link from "next/link";
import { MessageCircle, Share2, Camera, Video, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-heading font-bold">
              TIS<span className="text-primary">.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Tula's International School is a premier educational institution committed to holistic development, academic excellence, and global citizenship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Admissions 2026-27</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Academic Curriculum</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Boarding Life</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Sports & Co-curricular</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Dhoolkot, P.O. Selaqui, Chakrata Road,<br />Dehradun - 248011 (Uttarakhand)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70 text-sm">+91 9458311000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70 text-sm">info@tis.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to get the latest updates and news.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary text-white"
              />
              <button 
                type="button"
                className="bg-primary hover:bg-primary-dark text-white rounded-lg px-4 py-3 text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Tula's International School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
