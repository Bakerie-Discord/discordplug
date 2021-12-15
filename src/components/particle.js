import React from "react";
import Particles from "react-tsparticles";

export default function ParticleMenu () {
    return  <Particles
        id="tsparticles"
        options={{
            background: {
            color: { 
                value: "black",
            },
            },
            fpsLimit: 60,
            particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                enable: true,
                value_area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 5,
            },
            },
            detectRetina: true,
        }}
    />
}