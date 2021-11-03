import React from "react";
import Nav from "../../Navbar/Nav";
import Footer from "../../Footer/Footer";
import "./Aboutmore.css";
function Aboutmore() {
    return (
        <>
            <div className="abhead">
                <h1>About Us</h1>
                <div className="line"></div>
                <div className="quality">
                    <p>
                        <span>Quality Teaching<br />
                            Any Time, Everywhere</span>
                    </p>
                </div>
                <div className="text">
                    <p>
                        <span>The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.<br/>
                            Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.<br/>
                            This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.<br/>
                            With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.<br/>
                        </span></p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Aboutmore;