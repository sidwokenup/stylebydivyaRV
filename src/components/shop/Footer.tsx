import Link from "next/link";
import Image from "next/image";
import instagramIcon from "@/assets/svg_logo/instagram (2).svg";
import whatsappIcon from "@/assets/svg_logo/whatsapp (2).svg";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand & Address */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-serif tracking-widest text-yellow-500">StyleByDivya</h3>
          <address className="not-italic text-sm text-gray-400 leading-relaxed">
            New Delhi, India<br />
            Phone: <a href="tel:9813484649" className="hover:text-yellow-500 transition-colors">9813484649</a>
          </address>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-medium uppercase tracking-wider text-gray-300">Information</h4>
          <nav className="flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-yellow-500 transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link>
            <Link href="/#about" className="hover:text-yellow-500 transition-colors">About Us</Link>
          </nav>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="text-sm font-medium uppercase tracking-wider text-gray-300">Connect</h4>
          <div className="flex gap-6">
            {/* WhatsApp */}
            <a href="https://wa.me/919813484649" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 group">
              <span className="sr-only">WhatsApp</span>
              <div className="relative w-5 h-5">
                <Image 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  fill 
                />
              </div>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/_stylebydivya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 group">
              <span className="sr-only">Instagram</span>
              <div className="relative w-5 h-5">
                <Image 
                  src={instagramIcon} 
                  alt="Instagram" 
                  fill 
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} StyleByDivya. All rights reserved.</p>
      </div>
    </footer>
  );
}
