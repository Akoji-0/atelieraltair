import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1611324980068-0f4b88c92550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjBibGFjayUyMHdoaXRlJTIwYXJ0aXN0aWN8ZW58MXx8fHwxNzU3MTUyNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tattoo art background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-wide font-light">
          MAYA DUBOIS
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide max-w-2xl mx-auto">
          Artiste tatoueur • Créations uniques • Art corporel d'exception
        </p>
        <p className="text-lg text-white/70 mb-12 font-light italic max-w-xl mx-auto">
          "Chaque tatouage raconte une histoire, laissez-moi donner vie à la vôtre"
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('#gallery')}
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-light tracking-wide transition-colors duration-300"
          >
            Voir mes créations
          </Button>
          <Button
            onClick={() => scrollToSection('#booking')}
            className="border border-white bg-transparent text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-light tracking-wide transition-colors duration-300"
          >
            Prendre rendez-vous
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-[1px] h-12 bg-white/50 mx-auto mb-2"></div>
          <div className="w-2 h-2 border border-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}