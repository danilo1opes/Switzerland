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
    <section className="bg-brand-secundary px-4 sm:px-6 md:px-12 lg:px-24 py-12">
      <div className="uppercase flex justify-center text-brand-primary text-4xl md:text-5xl lg:text-7xl text-center">
        <h1 className="font-ogg">
          <span className="font-bodoni font-semibold italic">Top</span>{' '}
          Destination
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {destinationImage.map((item, index) => (
          <div key={index} className="w-[80%] sm:w-64 md:w-80 max-w-sm mx-auto">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12 px-4 sm:px-6 md:px-16 lg:px-36">
        <p className="font-lora text-brand-primary text-base md:text-xl leading-relaxed">
          Com seus lagos cristalinos, vilarejos charmosos e os imponentes Alpes,
          a Suíça é o destino ideal para quem busca natureza, paz e paisagens de
          tirar o fôlego. Um verdadeiro paraíso em qualquer estação do ano.
        </p>
      </div>
    </section>
  );
}
