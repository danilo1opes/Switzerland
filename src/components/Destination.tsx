import Image from 'next/image';

export function Destination() {
  const destinationImage = [
    {
      src: '/img/destination-1.jpg',
      alt: 'Lago e vilarejo na Suíça',
      width: 337,
      height: 450,
    },
    {
      src: '/img/destination-2.jpg',
      alt: 'Igreja entre as montanhas suíças',
      width: 337,
      height: 450,
    },
    {
      src: '/img/destination-3.jpg',
      alt: 'Paisagem montanhosa e rio sinuoso',
      width: 337,
      height: 450,
    },
  ];

  return (
    <section className="bg-brand-secundary px-4 sm:px-6 md:px-12 lg:px-24 py-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Título */}
        <div className="uppercase flex justify-center text-brand-primary text-4xl md:text-5xl lg:text-7xl text-center mb-16">
          <h1 style={{ fontFamily: 'Ogg Trial', fontWeight: 400 }}>
            <span className="font-bodoni font-semibold italic">Top</span>{' '}
            Destination
          </h1>
        </div>

        {/* Grid de Imagens */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {destinationImage.map((item, index) => (
            <div
              key={index}
              className="w-[80%] sm:w-64 md:w-80 max-w-sm mx-auto"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto rounded-md object-cover shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Descrição */}
        <div className="text-center px-4 sm:px-6 md:px-16 lg:px-36 max-w-4xl mx-auto">
          <p className="font-lora text-brand-primary text-base md:text-xl leading-relaxed">
            Com seus lagos cristalinos, vilarejos charmosos e os imponentes
            Alpes, a Suíça é o destino ideal para quem busca natureza, paz e
            paisagens de tirar o fôlego. Um verdadeiro paraíso em qualquer
            estação do ano.
          </p>
        </div>
      </div>
    </section>
  );
}
