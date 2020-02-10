class NewPlugin {
  constructor(elem) {
    this.elem = elem;

    this.initialized = false;
  }

  init() {
    this.initialized = true;
  }
}

export default NewPlugin;
