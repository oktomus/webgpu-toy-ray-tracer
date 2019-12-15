import { Renderer } from './renderer.js';

async function run() {

  let renderer = new Renderer();
  window.renderer = renderer;
  renderer.attach_mouse_events(window.document);

  if (await renderer.init("raytrace-canvas", "ray-metrics"))
  {
    document.getElementById("support").style.display = 'block';
    document.getElementById("no-support").style.display = 'none';

    let animationFrame = function(timestamp) {
      renderer.render();

      window.requestAnimationFrame(animationFrame);
    }

    window.requestAnimationFrame(animationFrame);
  }
  else
  {
    document.getElementById("support").style.display = 'none';
    document.getElementById("no-support").style.display = 'block';
  }
};

run();