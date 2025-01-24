particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true, // As partículas irão se conectar
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true
      }
    },
    interactivity: {
      detect_on: "window", // Detecta o mouse em qualquer parte da janela
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // As partículas se afastam ao passar o mouse
        },
        onclick: {
          enable: true,
          mode: "remove" // Ao clicar, as partículas se desconectam ou se afastam
        }
      }
    }
  });