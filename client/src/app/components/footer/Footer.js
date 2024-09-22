/** @format */

// components/Footer.tsx
import NewsletterSection from "./NewsLetterSection";
import ServiceInfoSection from "./ServiceInfoSection";
import FooterLinks from "./FooterLinks";
import CopyrightSection from "./CopyrightSection";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <NewsletterSection />
        <ServiceInfoSection />
        <FooterLinks />
      </div>
      <CopyrightSection />
    </footer>
  );
};

export default Footer;
