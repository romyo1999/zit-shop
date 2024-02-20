import React from 'react';
import {Link} from "react-router-dom";

const Cop = () => {
    return (
        <div>
            <h4 className="container container-lg font-monospace p-5 mx-auto">
                <h2 className="text-center font-monospace p-3 text-dark">Corporate Responsibility Statement</h2>

                Welcome to <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>, where fashion meets responsibility. We believe that true style goes hand in hand with ethical business practices and a commitment to corporate responsibility. Our Corporate Responsibility Statement reflects our dedication to making a positive impact on society, the environment, and the communities we serve.

                <h3 className="font-monospace text-info p-3">1. Ethical Sourcing:</h3>
                We are committed to sourcing materials ethically and responsibly. Our supply chain undergoes rigorous scrutiny to ensure fair labor practices, humane working conditions, and compliance with international standards.

                <h3 className="font-monospace text-info p-3">2. Sustainability Initiatives:</h3>
                <Link to="/sustainability" className="text-decoration-none"><span className="text-danger custom-hover">Sustainability</span></Link> is at the core of our business. We actively seek eco-friendly materials, implement waste reduction strategies, and invest in sustainable manufacturing processes to minimize our environmental footprint.

            <h3 className="font-monospace text-info p-3">3. Diversity and Inclusion:</h3>
                <Link to="/diversity" className="text-decoration-none"><span className="text-danger custom-hover">Diversity and inclusion</span></Link> are embraced within our organization. We strive to create an inclusive workplace that celebrates individuality, values diversity, and fosters a culture of respect and equality.

            <h3 className="font-monospace text-info p-3">4. Community Engagement:</h3>
                We believe in giving back to the communities that contribute to our success. Through <Link to="/community" className="text-decoration-none"><span className="text-danger custom-hover">community engagement</span></Link> initiatives, charitable partnerships, and philanthropy, we aim to make a positive impact on the lives of those in need.

            <h3 className="font-monospace text-info p-3">5. Transparent Business Practices:</h3>
                Transparency is a cornerstone of our corporate responsibility. We openly share information about our sourcing practices, environmental efforts, and community involvement to build trust with our customers and stakeholders.

            <h3 className="font-monospace text-info p-3">6. Employee Well-being:</h3>
                Our employees are our greatest asset. We prioritize their well-being by providing a safe and supportive work environment, offering development opportunities, and promoting a healthy work-life balance.

            <h3 className="font-monospace text-info p-3">7. Continuous Improvement:</h3>
                We are committed to continuous improvement in all aspects of our business. We regularly review and update our corporate responsibility practices to align with evolving ethical standards and industry best practices.

            <h3 className="font-monospace text-info p-3">8. Accountability:</h3>
                We hold ourselves accountable for the impact of our business activities. Through regular audits, assessments, and collaboration with external organizations, we strive to uphold the highest standards of corporate responsibility.

            <h3 className="font-monospace text-info p-3">9. Collaboration for Change:</h3>
                We actively collaborate with industry peers, non-profit organizations, and government bodies to drive positive change in the fashion industry. By working together, we aim to contribute to a more sustainable, ethical, and inclusive future.

                Thank you for choosing <Link to="/" className="text-decoration-none"><span className="text-danger custom-hover p-2 rounded">ZIT-SHOP</span></Link>. We invite you to join us on this journey towards responsible fashion and corporate citizenship. Together, we can make a difference.

            </h4>
        </div>
    );
};

export default Cop;
