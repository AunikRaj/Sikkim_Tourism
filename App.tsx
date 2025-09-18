import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Camera, 
  Book, 
  Headphones, 
  Calendar, 
  Globe, 
  Users, 
  Shield,
  Play,
  ChevronRight,
  Star,
  Clock,
  Navigation
} from 'lucide-react';

interface Monastery {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  virtualTour: boolean;
  rating: number;
}

interface Event {
  id: number;
  title: string;
  date: string;
  monastery: string;
  type: string;
}

const monasteries: Monastery[] = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    image: "https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The largest monastery in Sikkim, known as the Dharma Chakra Centre",
    virtualTour: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    image: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "One of the oldest monasteries in Sikkim, meaning 'Perfect Sublime Lotus'",
    virtualTour: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "Tashiding, West Sikkim",
    image: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sacred monastery believed to wash away sins of pilgrims",
    virtualTour: false,
    rating: 4.6
  }
];

const events: Event[] = [
  {
    id: 1,
    title: "Losar Festival",
    date: "2024-02-10",
    monastery: "Rumtek Monastery",
    type: "Festival"
  },
  {
    id: 2,
    title: "Cham Dance Performance",
    date: "2024-02-15",
    monastery: "Pemayangtse Monastery",
    type: "Cultural"
  },
  {
    id: 3,
    title: "Prayer Ceremony",
    date: "2024-02-20",
    monastery: "Tashiding Monastery",
    type: "Spiritual"
  }
];

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Camera,
      title: "360° Virtual Tours",
      description: "Immersive panoramic views with narrated walkthroughs in multiple languages"
    },
    {
      icon: MapPin,
      title: "Interactive Map",
      description: "Geo-tagged locations with travel routes and nearby attractions"
    },
    {
      icon: Book,
      title: "Digital Archives",
      description: "AI-powered search through manuscripts, murals, and historical documents"
    },
    {
      icon: Headphones,
      title: "Smart Audio Guide",
      description: "Location-based guides with offline mode for remote areas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Sacred<span className="text-amber-400">Sikkim</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Discover Sikkim's Sacred Heritage Through Immersive Digital Experiences
          </p>
          <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
            Journey through ancient monasteries, explore sacred manuscripts, and connect with centuries of spiritual wisdom from anywhere in the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group">
              <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Start Virtual Tour
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center group">
              <MapPin className="w-5 h-5 mr-2 group-hover:bounce" />
              Explore Map
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronRight className="w-6 h-6 transform rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Immersive Cultural <span className="text-amber-600">Exploration</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience Sikkim's monastic heritage through cutting-edge technology and thoughtful digital preservation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-white shadow-xl border-l-4 border-amber-500' 
                      : 'bg-white/50 hover:bg-white/80 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      activeFeature === index ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Virtual monastery tour"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monasteries Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sacred <span className="text-amber-600">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Sikkim's most revered monasteries through our comprehensive digital collection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monasteries.map((monastery) => (
              <div key={monastery.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={monastery.image}
                      alt={monastery.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      {monastery.virtualTour && (
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Camera className="w-4 h-4 mr-1" />
                          360° Tour
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white">
                        <Star className="w-4 h-4 text-amber-400 mr-1" />
                        <span className="text-sm font-medium">{monastery.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{monastery.name}</h3>
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{monastery.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{monastery.description}</p>
                    
                    <button className="mt-4 text-amber-600 hover:text-amber-700 font-semibold flex items-center group/btn">
                      Explore Now
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Calendar */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cultural <span className="text-amber-600">Calendar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join sacred festivals and cultural events. Book your spiritual journey today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.monastery}</p>
                
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Book Experience
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Preserving Heritage, <span className="text-amber-400">Connecting Cultures</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform creates lasting impact by bridging ancient wisdom with modern technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Access", desc: "Making monasteries accessible worldwide" },
              { icon: Shield, title: "Digital Preservation", desc: "Protecting endangered cultural assets" },
              { icon: Users, title: "Community Empowerment", desc: "Supporting local communities" },
              { icon: Book, title: "Educational Impact", desc: "Enabling spiritual exploration globally" }
            ].map((impact, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
                <p className="text-gray-400 text-sm">{impact.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <Navigation className="w-5 h-5 mr-2" />
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Sacred<span className="text-amber-400">Sikkim</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Bridging ancient wisdom with modern technology
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;