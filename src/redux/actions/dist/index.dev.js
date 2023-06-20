"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTab = exports.deleteTodo = exports.updateTodo = exports.toggleTodo = exports.getAllTodos = exports.addNewTodo = void 0;

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

var getAllTodos = function getAllTodos() {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/todos")));

          case 3:
            res = _context2.sent;
            dispatch({
              type: _type.GETALL_TODO,
              payload: res.data
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log('Error while calling getAllTodos API ', _context2.t0.message);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getAllTodos = getAllTodos;

var toggleTodo = function toggleTodo(id) {
  return function _callee3(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/todos/").concat(id)));

          case 3:
            res = _context3.sent;
            dispatch({
              type: _type.TOGGLE_TODO,
              payload: res.data
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log('Error while calling getAllTodos API ', _context3.t0.message);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.toggleTodo = toggleTodo;

var updateTodo = function updateTodo(id, data) {
  return function _callee4(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(API_URL, "/todos/").concat(id), {
              data: data
            }));

          case 3:
            res = _context4.sent;
            dispatch({
              type: _type.UPDATE_TODO,
              payload: res.data
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log('Error while calling updateTodo API ', _context4.t0.message);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.updateTodo = updateTodo;

var deleteTodo = function deleteTodo(id) {
  return function _callee5(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(API_URL, "/todos/").concat(id)));

          case 3:
            res = _context5.sent;
            dispatch({
              type: _type.DELETE_TODO,
              payload: res.data
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log('Error while calling deleteTodo API ', _context5.t0.message);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.deleteTodo = deleteTodo;

var toggleTab = function toggleTab(tab) {
  return function _callee6(dispatch) {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dispatch({
              type: _type.TOGGLE_TAB,
              selected: tab
            });

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    });
  };
};

exports.toggleTab = toggleTab;