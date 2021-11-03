import React from 'react';
import "./Joinvirtual.css";

function Joinvirtual(){
    return(
        <div className="main">
            <h3>Welcome to</h3>
            <h2>THE NEXT BIG THING</h2>
            <div class="buttons">
                <button class="btn-hover colorglow"
                type="button"
                onClick={(e) => {
                        e.preventDefault();
                        window.open('https://discord.gg/A8zBusy','_blank');
                }}>
                Join TEN Virtual Campus</button>
            </div>
        </div>
    );
}

export default Joinvirtual;