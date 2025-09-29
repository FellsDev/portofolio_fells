import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-white">Fells Dev.</h2>
          <p className="mt-3 text-sm text-gray-400 max-w-xs">
            Crafting scalable web apps, open-source tools, and innovative
            digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 mb-3">
            QUICK LINKS
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 mb-3">CONNECT</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/FellsDev"
              className="hover:text-blue-500 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hanifitsme15/"
              className="hover:text-blue-500 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              className="hover:text-blue-500 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Built with ❤️ by Hanif Fawwaz M. <br />
      </div>
    </footer>
  );
};

export default Footer;
