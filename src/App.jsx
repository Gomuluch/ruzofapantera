import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  Ghost,
  Users,
  Coffee,
  Code,
  Flame
} from 'lucide-react';


const RICKROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRickRoll = (e) => {
    e.preventDefault();
    window.open(RICKROLL_URL, '_blank');
  };

  const NavLink = ({ children }) => (
    <a 
      href={RICKROLL_URL} 
      onClick={handleRickRoll}
      className="text-gray-400 hover:text-pink-500 transition-colors duration-300 font-medium text-sm tracking-wide"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 font-sans selection:bg-pink-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleRickRoll}>
            <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-2 rounded-lg shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
              <Gamepad2 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              Różowa<span className="text-pink-500">Pantera</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <NavLink>O Studio</NavLink>
            <NavLink>The Presence</NavLink>
            <NavLink>Devlog</NavLink>
            <NavLink>Społeczność</NavLink>
            <button 
              onClick={handleRickRoll}
              className="bg-white text-black hover:bg-pink-500 hover:text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
            >
              Wspomóż nas
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-white/5 py-8 px-6 space-y-6 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
            <NavLink>O Studio</NavLink>
            <NavLink>The Presence</NavLink>
            <NavLink>Devlog</NavLink>
            <NavLink>Społeczność</NavLink>
            <button onClick={handleRickRoll} className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold">Kontakt</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 text-pink-400">
              <span className="animate-pulse">●</span>
              <span>EARLY ACCESS COMING SOON</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              Definiujemy <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500">nowoczesny horror.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light">
              Jesteśmy niezależnym kolektywem twórców, którzy wierzą, że najlepsze historie rodzą się z pasji, a nie z wielkich budżetów. Nasz pierwszy projekt zabierze Cię w miejsce, gdzie cisza jest najgłośniejszym dźwiękiem.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleRickRoll}
                className="group px-8 py-4 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-500 transition-all flex items-center justify-center shadow-lg shadow-pink-900/20"
              >
                Odkryj The Presence <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleRickRoll}
                className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-all"
              >
                Poznaj nasz zespół
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section - Indie Style */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Wypitych kaw', val: '1,240', icon: Coffee },
            { label: 'Linii kodu', val: '84k+', icon: Code },
            { label: 'Testerów alfa', val: '12', icon: Users },
            { label: 'Jump-scare\'ów', val: '∞', icon: Flame }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="flex items-center text-pink-500 mb-2">
                <stat.icon className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</span>
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">{stat.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project: The Presence */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group cursor-pointer" onClick={handleRickRoll}>
              <div className="absolute -inset-4 bg-pink-500/20 rounded-2xl blur-2xl group-hover:bg-pink-500/30 transition-all"></div>
              <div className="relative aspect-[4/5] md:aspect-square bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1000" 
                  alt="The Presence Game Art" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center space-x-2 text-pink-500 mb-2">
                    <Ghost className="w-6 h-6" />
                    <span className="font-bold tracking-widest text-sm uppercase">Psychological Horror</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white">The Presence</h3>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">Nasza wizja strachu.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                "The Presence" to nie jest zwykły horror. To gra o duchach, która wykorzystuje zaawansowany system detekcji głosu i adaptacyjną sztuczną inteligencję, by uczyć się Twoich lęków.
              </p>
              <div className="space-y-4">
                {[
                  "Unikalna mechanika śledztwa paranormalnego",
                  "Gęsty, duszny klimat starej kamienicy",
                  "Brak tanich jump-scare'ów – liczy się napięcie",
                  "Tworzona na Unreal Engine 5 z miłością do detali"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={handleRickRoll}
                className="inline-flex items-center text-pink-500 font-bold hover:text-pink-400 transition-colors pt-4"
              >
                Przeczytaj cały devlog <ExternalLink className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 italic">"Nie mamy milionów, mamy pomysły."</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Jesteśmy grupą studentów i pasjonatów, którzy po godzinach tworzą to, w co sami chcieliby grać. **Różowa Pantera** powstała z buntu przeciwko powtarzalności w branży gier. Wierzymy w autentyczność i bezpośredni kontakt z naszą społecznością.
          </p>
          <div className="flex justify-center space-x-4">
             <button onClick={handleRickRoll} className="text-white hover:text-pink-500 transition-colors"><Twitter /></button>
             <button onClick={handleRickRoll} className="text-white hover:text-pink-500 transition-colors"><Github /></button>
             <button onClick={handleRickRoll} className="text-white hover:text-pink-500 transition-colors"><Linkedin /></button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto border border-white/10 rounded-3xl p-12 text-center bg-gradient-to-b from-white/[0.03] to-transparent">
          <h2 className="text-3xl font-bold text-white mb-4">Bądź częścią procesu</h2>
          <p className="text-gray-400 mb-8">Zapisz się do naszego biuletynu, aby otrzymywać ekskluzywne screeny z produkcji i zaproszenia do testów.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleRickRoll}>
            <input 
              type="email" 
              placeholder="Twój e-mail" 
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
              required
            />
            <button className="bg-white text-black font-bold px-8 py-3 rounded-lg hover:bg-pink-500 hover:text-white transition-all">
              Zapisz się
            </button>
          </form>
          <p className="mt-4 text-[10px] text-gray-600 uppercase tracking-widest">Szanujemy Twoją prywatność. Żadnego spamu.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4" onClick={handleRickRoll} style={{cursor: 'pointer'}}>
              <div className="bg-pink-600 p-1.5 rounded-md">
                <Gamepad2 className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white uppercase tracking-tighter">
                RUZOFA<span className="text-pink-500">PANTERA</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Różowa Pantera Studio. Crafted with passion in Poland.</p>
          </div>
          
          <div className="flex space-x-8 text-sm font-medium">
             <button onClick={handleRickRoll} className="text-gray-400 hover:text-pink-500 transition-colors">Press Kit</button>
             <button onClick={handleRickRoll} className="text-gray-400 hover:text-pink-500 transition-colors">Kariera</button>
             <button onClick={handleRickRoll} className="text-gray-400 hover:text-pink-500 transition-colors">Wsparcie</button>
             <button onClick={handleRickRoll} className="text-gray-400 hover:text-pink-500 transition-colors">Kontakt</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;