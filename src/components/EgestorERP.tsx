import React from 'react';
import { Button } from '@/components/ui/button';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/17432";

  return <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 mb-8 md:mb-10">
          {/* Left column - Header Text */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 animate-fade-in">
            <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight px-4 md:px-0">Sistema de gestão empresarial</h2>
            </a>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal px-4 md:px-0">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Right column - Video Container */}
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png">
              <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in px-4">
          <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-sm">
            <button className="w-full py-3 md:py-4 text-base md:text-lg bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>;
};

export default EgestorERP;
