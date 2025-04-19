import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section id="intro" className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <p className="text-sm text-gray-500 uppercase mb-2">
            Hello, I'm Syed Huzaifa Nazim
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
            I develop Websites <br />
            Android Apps for <br />
            your business that <br />
            get results.
          </h1>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/WhatsApp Image 2024-03-02 at 1.43.27 AM.jpeg"
              alt="Huzaifa profile"
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down CTA */}
      <div className="text-center mt-10">
        <Link href="#about" className="inline-flex flex-col items-center text-orange-600 hover:text-orange-800">
          <svg
            className="mb-1 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="7 13 12 18 17 13" />
            <line x1="12" y1="18" x2="12" y2="6" />
          </svg>
          <span className="text-sm font-medium">Scroll for more</span>
        </Link>
      </div>
    </section>
  );
}
