import { getServerTranslation } from 'app/i18n';
import Image from 'next/image';

export default function pnp({ params: { lang } }: { params: { lang: string } }) {

  const { t } = getServerTranslation(lang, 'pnp');
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Entrepreneurship in Canada <br />
                <span className="text-yellow-300">Provincial Nominee Programs (PNP)</span>
            </h1>
            <p className="text-lg mb-6">
                Canada offers unique pathways for international entrepreneurs to
                establish or purchase a business and obtain permanent residency
                for themselves and their families through the Provincial Nominee Programs.
            </p>
            <a className="bg-white text-emerald-700 font-semibold">
                Start Your Journey
            </a>
          <Image
            src="https://via.placeholder.com/550x400"
            alt="Entrepreneurship Canada"
            className="rounded-2xl shadow-lg"
            width={550}
            height={400}
          />
        </div>
      </section>

      {/* Why Start a Business */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="https://via.placeholder.com/500x350"
          alt="Business Growth"
          className="rounded-xl shadow-md"
            width={500}
            height={350}
        />
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Start a Business in Canada?</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Stable and growing economy with global market access</li>
            <li>• Demand for foreign entrepreneurs to boost provincial growth</li>
            <li>• Strong government support: tax incentives, investments, infrastructure</li>
            <li>• Clear PR pathway for applicants and families</li>
          </ul>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            General Requirements of Entrepreneurial PNP Programs
          </h2>
          <p className="text-gray-600 mb-8">
            While each province has its own specific rules, common requirements include:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold mb-3">Entrepreneurial Experience</h3>
              <p className="text-gray-600">Proven entrepreneurial or managerial background.</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold mb-3">Minimum Investment</h3>
              <p className="text-gray-600">CAD 100,000 – CAD 600,000 depending on province.</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold mb-3">Feasible Business Plan</h3>
              <p className="text-gray-600">Must meet provincial standards and show growth potential.</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold mb-3">Job Creation</h3>
              <p className="text-gray-600">Commitment to employ Canadians or permanent residents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services for Entrepreneurs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {[
              "Estimating & finding a business",
              "Market research & information gathering",
              "Drafting marketing & staffing documents",
              "Preparing management & business plans",
              "Financial forms according to SME standards",
              "Resumes & required documents preparation",
              "Templates for required letters",
              "Filling provincial application forms",
              "EOI submission for provinces",
              "Net-worth verification & reporting",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 border-l-4 border-emerald-600 bg-gray-50 rounded"
              >
                {i + 1}. {item}
              </div>
            ))}
          </div>
          <div className="space-y-5">
            {[
              "Application submission & interview guidance",
              "Work visas & study permits",
              "Permanent residence application",
              "Nomination services application",
              "Landing services (bank, SIN, etc.)",
              "Government fees coverage",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 border-l-4 border-teal-600 bg-gray-50 rounded"
              >
                {i + 11}. {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Novanest */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Novanest?</h2>
          <ul className="space-y-4 text-lg">
            <li>✔ Proven track record in investment & acceleration</li>
            <li>✔ Expert immigration, financial & business consultants</li>
            <li>✔ End-to-end services: planning, documentation, settlement</li>
            <li>✔ Transparent, results-driven, tailored to your success</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Ready to Build Your Business in Canada?
        </h2>
        <a className="bg-emerald-600 text-white font-semibold">
          Get Started with Novanest
        </a>
      </section>
    </>
  )
}