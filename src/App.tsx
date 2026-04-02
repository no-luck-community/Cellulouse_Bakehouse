import { useEffect, useState, useRef } from 'react';
import chefImage from "./assets/lindsay-cotter-9J7sHieVFi0-unsplash.jpg";
import gallery1 from "./assets/american-heritage-chocolate-DoK5qEy2L60-unsplash.jpg";
import gallery2 from "./assets/aneta-voborilova-aFqKIFZ-Idg-unsplash.jpg";
import gallery3 from "./assets/DSC09631.jpg";
import gallery4 from "./assets/ferks-guare-sxckkkg6lyc-unsplash.jpg";
import gallery5 from "./assets/brooke-balentine-Iagv67BLHNc-unsplash.jpg";
import gallery6 from "./assets/pam-mene-mo7y6AO_r5I-unsplash.jpg";
import logo from "./assets/logo.jpeg";
import { 
  Phone, ChevronLeft, ChevronRight, 
  Star, MapPin, Clock, Instagram,
} from 'lucide-react';

// Fade In Hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return ref;
}

// Header Component - Transparent, elegant
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] py-6 px-8 transition-all duration-700 ${
        isScrolled ? 'bg-[rgba(15,34,30,0.9)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3 group">
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#f0d9b5]/30 flex items-center justify-center bg-[#18342f]/40 group-hover:border-[#f0d9b5] group-hover:bg-[#18342f]/60 transition-all duration-500 flex-shrink-0">
      <img src={logo} alt="Cellulouse Bakehouse Logo" className="w-full h-full object-cover rounded-full" />
      </div>
      </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {['Home', 'About', 'Specialties', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[#f9f3e9]/80 text-[11px] tracking-[0.2em] uppercase hover:text-[#f0d9b5] transition-all duration-500 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f0d9b5] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
          {/* <a
            href="tel:+918886004280"
            className="flex items-center gap-2 px-6 py-3 border border-[#f0d9b5]/60 rounded-full text-[11px] tracking-[0.15em] uppercase text-[#f0d9b5] hover:bg-[#f0d9b5] hover:text-[#18342f] hover:border-[#f0d9b5] transition-all duration-500"
          >
            <Phone className="w-3 h-3" />
            Order Now
          </a> */}
        </nav>

           {/* Mobile Order Button
        
         <a href="https://api.whatsapp.com/send/?phone=918886004280"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center gap-2 px-4 py-2 border border-[#f0d9b5]/60 rounded-full text-[10px] tracking-[0.15em] uppercase text-[#f0d9b5]"
        >
          <Phone className="w-3 h-3" />
          Order
        </a> */}

      </div>
    </header>
  );
}

// Hero Section with Parallax
function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7693927/pexels-photo-7693927.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          willChange: 'transform'
        }}
      />
      
      {/* Rich Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,34,30,0.7)] via-[rgba(24,52,47,0.5)] to-[rgba(15,34,30,0.9)]" />
      
      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0d9b5]/40 to-transparent" />

      {/* Content */}
      <div 
        className="relative z-10 px-4 max-w-4xl mx-auto pt-20"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <p className="text-[#f0d9b5]/80 text-[10px] tracking-[0.4em] uppercase mb-8">
          Est. 2025 — Hyderabad
        </p>
        
        <h1 className="font-['Cormorant_Garamond'] text-[clamp(3rem,12vw,8rem)] font-light tracking-[0.15em] uppercase text-[#f0d9b5] mb-3 leading-[1]">
          Cellulouse
        </h1>
        
        <p className="text-[clamp(0.7rem,2vw,1.1rem)] font-extralight tracking-[0.6em] text-[#f9f3e9]/90 mb-8">
          BAKEHOUSE
        </p>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#f0d9b5]/60" />
          <div className="w-2 h-2 rotate-45 border border-[#f0d9b5]/60" />
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#f0d9b5]/60" />
        </div>

        <p className="font-['Cormorant_Garamond'] text-[clamp(1.1rem,4vw,1.8rem)] italic font-light text-[#f9f3e9]/90 mb-3 tracking-wide">
          Crafted with love, served with elegance
        </p>
        
        <p className="text-sm text-[#f9f3e9]/50 mb-12 tracking-[0.15em] uppercase text-[10px]">
          Artisan Patisserie & Custom Celebrations
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#specialties"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#f0d9b5] text-[#18342f] text-[11px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,217,181,0.3)]"
          >
            <span className="absolute inset-0 bg-[#18342f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-[#f0d9b5] transition-colors duration-500">Explore Menu</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#f0d9b5]/60 text-[#f0d9b5] text-[11px] tracking-[0.2em] uppercase hover:bg-[#f0d9b5] hover:text-[#18342f] hover:border-[#f0d9b5] transition-all duration-500"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Slow Bouncing */}
      <div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#f0d9b5]/70"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="relative w-6 h-10 border border-[#f0d9b5]/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#f0d9b5]/60 rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}

// About Section with Parallax
function About() {
  const fadeRef = useFadeIn();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-32 px-4 bg-[#18342f] overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] opacity-[0.03] rounded-full"
        style={{
          background: 'radial-gradient(circle, #f0d9b5 0%, transparent 70%)',
          transform: `translateY(${(scrollY - 800) * 0.15}px)`,
          willChange: 'transform'
        }}
      />

      <div ref={fadeRef} className="fade-in max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden">
              <img
                src={chefImage}
                alt="Pastry Chef at Work"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#18342f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#f0d9b5]/30 -z-10" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#f0d9b5]/10 -z-10" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-[#f0d9b5]/70 text-[10px] tracking-[0.4em] uppercase mb-6">
              Our Story
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,3rem)] font-light text-[#f0d9b5] mb-8 leading-[1.2]">
              Where Passion Meets <em className="italic">Perfection</em>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-[#f0d9b5] to-transparent mx-auto lg:mx-0 mb-8" />
            
            <p className="text-[#f9f3e9]/70 leading-[2] mb-6 text-[15px] font-light">
              At Cellulouse Bakehouse, we believe that every celebration deserves something extraordinary. 
              Founded in 2025 in the heart of Hyderabad, our patisserie has become synonymous with 
              artisanal excellence and bespoke creations.
            </p>
            
            <p className="text-[#f9f3e9]/70 leading-[2] mb-6 text-[15px] font-light">
              Each cake, pastry, and confection is handcrafted using the finest ingredients sourced 
              from around the world. From French butter to Belgian chocolate, we spare no effort 
              in bringing you authentic flavors.
            </p>
            
            <p className="text-[#f9f3e9]/70 leading-[2] mb-10 text-[15px] font-light">
              Whether it's an intimate birthday celebration or a grand wedding, our team of 
              passionate pastry artists works closely with you to create edible masterpieces.
            </p>

            <p className="font-['Cormorant_Garamond'] italic text-xl text-[#f0d9b5]/90 tracking-wide">
              — The Cellulouse Family
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Specialties Section
function Specialties() {
  const fadeRef = useFadeIn();

  const specialties = [
    {
      title: 'Custom Cakes',
      description: 'Bespoke celebration cakes tailored to your vision, from elegant weddings to whimsical birthdays.',
      image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Artisan Pastries',
      description: 'Handcrafted croissants, tarts, and petit gateaux made with traditional French techniques.',
      image: 'https://images.pexels.com/photos/3776947/pexels-photo-3776947.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Dessert Tables',
      description: 'Curated dessert spreads that transform your events into unforgettable experiences.',
      image: 'https://images.pexels.com/photos/5945565/pexels-photo-5945565.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Daily Bakes',
      description: 'Fresh-from-the-oven breads, muffins, and cookies available every morning.',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="specialties" className="py-32 px-4 bg-[#0f221e]">
      <div ref={fadeRef} className="fade-in max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#f0d9b5]/70 text-[10px] tracking-[0.4em] uppercase mb-6">
            What We Offer
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f0d9b5] mb-6">
            Our Specialties
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#f0d9b5]/50 to-transparent mx-auto mb-6" />
          <p className="text-[#f9f3e9]/50 max-w-lg mx-auto text-sm font-light leading-relaxed">
            From everyday indulgences to once-in-a-lifetime celebrations, 
            we create moments of pure delight.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f221e] via-[#0f221e]/60 to-transparent flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#f0d9b5] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#f9f3e9]/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Border on hover */}
              <div className="absolute inset-0 border border-[#f0d9b5]/0 group-hover:border-[#f0d9b5]/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const fadeRef = useFadeIn();

  const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-32 bg-[#18342f] overflow-hidden">
      <div ref={fadeRef} className="fade-in">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <p className="text-[#f0d9b5]/70 text-[10px] tracking-[0.4em] uppercase mb-6">
            Our Creations
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f0d9b5] mb-6">
            Gallery
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#f0d9b5]/50 to-transparent mx-auto" />
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 px-3">
                  <div className="aspect-[16/9] overflow-hidden border border-[#f0d9b5]/10">
                    <img
                      src={image}
                      alt={`Gallery item ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-[#f0d9b5]/30 text-[#f0d9b5]/70 hover:border-[#f0d9b5] hover:text-[#f0d9b5] hover:bg-[#f0d9b5]/10 transition-all duration-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-[#f0d9b5]/30 text-[#f0d9b5]/70 hover:border-[#f0d9b5] hover:text-[#f0d9b5] hover:bg-[#f0d9b5]/10 transition-all duration-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-500 ${
                  currentSlide === index 
                    ? 'bg-[#f0d9b5] w-8' 
                    : 'bg-[#f0d9b5]/20 w-4 hover:bg-[#f0d9b5]/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const fadeRef = useFadeIn();

  const testimonials = [
    {
      name: 'Priya',
      event: 'Wedding Cake',
      text: 'Cellulouse created the most stunning wedding cake for our special day. Every detail was perfect, and the taste was absolutely divine!',
      rating: 5
    },
    {
      name: 'Rahul',
      event: 'Birthday Celebration',
      text: 'The custom cake they made for my daughter\'s birthday exceeded all expectations. She was over the moon!',
      rating: 4
    },
    {
      name: 'Ananya Reddy',
      event: 'Corporate Event',
      text: 'Their dessert table was the highlight of our company anniversary. Professional service and exquisite flavors.',
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-4 bg-[#0f221e]">
      <div ref={fadeRef} className="fade-in max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#f0d9b5]/70 text-[10px] tracking-[0.4em] uppercase mb-6">
            Testimonials
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f0d9b5] mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#f0d9b5]/50 to-transparent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-10 border border-[#f0d9b5]/10 hover:border-[#f0d9b5]/30 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#0f221e] flex items-center justify-center">
                <span className="text-[#f0d9b5]/30 text-4xl font-['Cormorant_Garamond'] leading-none">"</span>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f0d9b5] text-[#f0d9b5]" />
                ))}
              </div>
              
              <p className="text-[#f9f3e9]/60 leading-[1.9] mb-8 text-sm font-light">
                {testimonial.text}
              </p>
              
              <div className="pt-6 border-t border-[#f0d9b5]/10">
                <p className="font-['Cormorant_Garamond'] text-lg text-[#f0d9b5]/90">
                  {testimonial.name}
                </p>
                <p className="text-[#f9f3e9]/40 text-[10px] tracking-[0.2em] uppercase mt-1">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section with Parallax
function Contact() {
  const fadeRef = useFadeIn();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7693927/pexels-photo-7693927.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          transform: `translateY(${(scrollY - 4000) * 0.1}px)`,
          willChange: 'transform'
        }}
      />
      <div className="absolute inset-0 bg-[#18342f]/90" />
      
      <div ref={fadeRef} className="fade-in max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#f0d9b5]/70 text-[10px] tracking-[0.4em] uppercase mb-6">
            Get In Touch
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f0d9b5] mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#f0d9b5]/50 to-transparent mx-auto mb-6" />
          <p className="text-[#f9f3e9]/50 max-w-lg mx-auto text-sm font-light leading-relaxed">
            Ready to create something sweet? Reach out to discuss your custom order 
            or visit us at our patisserie.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="group text-center p-10 border border-[#f0d9b5]/10 hover:border-[#f0d9b5]/30 transition-all duration-500 bg-[#0f221e]/50 backdrop-blur-sm">
            <div className="w-14 h-14 mx-auto mb-6 border border-[#f0d9b5]/30 rounded-full flex items-center justify-center group-hover:border-[#f0d9b5]/60 group-hover:bg-[#f0d9b5]/5 transition-all duration-500">
              <Phone className="w-5 h-5 text-[#f0d9b5]/70 group-hover:text-[#f0d9b5] transition-colors" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-xl text-[#f0d9b5]/90 mb-3">
              Call Us
            </h3>
            <a 
              href="tel:+919876543210" 
              className="text-[#f9f3e9]/50 hover:text-[#f0d9b5] transition-colors text-sm"
            >
              +91 9908409786, <br />+91 8886004280
            </a>
          </div>

          {/* Location */}
          <div className="group text-center p-10 border border-[#f0d9b5]/10 hover:border-[#f0d9b5]/30 transition-all duration-500 bg-[#0f221e]/50 backdrop-blur-sm">
            <div className="w-14 h-14 mx-auto mb-6 border border-[#f0d9b5]/30 rounded-full flex items-center justify-center group-hover:border-[#f0d9b5]/60 group-hover:bg-[#f0d9b5]/5 transition-all duration-500">
              <MapPin className="w-5 h-5 text-[#f0d9b5]/70 group-hover:text-[#f0d9b5] transition-colors" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-xl text-[#f0d9b5]/90 mb-3">
              Visit Us
            </h3>
            <p className="text-[#f9f3e9]/50 text-sm leading-relaxed">
              306, Ayyappa Society, Madhapur<br />
              Hyderabad, Telangana
            </p>
          </div>

          {/* Hours */}
          <div className="group text-center p-10 border border-[#f0d9b5]/10 hover:border-[#f0d9b5]/30 transition-all duration-500 bg-[#0f221e]/50 backdrop-blur-sm">
            <div className="w-14 h-14 mx-auto mb-6 border border-[#f0d9b5]/30 rounded-full flex items-center justify-center group-hover:border-[#f0d9b5]/60 group-hover:bg-[#f0d9b5]/5 transition-all duration-500">
              <Clock className="w-5 h-5 text-[#f0d9b5]/70 group-hover:text-[#f0d9b5] transition-colors" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-xl text-[#f0d9b5]/90 mb-3">
              Opening Hours
            </h3>
            <p className="text-[#f9f3e9]/50 text-sm leading-relaxed">
              Tue - Sun: 11AM - 2AM<br />
              Monday: <b>Holiday</b>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://api.whatsapp.com/send/?phone=918886004280&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white text-[11px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            <Phone className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Order on WhatsApp</span>
          </a>
          <a
            href="tel:+919908409786"
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#f0d9b5]/60 text-[#f0d9b5] text-[11px] tracking-[0.2em] uppercase hover:bg-[#f0d9b5] hover:text-[#18342f] hover:border-[#f0d9b5] transition-all duration-500"
          >
            <Phone className="w-4 h-4" />
            Call to Order
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer with Parallax
function Footer() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7693927/pexels-photo-7693927.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          transform: `translateY(${(scrollY - 5000) * 0.15}px)`,
          willChange: 'transform'
        }}
      />
      <div className="absolute inset-0 bg-[#0f221e]/95" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0d9b5]/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#f0d9b5]/40 flex items-center justify-center">
                <span className="text-[#f0d9b5] text-sm font-['Cormorant_Garamond'] tracking-widest">CB</span>
              </div>
              <span className="font-['Cormorant_Garamond'] text-2xl text-[#f0d9b5]/90">
                Cellulouse Bakehouse
              </span>
            </div>
            <p className="text-[#f9f3e9]/40 text-sm leading-[1.9] font-light">
              Crafting sweet memories since 2025. 
              Hyderabad's premier luxury patisserie.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-['Cormorant_Garamond'] text-lg text-[#f0d9b5]/80 mb-6 tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Specialties', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-[#f9f3e9]/40 hover:text-[#f0d9b5] text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center">
            <h4 className="font-['Cormorant_Garamond'] text-lg text-[#f0d9b5]/80 mb-6 tracking-wide">
              Follow Us
            </h4>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a 
                href="https://www.instagram.com/cellulouse_bakehouse/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-[#f0d9b5]/20 flex items-center justify-center text-[#f0d9b5]/60 hover:border-[#f0d9b5]/60 hover:text-[#f0d9b5] hover:bg-[#f0d9b5]/5 transition-all duration-500"
>
  <Instagram className="w-4 h-4" />
</a>
              {/* <a 
                href="#" 
                className="w-11 h-11 border border-[#f0d9b5]/20 flex items-center justify-center text-[#f0d9b5]/60 hover:border-[#f0d9b5]/60 hover:text-[#f0d9b5] hover:bg-[#f0d9b5]/5 transition-all duration-500"
              >
                <Facebook className="w-4 h-4" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-[#f0d9b5]/10 text-center">
          <p className="text-[#f9f3e9]/30 text-[10px] tracking-[0.2em] uppercase">
            © 2025 Cellulouse Bakehouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Specialties />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
