import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-screen w-full"> 
        <Image
          src="/images/sanfran.jpg"
          alt="San Francisco cityscape"
          className="object-cover"
          quality={100}
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
          width={1920}
          height={1080}
        />
        
        {/* Content Overlay */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{ zIndex: 2 }}
        >
          <h1 className="text-6xl font-bold mb-4">Josue Uselmano</h1>
          <p className="text-xl mb-8">Web Developer | San Francisco</p>
          <button className="px-6 py-3 bg-transparent border-2 hover:bg-white hover:text-black transition-all">
            View My Work
          </button>
        </div>
      </div>
    </main>
  )
}