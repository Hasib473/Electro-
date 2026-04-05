import React from 'react';

const Manufacturer = () => {
  const logos = [
    { name: 'Samsung', id: 'samsung', color: 'text-[#1428a0]' },
    { name: 'Philips', id: 'philips', color: 'text-[#0073cf]' },
    { name: 'LG', id: 'lg', color: 'text-[#a50034]' },
    { name: 'Panasonic', id: 'panasonic', color: 'text-[#0047ab]' },
    { name: 'Vision', id: 'vision', color: 'text-[#333]' },
    { name: 'BR', id: 'br', color: 'text-[#000]' },
  ];

  return (
    <section className="py-15 px-5 bg-[#fafafa] overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#333] mb-10 tracking-wide">
        MANUFACTURERS
      </h2>
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex gap-8 animate-scroll-logos w-max"
          style={{ animation: 'scroll-logos 20s linear infinite' }}
        >
          {/* First set */}
          {logos.map((logo) => (
            <div
              key={`${logo.id}-1`}
              className="flex-shrink-0 w-50 h-25 flex items-center justify-center bg-white rounded-lg p-5 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <span className={`text-2xl font-bold uppercase tracking-widest ${logo.color}`}>
                {logo.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo) => (
            <div
              key={`${logo.id}-2`}
              className="flex-shrink-0 w-50 h-25 flex items-center justify-center bg-white rounded-lg p-5 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <span className={`text-2xl font-bold uppercase tracking-widest ${logo.color}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturer;
