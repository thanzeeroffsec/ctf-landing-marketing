import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const RegistrationForm: React.FC = () => {
  useEffect(() => {
    // Star animation setup
    const container = document.getElementById("stars-container");
    if (container) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Hogwarts Eternal: CTF Registration</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: 'Roboto Condensed', sans-serif;
            background: hsl(221, 77%, 10%) no-repeat center center fixed;
            background-size: cover;
            color: #ffffff;
          }
          body::before {
            content: "";
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: url('https://www.transparenttextures.com/patterns/parchment.png');
            opacity: 0.1;
            pointer-events: none;
            z-index: -1;
          }
          #stars-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 0;
            pointer-events: none;
          }
          .star {
            position: absolute;
            width: 1.5px;
            height: 1.5px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            top: 0;
            animation: fall linear infinite;
            z-index: 0;
          }
          @keyframes fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          .container {
            max-width: 600px;
            margin: 3rem auto;
            padding: 2rem;
            background-color: rgb(17, 26, 63);
            border-radius: 10px;
            box-shadow: 0 0 5px rgb(23, 33, 67);
            position: relative;
            z-index: 1;
          }
          h1, h2 {
            text-align: center;
            color: #ffffff;
            font-family: 'Cinzel Decorative', serif;
            text-shadow: 2px 2px 5px #000;
          }
          label {
            display: block;
            margin-top: 1.2rem;
            font-size: 1.1rem;
            color: #ffffff;
          }
          input, select, textarea {
            width: 100%;
            padding: 0.6rem;
            border-radius: 5px;
            border: none;
            font-size: 1rem;
            margin-top: 0.3rem;
            background-color: #d3d3d3;
            color: #000000;
          }
          input[type="radio"], input[type="checkbox"] {
            width: auto;
            margin-right: 0.5rem;
          }
          .radio-group, .checkbox-group {
            margin-top: 1rem;
          }
          .submit-btn {
            background-color: #00fdd8;
            color: #1a0f0f;
            border: none;
            padding: 1rem 2rem;
            margin-top: 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 100px;
            cursor: pointer;
            display: block;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 0 10px #00fdd8;
            transition: background 0.3s ease;
          }
          .submit-btn:hover {
            background-color: #ffffff;
          }
          .footer {
            margin-top: 3rem;
            text-align: center;
            font-size: 0.9rem;
            color: #aaa;
          }
          a { color: #00fdd8; }
          .image01 { margin-inline: auto; }
          .imagecontainer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </Helmet>

      <div id="stars-container"></div>

      <div className="container">
        <div className="imagecontainer">
          <img
            src="/logohwt.png"
            width={360}
            height={200}
            className="image01"
            alt="Hogwarts Eternal Logo"
          />
        </div>

        <p>
          <b>A Night-Time CTF</b>
          <br />
          📅 <b>Date:</b> 21-June-2025
          <br />
          📍 <b>Venue:</b> Offenso Hackers Academy, Kochi (Offline Event)
          <br />
          🕓 <b>Time:</b> 6:00 PM – 6:00 AM (Overnight CTF)
          <br />
          📲{" "}
          <b>
            Join Our Whatsapp Group:{" "}
            <a href="https://chat.whatsapp.com/Kfr8bN83nlWAist7TbZGOg">
              Hogwarts Eternal
            </a>
          </b>
          <br />
          🧭{" "}
          <b>
            You must check in your team by 5:45 PM or risk being vanished
            (disqualified)!
          </b>
        </p>

        <form
          method="POST"
          action="https://docs.google.com/forms/d/e/1FAIpQLSf_5s36HbulSKejlJ_tNGFAKr2LV14wvy7XKOXzB2XAAvX_mQ/formResponse"
          target="_self"
        >
          <label>Team Name*</label>
          <input name="entry.668420027" required />

          <label>Team Captain (Head Auror) *</label>
          <input name="entry.809686420" required />

          <label>Owl Post Address (Email) *</label>
          <input type="email" name="entry.807683408" required />

          <label>Enchanted Mirror Number (WhatsApp) *</label>
          <input name="entry.1449268189" required />

          <label>Second Year Wizard (Player 2)</label>
          <input name="entry.2003846743" />

          <label>Magical Mirror Number (Player 2)</label>
          <input name="entry.312935849" />

          <label>Third Year Wizard (Player 3)</label>
          <input name="entry.1879061348" />

          <label>Magical Mirror Number (Player 3)</label>
          <input name="entry.497135403" />

          <div className="radio-group">
            <label>Has your team joined the WhatsApp group?</label>
            <input
              type="radio"
              name="entry.1074477889"
              value="✅ Yes, we have joined and await further magical instructions."
              required
            />{" "}
            ✅ Yes
            <br />
            <input
              type="radio"
              name="entry.1074477889"
              value="❌ Not yet, but we’ll join immediately to avoid the wrath of the Ministry."
            />{" "}
            ❌ No
          </div>

          <div className="radio-group">
            <label>
              Will your team confirm its magical presence by 5:45 PM?
            </label>
            <input
              type="radio"
              name="entry.594689070"
              value="✅ Yes, our wands are ready by 5:45 PM."
              required
            />{" "}
            ✅ Yes
            <br />
            <input type="radio" name="entry.594689070" value="❌ No" /> ❌ No
          </div>

          <div className="checkbox-group">
            <a href="https://docs.google.com/document/d/1w7xgZ0-FqsOIJmXOK22DXy-FkGJ9gN7UF-RxM2jen4k/view">
              Terms & Conditions *
            </a>
            <br />
            <input
              type="checkbox"
              name="entry.949645177"
              value="We agree to all Hogwarts Eternal rules and Terms of Magic."
              required
            />{" "}
            I agree to the rules
            <br />
            <input
              type="checkbox"
              name="entry.949645177"
              value="We understand the tournament runs 6:00 PM to 6:00 AM, and late spell submissions won’t be accepted."
              required
            />{" "}
            I understand the timing & no-late submissions
          </div>

          <button type="submit" className="submit-btn">
            Submit Magical Registration 🧙
          </button>
        </form>

        <div className="footer">Welcome To Offenso Hackers Academy</div>
      </div>
    </>
  );
};

export default RegistrationForm;
