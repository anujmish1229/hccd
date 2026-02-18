import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Om_symbol-white.svg/1987px-Om_symbol-white.svg.png" alt="Om symbol" className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">Hindu Community Centre</div>
                <div className="text-sm opacity-90">of Durham</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-3">
              <div className="flex space-x-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@hccdurham.org</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Durham Region, Ontario</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Contact us for details</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2024 Hindu Community Centre of Durham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;