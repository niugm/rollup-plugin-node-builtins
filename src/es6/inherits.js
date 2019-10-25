
var inheritsService;
if (typeof Object.create === 'function'){
  inheritsService = function inheritsService(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inheritsService = function inheritsService(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}
export default inheritsService;
export const inherits = inheritsService;

