import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (<Particles
    id="tsparticles"
    params={{
      particles: {
        number: {
          value: 120, // Decreasing the number of particles
          density: {
            enable: true,
            value_area: 1000, // Adjusting the density area
          },
        },
        line_linked: {
          enable: true, // Enabling line linking
          opacity: 0.1, // Increasing opacity for better visibility
        },
        move: {
          direction: "none", // Changing direction to none
          speed: 0.1, // Adjusting speed
        },
        size: {
          value: 2, // Increasing particle size
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1, // Adjusting minimum opacity
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "repulse", // Changing mode to repulse
          },
        },
        modes: {
          repulse: {
            distance: 100, // Setting repulse distance
            duration: 0.4, // Adjusting duration
          },
        },
      },
      retina_detect: true,
    }}
  />)
}

export default Particle;
