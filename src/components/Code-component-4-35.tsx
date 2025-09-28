import { useState } from 'react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const availableSlots = [
    '09:00', '10:30', '12:00', '14:00', '15:30', '17:00'
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString('fr-FR');
      alert(`Demande de rendez-vous pour le ${formattedDate} à ${selectedTime}. Veuillez utiliser le formulaire de contact pour confirmer votre réservation.`);
    }
  };

  return (
    <section id="booking" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-light tracking-wide">
              Disponibilités
            </h2>
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
              Planifiez votre session de tatouage en choisissant une date et un horaire qui vous conviennent
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar */}
            <Card className="bg-zinc-950 border-white/10">
              <CardHeader>
                <CardTitle className="text-white font-light tracking-wide">
                  Choisir une date
                </CardTitle>
                <CardDescription className="text-white/60 font-light">
                  Sélectionnez le jour qui vous convient le mieux
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="w-full"
                  classNames={{
                    months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                    month: "space-y-4 w-full flex flex-col",
                    table: "w-full h-full border-collapse space-y-1",
                    head_row: "",
                    head_cell: "text-white/60 rounded-md w-8 font-normal text-[0.8rem] font-light",
                    row: "w-full mt-2",
                    cell: "h-8 w-8 text-center text-sm relative p-0 [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-8 w-8 p-0 font-light aria-selected:opacity-100 text-white/80 hover:text-white",
                    day_selected: "bg-white text-black hover:bg-white hover:text-black focus:bg-white focus:text-black",
                    day_today: "bg-white/10 text-white",
                    day_outside: "text-white/30 opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                    day_disabled: "text-white/30 opacity-50",
                    day_hidden: "invisible",
                  }}
                />
              </CardContent>
            </Card>

            {/* Time Slots */}
            <Card className="bg-zinc-950 border-white/10">
              <CardHeader>
                <CardTitle className="text-white font-light tracking-wide">
                  Créneaux disponibles
                </CardTitle>
                <CardDescription className="text-white/60 font-light">
                  {selectedDate 
                    ? `Horaires disponibles pour le ${selectedDate.toLocaleDateString('fr-FR')}`
                    : 'Sélectionnez d\'abord une date'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedDate ? (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      {availableSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 font-light tracking-wide transition-all duration-300 ${
                            selectedTime === time
                              ? "bg-white text-black hover:bg-white/90"
                              : "border-white/30 text-white/70 hover:text-white hover:border-white/50"
                          }`}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    
                    {selectedTime && (
                      <div className="pt-6 border-t border-white/10">
                        <Button
                          onClick={handleBooking}
                          className="w-full bg-white text-black hover:bg-white/90 py-3 font-light tracking-wide"
                        >
                          Réserver ce créneau
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-white/50 font-light">
                    Veuillez d'abord sélectionner une date
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Important Info */}
          <div className="mt-16 p-8 bg-zinc-900/50 border border-white/10">
            <h3 className="text-white text-xl font-light tracking-wide mb-4">
              Informations importantes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/70 font-light">
              <div>
                <h4 className="text-white font-light mb-2">Avant votre rendez-vous :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Évitez l'alcool 24h avant</li>
                  <li>• Prenez un repas consistant</li>
                  <li>• Hydratez-vous bien</li>
                  <li>• Apportez vos références visuelles</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-light mb-2">Durée des sessions :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Petit tatouage : 1-2h</li>
                  <li>• Tatouage moyen : 3-4h</li>
                  <li>• Grande pièce : session multiple</li>
                  <li>• Consultation préalable recommandée</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}