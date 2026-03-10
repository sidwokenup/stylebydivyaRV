import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | StyleByDivya",
  description:
    "Read the Terms & Conditions for using the StyleByDivya website and purchasing products. Learn about orders, payments, shipping, returns, and user responsibilities.",
  openGraph: {
    title: "Terms & Conditions | StyleByDivya",
    description:
      "Read the Terms & Conditions for using the StyleByDivya website and purchasing products. Learn about orders, payments, shipping, returns, and user responsibilities.",
    url: "https://stylebydivya.in/terms-and-conditions",
    type: "website",
  },
};

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
            Last Updated: {currentDate}
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Welcome to StyleByDivya. These Terms & Conditions outline the rules and
            regulations for the use of our website and the purchase of products
            through our online store. By accessing this website or placing an
            order, you agree to these terms.
          </p>
        </header>

        <div className="space-y-12 text-gray-800 leading-relaxed">
          {/* Section 1: Use of Website */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              1. Use of Website
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>
                By using this website, you confirm that you are at least 18 years
                of age or accessing the site under the supervision of a parent or
                guardian.
              </li>
              <li>
                You agree to provide accurate, current, and complete information
                during the registration and checkout process.
              </li>
              <li>
                You must not use this website for any illegal or unauthorized
                purpose, including but not limited to hacking, introducing viruses,
                or disrupting the platform's functionality.
              </li>
              <li>
                We reserve the right to refuse service, terminate accounts, or
                cancel orders at our discretion if we believe user conduct
                violates applicable laws or is harmful to our interests.
              </li>
            </ul>
          </section>

          {/* Section 2: Product Information */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              2. Product Information
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                We strive to display the colors and details of our products as
                accurately as possible. However, due to variations in device
                displays and lighting, the actual color of the product may differ
                slightly from what you see on your screen.
              </p>
              <p>
                All products are subject to availability. We reserve the right to
                limit the quantity of products we supply, supply only part of an
                order, or discontinue any product at any time without prior notice.
              </p>
            </div>
          </section>

          {/* Section 3: Pricing & Payments */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              3. Pricing & Payments
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                All prices listed on the website are in Indian Rupees (INR) and are
                inclusive of applicable taxes unless stated otherwise.
              </p>
              <p>
                We reserve the right to change prices at any time without prior
                notice. However, the price applicable to your order will be the
                price at the time you place the order.
              </p>
              <p>
                Payment must be completed in full before your order is processed.
                We accept the following payment methods:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Credit Cards & Debit Cards</li>
                <li>UPI (Unified Payments Interface)</li>
                <li>Net Banking</li>
                <li>Secure Payment Gateways</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Orders & Acceptance */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              4. Orders & Acceptance
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Upon placing an order, you will receive an email confirmation acknowledging receipt of your order. This confirmation does not constitute acceptance of your order.
              </p>
              <p>
                Order acceptance and the formation of the contract between you and StyleByDivya will occur when we dispatch the products to you.
              </p>
              <p>
                We reserve the right to cancel or refuse any order for reasons including, but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Product unavailability or stock issues.</li>
                <li>Errors in pricing or product information.</li>
                <li>Suspicion of fraudulent or unauthorized activity.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Shipping & Delivery */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              5. Shipping & Delivery
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                We aim to dispatch orders within the timelines specified on the product page. Standard delivery typically takes between 5-10 business days, depending on your location.
              </p>
              <p>
                While we work with reliable logistics partners, delivery timelines are estimates and may be subject to delays due to unforeseen circumstances, such as weather conditions or operational issues.
              </p>
              <p>
                You are responsible for providing a correct and complete shipping address. We are not liable for delayed or failed deliveries resulting from incorrect address details provided by you.
              </p>
            </div>
          </section>

          {/* Section 6: Returns & Exchanges */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              6. Returns & Exchanges
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                We accept returns and exchanges under specific conditions. Items must be returned within 7 days of delivery, unused, unwashed, and with all original tags and packaging intact.
              </p>
              <p>
                <strong>Non-Returnable Items:</strong> Custom-made, personalized, or sale items are not eligible for return or exchange unless they arrive damaged or defective.
              </p>
              <p>
                Refunds (if applicable) will be processed to the original method of payment after we receive and inspect the returned item. Exchanges are subject to stock availability.
              </p>
            </div>
          </section>

          {/* Section 7: Intellectual Property */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              7. Intellectual Property
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                All content on this website, including but not limited to logos, designs, text, graphics, images, and software, is the exclusive property of StyleByDivya and is protected by applicable copyright and trademark laws.
              </p>
              <p>
                You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website or its content without express written permission from us.
              </p>
            </div>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              8. Limitation of Liability
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                StyleByDivya shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or products.
              </p>
              <p>
                The website and products are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, secure, or error-free.
              </p>
            </div>
          </section>

          {/* Section 9: Privacy Policy */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              9. Privacy Policy
            </h2>
            <p className="text-sm md:text-base">
              Your submission of personal information through the store is governed by our Privacy Policy. Please review our <a href="/privacy-policy" className="text-[#C6A756] hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your data.
            </p>
          </section>

          {/* Section 10: Third-Party Services */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              10. Third-Party Services
            </h2>
            <p className="text-sm md:text-base">
              We may use third-party services, such as payment gateways and shipping partners, to facilitate our services. These third parties have their own terms and policies. We recommend you read their policies to understand how your information is handled by these providers.
            </p>
          </section>

          {/* Section 11: Governing Law */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              11. Governing Law
            </h2>
            <p className="text-sm md:text-base">
              These Terms & Conditions and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </section>

          {/* Section 12: Changes to Terms */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              12. Changes to Terms
            </h2>
            <p className="text-sm md:text-base">
              We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms & Conditions by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>

          {/* Section 13: Contact Information */}
          <section className="border-t border-gray-200 pt-8 mt-12">
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              Contact Information
            </h2>
            <p className="text-sm md:text-base mb-2">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="text-sm text-gray-600">
              <p><strong>Email:</strong> support@stylebydivya.in</p>
              <p><strong>Business Name:</strong> StyleByDivya</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
