import React from 'react'

export default function About() {
    return (
        <div className="about">
        <img src="./camper.png" />
        <div className="text-content">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <div className="text">
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br/>(Hitch costs extra 😉)</p>

                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="cta">
                <h1>Your destination is waiting.<br />Your van is ready.</h1>
                <button>Explore our vans</button>
            </div>
            </div>
        </div>
    )
}