"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultAlign = {
    element: {
        horizontal: 1 /* Left */,
        vertical: 1 /* Top */
    },
    target: {
        horizontal: 1 /* Left */,
        vertical: 3 /* Bottom */
    }
};
function segmentPositioningPoint(start, length, align) {
    switch (align) {
        case 1 /* Left */:
            return start;
        case 2 /* Center */:
            return start + (length / 2);
        case 3 /* Right */:
            return start + length;
        default:
            throw new Error("Unknown align option.");
    }
}
function elementPositioningPoint(element, align) {
    return {
        left: segmentPositioningPoint(element.left, element.width, align.horizontal),
        top: segmentPositioningPoint(element.top, element.height, align.vertical)
    };
}
/** Align @{element} with specified @{target} by calculating new @{element} position rectangle. */
function positionElement(element, target, alignment) {
    var elementPoint = elementPositioningPoint(element, alignment.element);
    var targetPoint = elementPositioningPoint(target, alignment.target);
    var offset = {
        left: targetPoint.left - elementPoint.left,
        top: targetPoint.top - elementPoint.top
    };
    return {
        left: element.left + offset.left,
        top: element.top + offset.top,
        width: element.width,
        height: element.height
    };
}
function position(element, target) {
    var positions = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        positions[_i - 2] = arguments[_i];
    }
    positions = positions || [defaultAlign];
    return positionElement(element, target, positions[0]);
}
exports.position = position;
//# sourceMappingURL=positioning.js.map