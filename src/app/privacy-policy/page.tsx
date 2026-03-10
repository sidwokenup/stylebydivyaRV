import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | StyleByDivya",
  description:
    "Read the Privacy Policy of StyleByDivya to understand how we collect, use, and protect your personal information when you use our website or purchase our products.",
  openGraph: {
    title: "Privacy Policy | StyleByDivya",
    description:
      "Read the Privacy Policy of StyleByDivya to understand how we collect, use, and protect your personal information when you use our website or purchase our products.",
    url: "https://stylebydivya.in/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-medium tracking-wide mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
            Last Updated: {currentDate}
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At StyleByDivya, we respect your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we collect,
            use, and safeguard your information when you visit our website or
            purchase products from our store.
          </p>
        </header>

        <div className="space-y-12 text-gray-800 leading-relaxed">
          {/* Section 1: Information We Collect */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <h3 className="font-semibold text-black mb-2 uppercase tracking-wider text-xs">Personal Information</h3>
                <p className="mb-2">We may collect the following personal information from you:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number (WhatsApp)</li>
                  <li>Shipping and Billing Address</li>
                  <li>Payment Information (processed securely through third-party gateways)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2 uppercase tracking-wider text-xs">Automatically Collected Data</h3>
                <p className="mb-2">When you browse our website, we automatically collect certain technical data, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP Address</li>
                  <li>Browser Type and Version</li>
                  <li>Device Information</li>
                  <li>Pages Visited and Time Spent on Site</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-sm md:text-base mb-3">We use the data we collect for various purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>Processing and fulfilling your orders.</li>
              <li>Communicating order updates and tracking information.</li>
              <li>Providing customer support and responding to inquiries.</li>
              <li>Improving website functionality and user experience.</li>
              <li>Sending promotional offers and newsletters (only if you opt-in).</li>
              <li>Detecting and preventing fraudulent or unauthorized activity.</li>
            </ul>
          </section>

          {/* Section 3: Sharing of Information */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              3. Sharing of Information
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                We may share your information with trusted third-party partners to provide our services, such as:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment gateway providers for secure transactions.</li>
                <li>Shipping and logistics partners for order delivery.</li>
                <li>Website hosting and analytics providers.</li>
                <li>Legal authorities if required by law or to protect our rights.</li>
              </ul>
              <p className="font-medium text-black mt-4">
                Important: StyleByDivya does not sell or rent customer personal information to third parties.
              </p>
            </div>
          </section>

          {/* Section 4: Payment Security */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              4. Payment Security
            </h2>
            <p className="text-sm md:text-base">
              All payments are processed securely through trusted and encrypted payment gateways. StyleByDivya does not store your credit/debit card details or sensitive payment information on its own servers.
            </p>
          </section>

          {/* Section 5: Cookies Policy */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              5. Cookies Policy
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Maintain your login sessions.</li>
                <li>Remember items in your shopping cart.</li>
                <li>Analyze website traffic and user behavior.</li>
                <li>Optimize performance and deliver personalized content.</li>
              </ul>
              <p>
                You can choose to disable cookies through your browser settings, although this may affect the functionality of certain parts of our website.
              </p>
            </div>
          </section>

          {/* Section 6: Data Protection & Security */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              6. Data Protection & Security
            </h2>
            <p className="text-sm md:text-base">
              We implement a variety of security measures, including SSL encryption and limited access protocols, to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7: User Rights */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              7. User Rights
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>Depending on your location, you may have the following rights regarding your data:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Right to access the personal data we hold about you.</li>
                <li>Right to request correction of incorrect information.</li>
                <li>Right to request deletion of your personal data.</li>
                <li>Right to opt-out of promotional marketing communications.</li>
              </ul>
            </div>
          </section>

          {/* Section 8: Data Retention */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              8. Data Retention
            </h2>
            <p className="text-sm md:text-base">
              We retain your personal information only for as long as is necessary to fulfill the purposes outlined in this Privacy Policy, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          {/* Section 9: Third-Party Links */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              9. Third-Party Links
            </h2>
            <p className="text-sm md:text-base">
              Our website may contain links to other websites. StyleByDivya is not responsible for the privacy practices or the content of such external sites.
            </p>
          </section>

          {/* Section 10: Children's Privacy */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              10. Children's Privacy
            </h2>
            <p className="text-sm md:text-base">
              Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under this age.
            </p>
          </section>

          {/* Section 11: Changes to Policy */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              11. Changes to Policy
            </h2>
            <p className="text-sm md:text-base">
              StyleByDivya reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with the revised "Last Updated" date at the top.
            </p>
          </section>

          {/* Section 12: Contact Information */}
          <section className="border-t border-gray-200 pt-8 mt-12 text-center md:text-left">
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              Contact Information
            </h2>
            <p className="text-sm md:text-base mb-2">
              If you have any questions regarding this Privacy Policy, please contact us:
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Business Name:</strong> StyleByDivya</p>
              <p><strong>Email:</strong> support@stylebydivya.in</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
