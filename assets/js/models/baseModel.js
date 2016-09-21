class BaseModel {
  constructor (attrs) {
    this.callbacks = {};
    this.org       = attrs.org;
    this.repo      = attrs.repo;
  }

  _fetch (callback) {
    window.fetch(this.url).then(function (response) { return response.json() }).then(callback)
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