import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'realistic', label: 'Réalisme' },
    { id: 'geometric', label: 'Géométrique' },
    { id: 'oldschool', label: 'Old School' },
    { id: 'color', label: 'Couleur' },
    { id: 'blackwork', label: 'Noir & Blanc' },
  ];

  const tattooWorks = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFsaXN0aWMlMjB0YXR0b28lMjBibGFjayUyMGdyZXl8ZW58MXx8fHwxNzU3MTUyNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'realistic',
      title: 'Portrait réaliste',
      description: 'Tatouage portrait noir et gris'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1628969454009-843d2369e964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc1NzE1MjY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'geometric',
      title: 'Géométrie sacrée',
      description: 'Motifs géométriques minimalistes'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1616315615552-698be1341774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBzY2hvb2wlMjB0cmFkaXRpb25hbCUyMHRhdHRvb3xlbnwxfHx8fDE3NTcxNTI2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'oldschool',
      title: 'Traditional',
      description: 'Style old school classique'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571855618158-f2ea615c339a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBjb2xvcmZ1bCUyMGZsb3dlcnN8ZW58MXx8fHwxNzU3MTUyNjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'color',
      title: 'Fleurs colorées',
      description: 'Tatouage floral en couleur'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1566644447159-3a93334d2b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5kYWxhJTIwdGF0dG9vJTIwaW50cmljYXRlfGVufDF8fHx8MTc1NzE1MjY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'blackwork',
      title: 'Mandala',
      description: 'Mandala intricate noir'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1662524520209-b5af0398a8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBtYWNoaW5lJTIwaW5rJTIwc3R1ZGlvfGVufDF8fHx8MTc1NzE1MjY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'blackwork',
      title: 'Blackwork détaillé',
      description: 'Travail à l\'encre noire'
    },
  ];

  const filteredWorks = activeFilter === 'all' 
    ? tattooWorks 
    : tattooWorks.filter(work => work.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-light tracking-wide">
            Galerie
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            Découvrez une sélection de mes créations, chaque œuvre étant unique et personnalisée
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 font-light tracking-wide transition-colors duration-300 ${
                activeFilter === filter.id
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-transparent border border-white/30 text-white/70 hover:text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
            <Dialog key={work.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h3 className="text-white text-lg font-light tracking-wide mb-2">
                          {work.title}
                        </h3>
                        <p className="text-white/80 text-sm font-light">
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black border-white/20">
                <DialogTitle className="sr-only">{work.title}</DialogTitle>
                <DialogDescription className="sr-only">{work.description}</DialogDescription>
                <div className="relative">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-white text-xl font-light tracking-wide mb-2">
                      {work.title}
                    </h3>
                    <p className="text-white/70 font-light">
                      {work.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}