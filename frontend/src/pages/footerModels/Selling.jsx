import React from 'react';
import { Link } from "react-router-dom";

const Selling = () => {
    return ( 
        <div>
            <div className="container container-lg font-monospace p-5 mx-auto">
                <h2 className="text-center font-monospace p-3 text-dark">Sell Your Style with ZIT-SHOP</h2>

                <h4>
                    Are you a fashion enthusiast with unique and stylish creations? Join our community of sellers and showcase your designs to a global audience on <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>. We welcome independent designers and boutique owners to share their passion for fashion with our discerning customers.
                </h4>

                <h3 className="font-monospace text-info p-3">Why Sell on ZIT-SHOP:</h3>
                <h4>
                    <strong>1. Global Exposure:</strong> Reach fashion lovers worldwide and expand your customer base beyond geographical boundaries. Our platform provides a global stage for your unique creations.
                </h4>
                <h4>
                    <strong>2. Easy Setup:</strong> Setting up your shop on ZIT-SHOP is a breeze. Our user-friendly interface allows you to list your products, manage inventory, and customize your storefront effortlessly.
                </h4>
                <h4>
                    <strong>3. Marketing Support:</strong> Benefit from our marketing initiatives and promotional campaigns to increase visibility for your products. We actively promote our sellers and their stories to engage our community.
                </h4>
                <h4>
                    <strong>4. Secure Transactions:</strong> Enjoy peace of mind with our secure and reliable payment system. We handle transactions securely, allowing you to focus on creating and selling your designs.
                </h4>
                <h4>
                    <strong>5. Community Connection:</strong> Become part of a vibrant and supportive community of sellers. Share insights, collaborate with fellow designers, and join discussions to enhance your business journey.
                </h4>

                <h3 className="font-monospace text-info p-3">How to Start Selling:</h3>
                <h4>
                    Getting started is simple. Create a seller account on ZIT-SHOP, list your products, set your prices, and start connecting with customers. To begin your selling journey, click <Link to="/sell-with-us" className="text-decoration-none"><span className="text-danger custom-hover">here</span></Link>.
                </h4>

                <h4>
                    Ready to turn your passion for fashion into a thriving business? Join ZIT-SHOP and share your unique style with the world. We look forward to welcoming you to our community of talented sellers!
                </h4>
            </div>
        </div>
    );
};

export default Selling;
