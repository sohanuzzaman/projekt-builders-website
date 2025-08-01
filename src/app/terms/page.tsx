export default function TermsOfService() {
  return (
    <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Terms of Service
          </h1>
          <p className="text-lg text-coastal-text font-light leading-relaxed tracking-wide">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-coastal-text">
          <h2 className="text-2xl font-light uppercase tracking-[0.1em] text-coastal-text mb-6">
            Services
          </h2>
          <p className="mb-6 font-light leading-relaxed">
            Projekt Builders provides architectural project management services. 
            These terms govern your use of our website and services.
          </p>

          <h2 className="text-2xl font-light uppercase tracking-[0.1em] text-coastal-text mb-6 mt-12">
            Professional Standards
          </h2>
          <p className="mb-6 font-light leading-relaxed">
            We maintain the highest professional standards in all our work and expect 
            mutual respect in all client relationships.
          </p>

          <h2 className="text-2xl font-light uppercase tracking-[0.1em] text-coastal-text mb-6 mt-12">
            Limitation of Liability
          </h2>
          <p className="mb-6 font-light leading-relaxed">
            Our liability is limited to the terms specified in individual service agreements. 
            We recommend consulting with legal professionals for specific project requirements.
          </p>

          <h2 className="text-2xl font-light uppercase tracking-[0.1em] text-coastal-text mb-6 mt-12">
            Contact
          </h2>
          <p className="mb-6 font-light leading-relaxed">
            For questions about these terms, please contact us at:
          </p>
          <p className="font-light leading-relaxed">
            Email: <a href="mailto:hello@projektbuilders.com.au" className="text-coastal-gold hover:underline">hello@projektbuilders.com.au</a><br />
            Phone: <a href="tel:+61499080405" className="text-coastal-gold hover:underline">+61 0499 080 405</a>
          </p>
        </div>
      </div>
    </section>
  );
}
