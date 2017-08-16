class BaseModel {
  constructor (attrs) {
    this.callbacks = {};
    this.org       = attrs.org;
    this.repo      = attrs.repo;
  }

 // $.get
  _fetch (callback) {
    window.fetch(this.url).then(function (response) { return response.json() }).then(callback)
  }

// trigger an event which calls the callbacks
  trigger(eventName) {
    var callback = this.callbacks[eventName]

    if (callback) {
      callback();
    }
  }

// set call back
  on(eventName, callback) {
    this.callbacks[eventName] = callback;
  }
}