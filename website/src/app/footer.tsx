import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div>
          <p className="text-md">Tashfeen Karamat | Carleton University</p>
          {/* <p className="text-md">Email: tashfeen.karamat@carleton.ca</p> */}
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/tashfeen-karamat-phd-peng-6038a014/">
            <span
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-75 transition-opacity duration-300"
            >
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 rounded-full object-cover"
              />
            </span>
          </Link>
          <Link href="https://www.instagram.com/feenafoto/">
            <span
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-75 transition-opacity duration-300"
            >
              <img
                src="/images/ig.png"
                alt="Instagram"
                className="w-8 h-8 rounded-full object-cover"
              />
            </span>
          </Link>
        </div>
        <div>
          <p className="text-md">
            © 2024 Tashfeen Karamat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
