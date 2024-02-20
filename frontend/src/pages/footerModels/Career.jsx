import React from 'react';
import { Link } from "react-router-dom";

const Career = () => {
    return (
        <div>
            <div className="container container-lg font-monospace p-5 mx-auto">
                <h2 className="text-center font-monospace p-3 text-dark">Join Our Team at ZIT-SHOP</h2>

                <h4>
                    At <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>, we believe in building a team of passionate individuals who share our commitment to creativity, innovation, and customer satisfaction. If you're ready to embark on a rewarding career journey, explore the exciting opportunities below and join us in shaping the future of fashion.
                </h4>

                <h3 className="font-monospace text-info p-3">Open Positions:</h3>
                <ul>
                    <li><strong>Graphic Designer:</strong> Bring our brand to life through visually stunning designs for online and offline materials.</li>
                    <li><strong>Software Engineer:</strong> Contribute to the development of our cutting-edge e-commerce platform and enhance the user experience.</li>
                    <li><strong>Customer Support Specialist:</strong> Provide exceptional service to our customers, addressing inquiries and ensuring a positive shopping experience.</li>
                </ul>

                <h3 className="font-monospace text-info p-3">Why Choose ZIT-SHOP:</h3>
                <h4>
                    Joining ZIT-SHOP means becoming part of a dynamic and inclusive workplace where creativity and innovation are celebrated. We offer competitive salaries, opportunities for professional development, and a collaborative environment that values your unique contributions.
                </h4>

                <h3 className="font-monospace text-info p-3">How to Apply:</h3>
                <h4>
                    To apply for any of the positions listed above, please send your resume and cover letter to <a href="mailto:careers@zit-shop.com" className="text-decoration-none"><span className="text-danger custom-hover">careers@zit-shop.com</span></a>. Be sure to include the position title in the subject line. We look forward to reviewing your application and getting to know more about you.
                </h4>

                <h4>
                    Thank you for considering a career at <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>. We are excited about the possibility of working with talented individuals who share our passion for fashion and excellence.
                </h4>
            </div>
        </div>
    );
};

export default Career;
