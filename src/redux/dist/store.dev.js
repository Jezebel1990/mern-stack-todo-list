"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _todosReducer = require("./reducers/todosReducer");

var _tabReducer = require("./reducers/tabReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = (0, _redux.combineReducers)({
  todos: _todosReducer.todosReducers,
  currentTab: _tabReducer.tabReducer
});
var middleware = [_reduxThunk["default"]];
var store = (0, _redux.createStore)(reducer, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware)));
var _default = store;
exports["default"] = _default;