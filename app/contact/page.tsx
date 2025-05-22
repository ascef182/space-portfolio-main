import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
        Contact
      </h1>
      <div className="bg-[#12023a] border border-[#2A0E61] rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-md w-full">
        <div className="flex flex-row gap-8 mb-6">
          <a href="mailto:support@caza-tech.com" target="_blank" rel="noopener noreferrer" title="E-mail">
            <MdEmail className="w-10 h-10 text-cyan-400 hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://github.com/ascef182" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="w-10 h-10 text-cyan-400 hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/pamelaascefcazarini/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin className="w-10 h-10 text-cyan-400 hover:text-purple-400 transition-colors" />
          </a>
        </div>
        <p className="text-white text-xl font-semibold text-center">let's build something together</p>
      </div>
    </section>
  );
} 