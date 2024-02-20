import React from 'react';
import {Link} from "react-router-dom";

const FAQ = () => {
    return (
        <div>
            <h4 className="container container-lg font-monospace p-5 mx-auto">
                Welcome to the Frequently Asked Questions (FAQ) section of <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>. We're here to address any queries you may have and provide you with the information you need to make your shopping experience with us as smooth as possible.

                <h3 className="font-monospace text-info">1. How can I create an account on <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>?</h3>
                Creating an account is quick and easy. Click on the "Sign Up" or "Account" button, fill in the required information, and you're all set to explore and shop!

                <h3 className="font-monospace text-info">2. What benefits come with having an account?</h3>
                With a <Link to="/account" className="text-decoration-none"><span className="text-danger custom-hover">ZIT-SHOP account</span></Link>, you can enjoy personalized recommendations, track your orders, and manage your preferences. It also makes the checkout process faster.

                    <h3 className="font-monospace text-info">3. How do I reset my password?</h3>
                If you've forgotten your password, click on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email to reset your password securely.

                        <h3 className="font-monospace text-info">4. Can I change my shipping address after placing an order?</h3>
                Unfortunately, once an order is confirmed, the shipping address cannot be changed. Please double-check your information before confirming your purchase.

                            <h3 className="font-monospace text-info">5. What if I receive a damaged or incorrect item?</h3>
                We apologize for any inconvenience. Please contact our customer support team at [support@zit-shop.com], and we'll assist you in resolving the issue promptly.

                                <h3 className="font-monospace text-info">6. How do I subscribe or unsubscribe from the newsletter?</h3>
                To subscribe or unsubscribe from our newsletter, visit the [Newsletter] section in your account settings. You can also manage your subscription preferences at the bottom of our newsletter emails.

                                    <h3 className="font-monospace text-info">7. Do you offer international shipping?</h3>
                Yes, we do! <Link to="/shipping" className="text-decoration-none"><span className="text-danger custom-hover">Click here</span></Link> for detailed information on international shipping options and delivery times.

                                        <h3 className="font-monospace text-info">8. What size should I choose?</h3>
                Refer to our comprehensive <Link to="/size-guide" className="text-decoration-none"><span className="text-danger custom-hover">size guide</span></Link> to find the perfect fit for each product. If you need further assistance, our customer support team is happy to help.

                                            <h3 className="font-monospace text-info">9. Are the colors on the website accurate to the actual products?</h3>
                While we strive for accuracy, monitor settings may affect color perception. For any concerns, please reach out to our customer support for additional information.

                                                <h3 className="font-monospace text-info">10. How can I apply discount codes during checkout?</h3>
                You can apply discount codes on the checkout page. Enter the code in the designated field, and the discount will be applied to your order.

                If your question is not covered here or if you require additional assistance, feel free to reach out to our customer support team. Your satisfaction is important to us at <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>. Happy shopping!
            </h4>
        </div>
    );
};

export default FAQ;
