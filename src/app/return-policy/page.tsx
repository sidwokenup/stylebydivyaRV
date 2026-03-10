import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";

export const metadata: Metadata = {
  title: "Return & Refund Policy | StyleByDivya",
  description:
    "Read the Return & Refund Policy of StyleByDivya to understand our policies regarding product returns, exchanges, refunds, and eligibility conditions.",
  openGraph: {
    title: "Return & Refund Policy | StyleByDivya",
    description:
      "Read the Return & Refund Policy of StyleByDivya to understand our policies regarding product returns, exchanges, refunds, and eligibility conditions.",
    url: "https://stylebydivya.in/return-policy",
    type: "website",
  },
};

export default function ReturnPolicy() {
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
            Return & Refund Policy
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
            Last Updated: {currentDate}
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At StyleByDivya, we want you to be completely satisfied with your
            purchase. If for any reason you are not happy with your order, you may
            request a return or exchange according to the policy outlined below.
          </p>
        </header>

        <div className="space-y-12 text-gray-800 leading-relaxed">
          {/* Section 1: Eligibility for Returns */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              1. Eligibility for Returns
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                To be eligible for a return, please ensure that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The item is returned within 7 days of delivery.</li>
                <li>The product is unused, unwashed, and in its original condition.</li>
                <li>All original tags and labels are attached.</li>
                <li>The original packaging is included.</li>
              </ul>
              <p className="mt-2 text-gray-600 italic">
                Note: Returns may be rejected if the product shows signs of use, damage, washing, or if tags are missing.
              </p>
            </div>
          </section>

          {/* Section 2: Non-Returnable Items */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              2. Non-Returnable Items
            </h2>
            <p className="text-sm md:text-base mb-3">
              Certain items cannot be returned or exchanged, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>Items purchased during a sale or clearance event.</li>
              <li>Customized or made-to-order products.</li>
              <li>Products damaged due to customer misuse or negligence.</li>
            </ul>
          </section>

          {/* Section 3: Exchange Policy */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              3. Exchange Policy
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                We allow exchanges for size issues or defective products, subject to the following conditions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exchange requests must be made within 7 days of delivery.</li>
                <li>Exchanges are subject to product availability.</li>
              </ul>
              <p>
                If the requested size is unavailable, you may choose to receive store credit or a refund processed according to our refund policy.
              </p>
            </div>
          </section>

          {/* Section 4: Refund Policy */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              4. Refund Policy
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Once your returned item is received and inspected, we will notify you via email regarding the approval or rejection of your refund.
              </p>
              <p>
                If approved, your refund will be processed to the original method of payment within <strong>5–10 business days</strong>.
              </p>
            </div>
          </section>

          {/* Section 5: Return Process */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              5. Return Process
            </h2>
            <ol className="list-decimal pl-5 space-y-3 text-sm md:text-base">
              <li>Contact our support team with your order details and reason for return.</li>
              <li>Wait for return authorization and shipping instructions.</li>
              <li>Pack the item securely in its original packaging.</li>
              <li>Ship the product back to the address provided by our team.</li>
              <li>Once received and verified, your refund or exchange will be processed.</li>
            </ol>
          </section>

          {/* Section 6: Shipping Charges for Returns */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              6. Shipping Charges for Returns
            </h2>
            <p className="text-sm md:text-base">
              Customers are responsible for return shipping costs unless the product received was damaged, defective, or incorrect. In such cases, StyleByDivya will cover the return shipping expenses.
            </p>
          </section>

          {/* Section 7: Damaged or Incorrect Items */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              7. Damaged or Incorrect Items
            </h2>
            <p className="text-sm md:text-base mb-3">
              If you receive a damaged or incorrect item, please contact us within <strong>48 hours</strong> of delivery with clear photos of the product and packaging.
            </p>
            <p className="text-sm md:text-base">
              We will verify the issue and arrange for a replacement or a full refund, depending on your preference and product availability.
            </p>
          </section>

          {/* Section 8: Order Cancellation */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              8. Order Cancellation
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Orders can be cancelled before they are shipped. Once an order has been dispatched, it cannot be cancelled.
              </p>
              <p>
                To request a cancellation, please contact our support team immediately after placing your order.
              </p>
            </div>
          </section>

          {/* Section 9: Contact Information */}
          <section className="border-t border-gray-200 pt-8 mt-12 text-center md:text-left">
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              Contact Information
            </h2>
            <p className="text-sm md:text-base mb-2">
              If you have any questions regarding returns or refunds, please contact us:
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
