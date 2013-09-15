Event = {};

Event.addEvent = function(el, eventType, handler) {
    if (el.addEventListener) {
        el.addEventListener(eventType, handler, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventType, handler);
    } else {
        el['on' + eventType] = handler;
    }
}

