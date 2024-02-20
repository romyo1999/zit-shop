import React from 'react';
import {Link} from "react-router-dom";

const Pursh = () => {
    return (
        <div>
            <h4 className="container container-lg font-monospace p-5 mx-auto">
                <h2 className="text-center font-monospace p-3 text-dark">Purchase and Payment Policy</h2>

                Thank you for choosing <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link> as your fashion destination. To ensure a smooth and enjoyable shopping experience, please take a moment to review our Purchase and Payment Policy.

                <h3 className="font-monospace text-info p-3">1. Placing an Order:</h3>
                When you find an item you love, click "Add to Cart" and follow the easy checkout process. Double-check your order details, including product quantities, sizes, and shipping address, before confirming your purchase.

                <h3 className="font-monospace text-info p-3">2. Account Information:</h3>
                To streamline your shopping experience, consider creating a <Link to="/account" className="text-decoration-none"><span className="text-danger custom-hover">ZIT-SHOP account</span></Link>. This allows you to track your orders, save favorite items, and enjoy personalized recommendations.

                <h3 className="font-monospace text-info p-3">3. Payment Methods:</h3>
                We accept a variety of payment methods, including major credit/debit cards and secure online payment options. During checkout, choose your preferred payment method and enter the necessary details.

                <h3 className="font-monospace text-info p-3">4. Order Confirmation:</h3>
                After completing your purchase, you will receive an order confirmation email with details of your order. Please keep this email for your records and reference.

                <h3 className="font-monospace text-info p-3">5. Security Measures:</h3>
                Your payment information is encrypted and processed securely. We employ industry-standard security measures to protect your personal and financial details during the transaction.

                <h3 className="font-monospace text-info p-3">6. Order Processing:</h3>
                Once your order is confirmed, our team works diligently to process and dispatch it at the earliest. You will receive a shipping confirmation email with tracking details once your order is on its way.

                <h3 className="font-monospace text-info p-3">7. Cancellations:</h3>
                If you need to cancel an order, please contact our customer support team at [orders@zit-shop.com] as soon as possible. Once an order is dispatched, it cannot be canceled.

                <h3 className="font-monospace text-info p-3">8. Pricing and Promotions:</h3>
                Prices are listed in your local currency and include applicable taxes. Keep an eye on our website for promotions, discounts, and special offers that may enhance your shopping experience.

                <h3 className="font-monospace text-info p-3">9. International Orders:</h3>
                <Link to="/shipping" className="text-decoration-none"><span className="text-danger custom-hover">International shipping</span></Link> is available. Please review our shipping policy for details on delivery times and applicable charges.

                <h3 className="font-monospace text-info p-3">10. Assistance and Inquiries:</h3>
                Should you encounter any issues or have questions regarding your purchase, our customer support team is ready to assist. Reach out to [support@zit-shop.com], and we'll get back to you promptly.

                By making a purchase on <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>, you agree to adhere to the terms outlined in this Purchase and Payment Policy. We appreciate your trust and look forward to being part of your stylish journey. Happy shopping!
                </h4>
        </div>
    );
};

export default Pursh;
