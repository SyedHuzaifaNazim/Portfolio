import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start relative">

        {/* Background SVG */}
        <Image
          src="/images/geometric_shape.svg"
          alt="Decorative shape"
          width={400}
          height={400}
          className="absolute top-0 left-0 opacity-10 pointer-events-none"
        />

        {/* Text Section */}
        <div>
          <p className="text-sm text-gray-500 uppercase mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            An inspiring headline about yourself.
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Asalam-o-alikum! I am Syed Huzaifa Nazim, and I am currently a student at DUET,
              studying for a degree in Artificial Intelligence. I will graduate in the year 2027,
              and all the many opportunities beckon that are open for me to explore.
            </p>
            <p>
              I am highly passionate about web development, and my foundation in different technologies
              is very strong. From structured to semantic web pages in HTML5 and designing nice-looking
              interfaces with CSS3, the front-end element has really attracted me; however, I am also
              fascinated by going into the back-end with JavaScript and React JS, creating dynamic and
              interactive features.
            </p>
            <p>
              My skills also extend into database management and querying with MySQL and a good grasp
              on OOP principles with C++. But more than just technical skills, I am a fast learner,
              adaptable, and always up for challenges.
            </p>
            <p>
              I look forward to opportunities in which my skill set can be applied and learn more about
              being a web developer. If you are looking for a person who is passionate, dedicated, and
              continuously improving, then surely I would love to connect with you. Collaborate with me
              to make something amazing.
            </p>
          </div>

          {/* Button and Social Links */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link href="/about" className="border-2 border-black px-6 py-2 text-black hover:bg-black hover:text-white transition">
              More About Me
            </Link>
            <ul className="flex gap-4 text-gray-700">
              <li>
                <a href="#" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2
                    c0-2.325,1.42-3.592,3.5-3.592c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435
                    c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                <a href="https://www.instagram.com/developer_154/" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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

      </div>
    </section>
  );
}
