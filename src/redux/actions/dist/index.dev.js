"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewTodo = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _type = require("./type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = 'http://localhost:8000';

var addNewTodo = function addNewTodo(data) {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(API_URL, "/todos"), {
              data: data
            }));

          case 3:
            res = _context.sent;
            dispatch({
              type: _type.ADDNEW_TODO,
              payload: res.data
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("Error while calling addNewTodo API", _context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.addNewTodo = addNewTodo;