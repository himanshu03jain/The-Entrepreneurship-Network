import React from 'react';
import './Benifits.css';

function Cards() {
  return (
    <div>
    <main class="cards_main">
      <article class="card">
        <img src="images/et.jpg" alt="Sample photo" />
        <div class="text">
          <h3>Seamlessly visualize quality</h3>
          <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
          {/* <button>Here's why</button> */}
        </div>
      </article>
      <article class="card">
        <img src="images/oc.jpg" alt="Sample photo" />
        <div class="text">
          <h3>Completely Synergize</h3>
          <p>Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
          {/* <button>Here's how</button> */}
        </div>
      </article>
      <article class="card">
        <img src="images/fc.jpg" alt="Sample photo" />
        <div class="text">
          <h3>Dynamically Procrastinate</h3>
          <p>Completely synergize resource taxing relationships via premier niche markets.</p>
          {/* <button>Read more</button> */}
        </div>
      </article>
    </main>
    </div>
  );
}

export default Cards;
