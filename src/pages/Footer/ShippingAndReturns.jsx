import React from 'react';

const Section = ({ title, content }) => (
  <div className="font-Lato py-6">
    <h2 className="font-700 text-[24px]">{title}</h2>
    <p>{content}</p>
  </div>
);

const ShippingAndReturns = () => (
  <div className="flex flex-col bg-white px-[150px] max-sm:px-[46px] max-lg:px-[80px] max-xl:px-[100px] py-10 gap-4">
    <Section
      title="Introduction to Shipping Policy"
      content={`At Java Sports, we are committed to delivering your cricket gear swiftly and securely. Here’s how we ensure a smooth shipping process:
Shipping Options: Java Sports offers various shipping options, including Standard, Express, and International Shipping, to accommodate your needs. Fast Shipping is available for eligible products and regions.
Processing Times: Orders are processed within 1-2 business days. Fast Shipping orders placed before 3 PM (local warehouse time) are dispatched the same day.
Delivery Times: Delivery times vary based on the shipping option chosen and your location. Standard shipping typically takes 3-5 business days domestically, while international shipping can take 7-14 business days, depending on customs clearance.
Shipping Costs: Shipping costs are calculated based on the weight, size, and destination of your order. Detailed costs will be provided at checkout.
Tracking: Every order is provided with a tracking number. Customers will receive email notifications with tracking details to monitor their delivery status.
International Orders: Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.`}
    />
    <Section
      title="Refund Policy"
      content={`Your satisfaction is our top priority. If you’re not completely happy with your purchase, here’s how our refund process works:
Return Eligibility: Items can be returned within 30 days of receipt. To be eligible for a return, items must be unused, in the original packaging, and in the same condition that you received them.
Return Process: To initiate a return, please contact our customer service team at support@javasports.com. We will provide you with a return shipping label and instructions on how to send your items back to us.
Refunds: Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment, within a certain amount of days.
International Orders: Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
Exchanges: We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@javasports.com.
Shipping Costs for Returns: If the return is due to an error on our part (received an incorrect or defective item, etc.), we will cover the return shipping costs. Otherwise, customers are responsible for return shipping fees.`}
    />
  </div>
);

export default ShippingAndReturns;
