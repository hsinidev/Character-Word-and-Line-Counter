
import React, { useState, ReactNode } from 'react';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div className="bg-gray-800 text-white border border-indigo-500 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-gray-800">
          <h2 className="text-2xl font-bold text-indigo-300">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const modalLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];

  const getModalContent = (modalName: string) => {
    switch (modalName) {
      case "About":
        return <p>Cosmic Counter is a high-performance text analysis tool designed for writers, students, and professionals. It leverages pure JavaScript for instant, real-time metrics, all wrapped in a beautiful, responsive, and cosmic-themed interface. Powered by HSINI MOHAMED.</p>;
      case "Contact":
        return <p>For inquiries, please reach out via email at <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a> or visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">doodax.com</a>.</p>;
      case "Guide":
        return <div><h3 className="text-xl font-semibold mb-2">How to Use Cosmic Counter</h3><p>Simply start typing or paste your text into the main input area. All metrics—characters, words, sentences, and lines—will update automatically as you type. Use the 'Copy' and 'Clear' buttons for quick actions.</p></div>;
      case "Privacy Policy":
        return <p>We respect your privacy. This application runs entirely in your browser. No text you enter is ever sent to or stored on our servers. All processing is done client-side.</p>;
      case "Terms of Service":
        return <p>This tool is provided for free and "as is" without any warranties. By using this service, you agree not to hold us liable for any issues. Use it responsibly.</p>;
      case "DMCA":
        return <p>This tool does not host any user-generated content. If you have any concerns, please contact us at the email address provided in the Contact section.</p>;
      default:
        return null;
    }
  };


  return (
    <div className="relative min-h-screen text-gray-200 font-sans">
      {/* Animated Background */}
      <div className="cosmic-background fixed inset-0 -z-10"></div>
      
      {/* Header */}
      <header className="sticky top-0 bg-black/40 backdrop-blur-lg border-b border-white/10 z-40">
        <nav className="container mx-auto px-4 py-3 flex justify-center items-center">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6">
            {modalLinks.map(link => (
              <li key={link}>
                <button onClick={() => openModal(link)} className="text-sm font-semibold text-indigo-200 hover:text-white transition-colors">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p className="mb-2">
            Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FFD700] hover:underline">HSINI MOHAMED</a>
          </p>
          <p>
            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
            <span className="mx-2">&bull;</span>
            <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
          </p>
        </div>
      </footer>
      
      {/* Modal */}
      {activeModal && (
        <Modal title={activeModal} onClose={closeModal}>
          {getModalContent(activeModal)}
        </Modal>
      )}
    </div>
  );
};

export default ThemeLayout;
   