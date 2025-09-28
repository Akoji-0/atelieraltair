import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Upload } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    referenceImage: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      referenceImage: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    alert('Votre message a été envoyé ! Je vous répondrai dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      message: '',
      referenceImage: null
    });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-light tracking-wide">
              Contact
            </h2>
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
              Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos idées
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-zinc-950 border-white/10">
              <CardHeader>
                <CardTitle className="text-white font-light tracking-wide">
                  Envoyer un message
                </CardTitle>
                <CardDescription className="text-white/60 font-light">
                  Décrivez-moi votre projet et n'hésitez pas à joindre des références visuelles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-light">
                      Nom complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-black border-white/20 text-white placeholder:text-white/40 focus:border-white/50 font-light"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-light">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-black border-white/20 text-white placeholder:text-white/40 focus:border-white/50 font-light"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white font-light">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-black border-white/20 text-white placeholder:text-white/40 focus:border-white/50 font-light resize-none"
                      placeholder="Décrivez votre projet : style souhaité, taille, emplacement, vos idées..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white font-light">
                      Image de référence (optionnel)
                    </Label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="border-2 border-dashed border-white/20 p-6 text-center hover:border-white/40 transition-colors duration-200">
                        <Upload className="mx-auto h-8 w-8 text-white/40 mb-2" />
                        <p className="text-white/60 font-light text-sm">
                          {formData.referenceImage 
                            ? `Fichier sélectionné: ${formData.referenceImage.name}`
                            : 'Cliquez ou glissez une image ici'
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-white/90 py-3 font-light tracking-wide"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-zinc-950 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white font-light tracking-wide">
                    Informations pratiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-white font-light mb-2 tracking-wide">Adresse</h4>
                    <p className="text-white/70 font-light">
                      123 Rue de l'Art<br />
                      69000 Lyon, France
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-light mb-2 tracking-wide">Téléphone</h4>
                    <p className="text-white/70 font-light">+33 6 12 34 56 78</p>
                  </div>

                  <div>
                    <h4 className="text-white font-light mb-2 tracking-wide">Email</h4>
                    <p className="text-white/70 font-light">contact@mayaink.fr</p>
                  </div>

                  <div>
                    <h4 className="text-white font-light mb-2 tracking-wide">Horaires</h4>
                    <div className="text-white/70 font-light text-sm space-y-1">
                      <p>Lundi - Vendredi : 9h - 18h</p>
                      <p>Samedi : 10h - 16h</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-950 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white font-light tracking-wide">
                    Temps de réponse
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 font-light">
                    Je réponds généralement sous 24-48h à tous les messages.
                  </p>
                  <p className="text-white/70 font-light text-sm">
                    Pour les demandes urgentes, n'hésitez pas à me contacter directement par téléphone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}