import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ArtistSection() {
  return (
    <section id="artist" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Artist Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1622373225880-a19e6dbcffbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjBwb3J0cmFpdCUyMHN0dWRpb3xlbnwxfHx8fDE3NTcxNTI2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Maya Dubois - Artiste tatoueur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Artist Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl text-white mb-8 font-light tracking-wide">
                L'Artiste
              </h2>
              
              <div className="space-y-6 text-white/80 font-light leading-relaxed">
                <p className="text-lg">
                  Passionnée par l'art corporel depuis plus de 8 ans, je transforme chaque idée 
                  en une œuvre d'art unique et personnelle. Mon approche allie technique précise 
                  et créativité artistique pour donner vie à vos projets les plus ambitieux.
                </p>
                
                <p>
                  Spécialisée dans le réalisme noir et gris, les créations géométriques et les 
                  compositions florales, j'accorde une importance particulière à l'écoute et à 
                  la collaboration avec mes clients pour créer des pièces qui leur ressemblent.
                </p>
                
                <p>
                  Chaque tatouage est une aventure créative partagée, un moment privilégié où 
                  l'art rencontre l'émotion. Mon studio, situé dans le cœur artistique de la ville, 
                  offre un environnement chaleureux et professionnel pour vivre cette expérience 
                  en toute sérénité.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-12 p-6 border-l-2 border-white/30">
                <blockquote className="text-xl text-white font-light italic tracking-wide">
                  "L'art du tatouage, c'est graver l'éternité sur la peau, 
                  créer du permanent dans un monde éphémère."
                </blockquote>
                <cite className="block mt-4 text-white/60 font-light">
                  — Maya Dubois
                </cite>
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl text-white font-light mb-2">8+</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">
                    ANNÉES D'EXPÉRIENCE
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-white font-light mb-2">500+</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">
                    CRÉATIONS RÉALISÉES
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-white font-light mb-2">100%</div>
                  <div className="text-white/60 text-sm font-light tracking-wide">
                    SATISFACTION CLIENT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}