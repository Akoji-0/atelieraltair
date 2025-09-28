import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import ArtistSection from './components/ArtistSection';
import BookingSection from './components/BookingSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <Gallery />
        <ArtistSection />
        <BookingSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}