import React, { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-red/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] glass-morphism py-3 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="/logo_licoreria.jpg" 
              alt="Don Sancho Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover border border-white/10"
            />
            <div className="text-xl md:text-2xl font-display font-bold tracking-tighter">
              <span className="text-white uppercase">Don Sancho</span>
              <span className="text-[8px] md:text-[10px] block tracking-[0.3em] md:tracking-[0.4em] font-light opacity-60 text-brand-red leading-none">LICORERÍA</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-xs uppercase tracking-widest font-medium opacity-80">
            <a href="#" className="hover:text-brand-red transition-colors">Catálogo</a>
            <a href="#" className="hover:text-brand-red transition-colors">Ofertas</a>
            <a href="#" className="hover:text-brand-red transition-colors">Whiskies</a>
            <a href="#ubicacion" className="hover:text-brand-red transition-colors">Ubicación</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-brand-red text-white px-5 py-2 rounded-md text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all font-bold">
              Pedir Ahora
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black/95 z-[90] transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl uppercase tracking-[0.2em] font-display font-bold">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-red">Catálogo</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-red">Ofertas</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-red">Whiskies</a>
            <a href="#ubicacion" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-red">Ubicación</a>
            <button className="bg-brand-red text-white px-8 py-3 rounded-md text-sm uppercase tracking-widest font-bold mt-4">
              Pedir WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-brand-red font-display italic text-lg md:text-2xl mb-4 animate-fade-in">Si se bebe, lo tenemos</h2>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-6 md:mb-8 leading-tight tracking-tight text-white">
            Pasión por la <br/>
            <span className="text-brand-red">Calidad</span>
          </h1>
          <p className="text-base md:text-xl text-white/70 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            La mayor variedad de licores nacionales e importados en un solo lugar. Tradición y servicio que nos distingue en Los Teques.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-md transition-all duration-300 font-bold tracking-widest uppercase text-xs md:text-sm shadow-xl shadow-brand-red/20">
              Ver Catálogo
            </button>
            <button className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-md border border-white/20 hover:border-brand-red hover:text-brand-red transition-all uppercase text-xs md:text-sm tracking-widest font-bold">
              Promociones
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 md:py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:inter-16">
            <div className="mb-6 md:mb-0">
              <h3 className="text-brand-red uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4">Lo más vendido</h3>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Favoritos de la Casa</h2>
            </div>
            <a href="#" className="text-white/40 hover:text-brand-red transition-colors uppercase tracking-widest text-[10px] md:text-xs border-b border-white/10 pb-1">
              Ver Todo el Stock
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: 'Buchanan\'s Deluxe', type: 'Whisky', img: '/567683338_18207138865311767_7455121926757052213_n.jpg' },
              { name: 'Old Parr 12 Años', type: 'Whisky', img: '/567833461_18242063581288279_6242565056954938548_n.jpg' },
              { name: 'Vino Tinto Reserva', type: 'Vinos', img: '/568674536_18069414416463065_2424397694456831768_n.webp' },
              { name: 'Cerveza Premium', type: 'Importadas', img: '/568876525_18128914084434602_6487161575435361722_n.jpg' },
              { name: 'Ron Añejo Especial', type: 'Nacional', img: '/571743518_18363378898086580_5954317462196941058_n.jpg' },
              { name: 'Vodka Ultra', type: 'Destilados', img: '/572998254_18542991010003889_4862062699014082415_n.jpg' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-5 md:mb-6 aspect-[3/4] bg-neutral-900 rounded-lg shadow-lg">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 bg-brand-red text-white text-[9px] md:text-[10px] px-2 md:px-3 py-1 font-bold uppercase tracking-tighter rounded-sm">
                    Destacado
                  </div>
                </div>
                <p className="text-brand-red uppercase tracking-widest text-[9px] md:text-[10px] mb-2 font-bold">{item.type}</p>
                <h4 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-brand-red transition-colors">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-black" id="ubicacion">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-brand-red uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4">Visítanos</h3>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 md:mb-8">Nuestra Ubicación</h2>
              <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
                Estamos ubicados en un punto estratégico para servirte mejor. Encuentra la mayor variedad de licores en Los Teques.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-sm md:text-base">Dirección</h4>
                    <p className="text-white/40 text-sm md:text-base">Av. Bolívar & C. Ayacucho, Los Teques 1201, Miranda.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-sm md:text-base">Horario</h4>
                    <p className="text-white/40 text-sm md:text-base">Lunes a Sábado: 9:00 AM - 9:00 PM<br/>Domingos: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/mHbjfTS2oVsFykeB7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-10 inline-block w-full sm:w-auto text-center bg-white text-black px-8 py-3 rounded-md font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-brand-red hover:text-white transition-all"
              >
                Abrir en Google Maps
              </a>
            </div>
            <div className="order-1 lg:order-2 h-[300px] md:h-[450px] rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-brand-red/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.3216847844!2d-67.0423184!3d10.3161313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af8df2944b5ef%3A0xe543e5c9428b4c0e!2sLicoreria%20Don%20Sancho!5e0!3m2!1ses!2sve!4v1713645000000!5m2!1ses!2sve" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col gap-4">
        {/* Telegram Button */}
        <a 
          href="https://t.me/licoreriadonsancho" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0088cc] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        >
          <div className="absolute top-1/2 -left-32 -translate-y-1/2 bg-white text-black text-[9px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Contáctanos por Telegram
          </div>
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z"/>
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/584120000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        >
          <div className="absolute top-1/2 -left-32 -translate-y-1/2 bg-white text-black text-[9px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Escríbenos por WhatsApp
          </div>
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <img 
              src="/logo_licoreria.jpg" 
              alt="Don Sancho Logo" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg mb-4 border border-white/10"
            />
            <div className="text-xl md:text-2xl font-display font-bold">
              <span className="text-brand-red">Don</span> <span className="text-white">Sancho</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 md:mb-12 text-[10px] md:text-sm text-white/40 uppercase tracking-[0.2em]">
            <a href="https://www.instagram.com/licoreriadonsancho/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Instagram</a>
            <a href="https://wa.me/584120000000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">WhatsApp</a>
            <a href="https://t.me/licoreriadonsancho" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Telegram</a>
            <a href="https://maps.app.goo.gl/mHbjfTS2oVsFykeB7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Ubicación</a>
          </div>
          <p className="text-white/20 text-[9px] md:text-xs tracking-widest uppercase px-4">
            &copy; {new Date().getFullYear()} Licorería Don Sancho. El exceso de alcohol es perjudicial para la salud.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
