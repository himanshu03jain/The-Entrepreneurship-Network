import React from 'react';
import "./Power.css";

function Power() {
    return (
        <div className="power">
            {/* <h3>Welcome to</h3> */}
            <h2 className="new">Power of <span className="newtry">TEN</span> Consulting</h2>
            <div class="btn-block">

                <a href="https://www.consulting.entrepreneurshipnetwork.net/" class="btn-hover-effect btn-hover-effect--effect-1" title="Explore"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.consulting.entrepreneurshipnetwork.net/', '_blank');
                    }}>
                    Explore Here</a>
            </div>

        </div>
    );
}

export default Power;