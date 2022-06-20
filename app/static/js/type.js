const app = document.getElementById("type");

const typewriter = new Typewriter(app, {
  loop: true,
});

const timeToWait = 1500;

typewriter
  .typeString("nacho.init(👋)")
  .pauseFor(timeToWait)
  .deleteAll()
  .typeString("I am Software Engineer")
  .pauseFor(timeToWait)
  .deleteAll()
  .typeString("And a PE Fellow!")
  .pauseFor(timeToWait)
  .deleteAll()
  .typeString("<strong>Check out more about me ↓</strong>")
  .pauseFor(timeToWait)
  .start();
