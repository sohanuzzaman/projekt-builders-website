export default function PrivacyPolicy() {
  return (
    <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Privacy Policy
          </h1>
          <p className="text-lg text-coastal-text font-light leading-relaxed tracking-wide">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-coastal-text">
          <h2 className="text-2xl font-light uppercase tracking-[0.1em] text-coastal-text mb-6">
            Information We Collect
          </h2>
          <p className="mb-6 font-light leading-relaxed">
            We collect information you provide directly to us, such as when you contact us through our website, 
            subscribe to our newsletter, or engage our services.
          </p>

          <h2 className="text-2xl font-light uppercase tracking-[0.1em] text-coastal-text mb-6 mt-12">
            How We Use Your Information
          </h2>
          <p className="mb-6 font-light leading-relaxed">
            We use the information we collect to provide our services, communicate with you, 
            and improve our offerings. We do not sell or share your personal information with third parties 
            without your consent.
          </p>

          <h2 className="text-2xl font-light uppercase tracking-[0.1em] text-coastal-text mb-6 mt-12">
            Contact Us
          </h2>
          <p className="mb-6 font-light leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
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
