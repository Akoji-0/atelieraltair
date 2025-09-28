import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function PricingSection() {
  const pricingCategories = [
    {
      category: 'Petit tatouage',
      description: '5-10cm, simple',
      price: '80-150€',
      duration: '1-2h'
    },
    {
      category: 'Tatouage moyen',
      description: '10-20cm, détaillé',
      price: '150-300€',
      duration: '2-4h'
    },
    {
      category: 'Grand tatouage',
      description: '+20cm, complexe',
      price: '300€+',
      duration: '4h+'
    },
    {
      category: 'Tarif horaire',
      description: 'Pour projets sur mesure',
      price: '80€/h',
      duration: 'Variable'
    }
  ];

  const faqItems = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez prendre rendez-vous via le calendrier ci-dessus ou en utilisant le formulaire de contact. Une consultation préalable est recommandée pour les projets importants."
    },
    {
      question: "Quel est le processus de création ?",
      answer: "Après notre première consultation, je crée un design personnalisé basé sur vos idées. Nous affinons ensemble le projet jusqu'à ce qu'il vous convienne parfaitement, puis nous planifions la session de tatouage."
    },
    {
      question: "Comment se déroule la séance ?",
      answer: "Chaque séance commence par la préparation de la zone et l'application du transfert. Je vous explique chaque étape et m'assure de votre confort tout au long du processus."
    },
    {
      question: "Quels sont les soins post-tatouage ?",
      answer: "Je vous fournis une fiche de soins détaillée et tous les produits nécessaires pour la cicatrisation. Un suivi post-tatouage est inclus pour s'assurer de la bonne guérison."
    },
    {
      question: "Puis-je apporter mes propres références ?",
      answer: "Absolument ! J'encourage mes clients à apporter toutes leurs références visuelles. Cela m'aide à mieux comprendre votre vision et à créer un tatouage qui vous ressemble."
    },
    {
      question: "Faites-vous des retouches ?",
      answer: "Oui, les retouches sont gratuites dans les 6 mois suivant la réalisation du tatouage, sous condition que les soins aient été correctement suivis."
    },
    {
      question: "Acceptez-vous les mineurs ?",
      answer: "Je tatoue les mineurs de 16-18 ans uniquement avec l'autorisation parentale écrite et la présence d'un parent lors de la séance."
    },
    {
      question: "Quels sont vos styles de prédilection ?",
      answer: "Je me spécialise dans le réalisme noir et gris, les créations géométriques, les compositions florales et les tatouages old school. Chaque style est adapté à votre projet."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-light tracking-wide">
              Tarifs & FAQ
            </h2>
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
              Informations transparentes sur les tarifs et réponses aux questions les plus fréquentes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pricing */}
            <div>
              <h3 className="text-2xl text-white mb-8 font-light tracking-wide">
                Grille tarifaire
              </h3>
              <div className="space-y-4">
                {pricingCategories.map((item, index) => (
                  <Card key={index} className="bg-black border-white/10">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white font-light tracking-wide text-lg">
                            {item.category}
                          </CardTitle>
                          <CardDescription className="text-white/60 font-light">
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-lg font-light">
                            {item.price}
                          </div>
                          <div className="text-white/50 text-sm font-light">
                            {item.duration}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10">
                <h4 className="text-white font-light mb-3 tracking-wide">
                  Informations complémentaires
                </h4>
                <ul className="text-white/70 font-light text-sm space-y-2">
                  <li>• Consultation gratuite pour tout projet</li>
                  <li>• Acompte de 50€ requis à la réservation</li>
                  <li>• Paiement en espèces ou par virement</li>
                  <li>• Devis personnalisé pour les grandes pièces</li>
                  <li>• Tarifs dégressifs pour les sessions multiples</li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl text-white mb-8 font-light tracking-wide">
                Questions fréquentes
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-black border border-white/10 px-6"
                  >
                    <AccordionTrigger className="text-white font-light tracking-wide hover:no-underline hover:text-white/80 text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 font-light leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}