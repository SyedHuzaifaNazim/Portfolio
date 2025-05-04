import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-sm uppercase text-gray-500">Contact</h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">Get In Touch</h2>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Let's take your business to the next level.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis,
            quos sint nostrum fugit aperiam inventore optio itaque molestias corporis, ipsa tenetur
            eligendi nihil iste porro, natus culpa.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="pb-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <Image
            src="/images/thumbs/contact/contact-1200.jpg"
            alt="Contact Image"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quisquam voluptatibus
              debitis aperiam ratione. Officia, suscipit iure, tenetur eum consequatur, omnis accusamus
              odit pariatur excepturi architecto veniam. Soluta modi dignissimos libero blanditiis.
            </p>
            <a
              href="mailto:#0"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
              </svg>
              Send Me An Email
            </a>
          </div>

          {/* Right Column: Social Links */}
          <div>
            <h6 className="text-lg font-semibold text-gray-800 mb-4">Follow On Social</h6>
            <ul className="flex gap-4">
              <li>
                <a href="#" aria-label="Facebook">
                  <svg className="w-6 h-6 text-gray-700 hover:text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2
                    c0-2.325,1.42-3.592,3.5-3.592c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435
                    c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <svg className="w-6 h-6 text-gray-700 hover:text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,
                    11.461c-2.282,0-4.402-0.661-6.186-1.809c0.324,0.037,0.636,0.05,0.973,
                    0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793
                    c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05
                    c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032
                    c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028
                    c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22
                    c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <svg className="w-6 h-6 text-gray-700 hover:text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624
                    c2.552,0,4.623-2.07,4.623-4.624C16.622,9.447,14.551,7.377,11.999,7.377zM11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003
                    c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004z" />
                    <circle cx="16.806" cy="7.207" r="1.078" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
