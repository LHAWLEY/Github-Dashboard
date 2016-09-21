class BaseModel {
  constructor (attrs) {
    this.callbacks = {};
    this.org       = attrs.org;
    this.repo      = attrs.repo;
  }

  trigger(eventName) {
    var callback = this.callbacks[eventName]

    if (callback) {
      callback();
    }
  }

  on(eventName, callback) {
    this.callbacks[eventName] = callback;
  }
}