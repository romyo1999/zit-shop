import React from 'react';
import { Link } from "react-router-dom";

const Advertise = () => {
    return (
        <div> 
            <div className="container container-lg font-monospace p-5 mx-auto">
                <h2 className="text-center font-monospace p-3 text-dark">Advertising and Marketing Policy</h2>

                <h4>
                    Welcome to <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>'s Advertising and Marketing Policy. Our commitment is to provide a transparent and engaging experience for our customers while maintaining ethical advertising practices. This policy outlines the principles we follow in our advertising and marketing efforts.
                </h4>

                <h3 className="font-monospace text-info p-3">1. Truthfulness and Accuracy:</h3>
                <h4>
                    We strive to provide accurate and truthful information in all our advertisements. Product descriptions, pricing, and promotional details are presented honestly to ensure clarity for our customers.
                </h4>

                <h3 className="font-monospace text-info p-3">2. Clear and Transparent Communication:</h3>
                <h4>
                    Our advertisements are designed to be clear and transparent. We provide comprehensive information about products, promotions, and any associated terms and conditions to help customers make informed decisions.
                </h4>

                <h3 className="font-monospace text-info p-3">3. Respect for Privacy:</h3>
                <h4>
                    We respect the privacy of our customers and adhere to relevant privacy laws and regulations. Personal information is handled with the utmost care, and we prioritize the security of customer data.
                </h4>

                <h3 className="font-monospace text-info p-3">4. Inclusivity and Diversity:</h3>
                <h4>
                    Our advertising materials embrace inclusivity and diversity. We feature a range of models and individuals from different backgrounds to represent the diverse community we serve.
                </h4>

                <h3 className="font-monospace text-info p-3">5. Social Responsibility:</h3>
                <h4>
                    We use our advertising platform to promote social responsibility and positive values. Our campaigns reflect our commitment to sustainability, ethical sourcing, and community engagement.
                </h4>

                <h3 className="font-monospace text-info p-3">6. Authenticity in Visuals:</h3>
                <h4>
                    The visuals used in our advertisements are authentic and accurately represent the quality and appearance of our products. We avoid the use of misleading images or manipulative editing.
                </h4>

                <h3 className="font-monospace text-info p-3">7. Customer Feedback:</h3>
                <h4>
                    We value customer feedback and use it to improve our products and services. Customer testimonials and reviews featured in our advertising are genuine and represent real experiences.
                </h4>

                <h3 className="font-monospace text-info p-3">8. Compliance with Regulations:</h3>
                <h4>
                    We adhere to all advertising regulations and standards set by relevant authorities. Our advertising practices align with industry guidelines and legal requirements.
                </h4>

                <h3 className="font-monospace text-info p-3">9. Social Media Engagement:</h3>
                <h4>
                    We engage with our community on social media platforms responsibly. We encourage open communication, respond to customer inquiries, and use these platforms to share information about our brand and products.
                </h4>

                <h3 className="font-monospace text-info p-3">10. Continuous Improvement:</h3>
                <h4>
                    We continuously evaluate and improve our advertising strategies to enhance customer satisfaction and stay aligned with evolving industry standards.
                </h4>

                <h4>
                    By engaging with <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link> through our advertisements, customers can expect an authentic, transparent, and socially responsible experience. If you have any questions or concerns about our advertising practices, please contact us at [marketing@zit-shop.com].
                </h4>

                <h4>
                    Thank you for choosing <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>. We look forward to providing you with an enjoyable and trustworthy shopping experience.
                </h4>
            </div>
        </div>
    );
};

export default Advertise;
