import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl text-white font-light tracking-wide">
                MAYA INK
              </h3>
              <p className="text-white/60 font-light">
                Artiste tatoueur passionnée<br />
                Créations uniques et personnalisées<br />
                Lyon, France
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-light tracking-wide">
                Contact
              </h4>
              <div className="space-y-2 text-white/60 font-light text-sm">
                <p>123 Rue de l'Art<br />69000 Lyon, France</p>
                <p>Téléphone: +33 6 12 34 56 78</p>
                <p>Email: contact@mayaink.fr</p>
              </div>
            </div>

            {/* Social Media & Legal */}
            <div className="space-y-4">
              <h4 className="text-white font-light tracking-wide">
                Suivez-moi
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/50 font-light text-sm">
                © {currentYear} Maya Ink. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-white/50 font-light text-sm">
                <a href="#" className="hover:text-white/70 transition-colors duration-200">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-white/70 transition-colors duration-200">
                  Politique de confidentialité
                </a>
                <a href="#" className="hover:text-white/70 transition-colors duration-200">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}