'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyClass = function (_React$Component) {
    _inherits(MyClass, _React$Component);

    function MyClass() {
        _classCallCheck(this, MyClass);

        return _possibleConstructorReturn(this, (MyClass.__proto__ || Object.getPrototypeOf(MyClass)).apply(this, arguments));
    }

    _createClass(MyClass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'returned from myClass.'
            );
        }
    }]);

    return MyClass;
}(React.Component);

//fazendo <Component/> retorna um JSX .


console.log(React.createElement(MyClass, null));
//output JSX:  //{$$typeof: Symbol(react.element), type: ƒ, key: null, ref: null, props: {…}, …}$$typeof: Symbol(react.element)key: nullprops: {}ref: nulltype: ƒ MyClass()_owner: null_store: {validated: false}_self: null_source: null__proto__: Object


ReactDOM.render(React.createElement(MyClass, null), document.getElementById('app'));
