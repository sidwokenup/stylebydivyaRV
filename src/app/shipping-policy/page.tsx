import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";

export const metadata: Metadata = {
  title: "Shipping Policy | StyleByDivya",
  description:
    "Learn about StyleByDivya’s shipping policy including order processing times, delivery timelines, shipping charges, and tracking information.",
  openGraph: {
    title: "Shipping Policy | StyleByDivya",
    description:
      "Learn about StyleByDivya’s shipping policy including order processing times, delivery timelines, shipping charges, and tracking information.",
    url: "https://stylebydivya.in/shipping-policy",
    type: "website",
  },
};

export default function ShippingPolicy() {
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
            Shipping Policy
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
            Last Updated: {currentDate}
          </p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At StyleByDivya, we strive to deliver your orders safely and as quickly
            as possible. This Shipping Policy outlines our shipping procedures,
            delivery timelines, and related information for orders placed through
            our website.
          </p>
        </header>

        <div className="space-y-12 text-gray-800 leading-relaxed">
          {/* Section 1: Order Processing Time */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              1. Order Processing Time
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                All orders are typically processed within <strong>1–3 business days</strong>. Orders placed on weekends or public holidays will be processed on the next business day.
              </p>
              <p className="text-gray-600 italic">
                Note: Processing time is separate from the shipping time required for delivery.
              </p>
            </div>
          </section>

          {/* Section 2: Shipping Locations */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              2. Shipping Locations
            </h2>
            <p className="text-sm md:text-base">
              StyleByDivya currently ships across India. We partner with reliable courier services to ensure your order reaches you safely. International shipping options may be introduced in the future.
            </p>
          </section>

          {/* Section 3: Shipping Charges */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              3. Shipping Charges
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Shipping charges are calculated at checkout based on your delivery location and the total order value.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We may offer free shipping on orders above a certain value as part of promotional offers.</li>
                <li>Standard shipping rates apply to all other orders.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Delivery Time */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              4. Delivery Time
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Once shipped, estimated delivery times are as follows:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Metro Cities:</strong> 3–5 business days</li>
                <li><strong>Other Locations:</strong> 5–7 business days</li>
              </ul>
              <p className="text-sm text-gray-500">
                Please note that delivery timelines may vary due to external factors such as weather conditions, logistics delays, or public holidays.
              </p>
            </div>
          </section>

          {/* Section 5: Order Tracking */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              5. Order Tracking
            </h2>
            <p className="text-sm md:text-base">
              Once your order has been shipped, you will receive a confirmation email or SMS containing your tracking number and a link to track the status of your shipment in real-time.
            </p>
          </section>

          {/* Section 6: Delayed or Lost Shipments */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              6. Delayed or Lost Shipments
            </h2>
            <p className="text-sm md:text-base">
              If your order is delayed beyond the expected delivery timeline, please contact our support team. We will work with our logistics partners to track your shipment and resolve any issues promptly. StyleByDivya is not responsible for delays caused by the courier service but will assist you to the best of our ability.
            </p>
          </section>

          {/* Section 7: Incorrect Address */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              7. Incorrect Address details
            </h2>
            <p className="text-sm md:text-base">
              Customers are responsible for providing accurate and complete shipping details at checkout. StyleByDivya is not responsible for delivery failures, lost packages, or additional shipping costs resulting from incorrect or incomplete address information provided by the customer.
            </p>
          </section>

          {/* Section 8: Damaged Packages */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-black border-b border-gray-100 pb-2">
              8. Damaged Packages
            </h2>
            <p className="text-sm md:text-base">
              If you receive a package that appears visibly damaged or tampered with, please do not accept it. Record evidence (photos/videos) and contact our support team within <strong>48 hours</strong> of the delivery attempt so we can arrange a replacement or refund.
            </p>
          </section>

          {/* Section 9: Contact Information */}
          <section className="border-t border-gray-200 pt-8 mt-12 text-center md:text-left">
            <h2 className="text-xl font-serif font-medium mb-4 text-black">
              Contact Information
            </h2>
            <p className="text-sm md:text-base mb-2">
              If you have any questions regarding shipping or delivery, please contact us:
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
