// Keyboard + mouse state. Consumers read state; edge events are latched per frame.

export class Input {
  constructor(canvas) {
    this.keys = new Set();
    this.pressed = new Set();       // keys that went down since last endFrame()
    this.mouse = { x: 0, y: 0, down: false, clicked: false, rdown: false };
    this.canvas = canvas;

    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.keys.add(e.code);
      this.pressed.add(e.code);
      if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => { this.keys.clear(); this.mouse.down = false; });

    canvas.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - r.left;
      this.mouse.y = e.clientY - r.top;
    });
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) { this.mouse.down = true; this.mouse.clicked = true; }
      if (e.button === 2) this.mouse.rdown = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.down = false;
      if (e.button === 2) this.mouse.rdown = false;
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  down(code) { return this.keys.has(code); }
  hit(code) { return this.pressed.has(code); }

  get moveX() {
    return (this.down('KeyD') || this.down('ArrowRight') ? 1 : 0) -
           (this.down('KeyA') || this.down('ArrowLeft') ? 1 : 0);
  }
  get jump() { return this.hit('Space') || this.hit('KeyW') || this.hit('ArrowUp'); }
  get sprint() { return this.down('ShiftLeft') || this.down('ShiftRight'); }

  endFrame() {
    this.pressed.clear();
    this.mouse.clicked = false;
  }
}
