'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _appiumSupport = require('appium-support');

var PullRequests = (function () {
  function PullRequests() {
    _classCallCheck(this, PullRequests);

    this.defaultOptions = {
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
  }

  _createClass(PullRequests, [{
    key: 'getAll',
    value: function getAll() {
      var repo = arguments.length <= 0 || arguments[0] === undefined ? 'all' : arguments[0];

      var repos, file, j, pulls, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, r, options;

      return _regeneratorRuntime.async(function getAll$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            repos = undefined;

            if (!(repo === 'all')) {
              context$2$0.next = 12;
              break;
            }

            file = _path2['default'].resolve(__dirname, '..', '..', 'repos.json');

            console.log(file);
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(_appiumSupport.fs.readFile(file, 'utf8'));

          case 6:
            j = context$2$0.sent;

            j = JSON.parse(j);
            console.log(j);
            repos = j.repos;
            context$2$0.next = 13;
            break;

          case 12:
            repos = [repo];

          case 13:
            pulls = {};
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 17;
            _iterator = _getIterator(repos);

          case 19:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 28;
              break;
            }

            r = _step.value;
            options = _lodash2['default'].defaults({
              uri: 'https://api.github.com/repos/appium/' + r + '/pulls'
            }, this.defaultOptions);
            context$2$0.next = 24;
            return _regeneratorRuntime.awrap((0, _requestPromise2['default'])(options));

          case 24:
            pulls[r] = context$2$0.sent;

          case 25:
            _iteratorNormalCompletion = true;
            context$2$0.next = 19;
            break;

          case 28:
            context$2$0.next = 34;
            break;

          case 30:
            context$2$0.prev = 30;
            context$2$0.t0 = context$2$0['catch'](17);
            _didIteratorError = true;
            _iteratorError = context$2$0.t0;

          case 34:
            context$2$0.prev = 34;
            context$2$0.prev = 35;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 37:
            context$2$0.prev = 37;

            if (!_didIteratorError) {
              context$2$0.next = 40;
              break;
            }

            throw _iteratorError;

          case 40:
            return context$2$0.finish(37);

          case 41:
            return context$2$0.finish(34);

          case 42:
            return context$2$0.abrupt('return', pulls);

          case 43:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[17, 30, 34, 42], [35,, 37, 41]]);
    }
  }]);

  return PullRequests;
})();

exports['default'] = PullRequests;
module.exports = exports['default'];

// get all the repos
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wdWxsLXJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBQW9CLGlCQUFpQjs7OztzQkFDdkIsUUFBUTs7OztvQkFDTCxNQUFNOzs7OzZCQUNKLGdCQUFnQjs7SUFHN0IsWUFBWTtBQUNKLFdBRFIsWUFBWSxHQUNEOzBCQURYLFlBQVk7O0FBRWQsUUFBSSxDQUFDLGNBQWMsR0FBRztBQUNwQixhQUFPLEVBQUU7QUFDUCxvQkFBWSxFQUFFLGlCQUFpQjtPQUNoQztBQUNELFVBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztHQUNIOztlQVJHLFlBQVk7O1dBVUg7VUFBQyxJQUFJLHlEQUFHLEtBQUs7O1VBQ3BCLEtBQUssRUFHSCxJQUFJLEVBRUosQ0FBQyxFQVFILEtBQUssa0ZBQ0EsQ0FBQyxFQUNKLE9BQU87Ozs7O0FBZlQsaUJBQUs7O2tCQUNMLElBQUksS0FBSyxLQUFLLENBQUE7Ozs7O0FBRVosZ0JBQUksR0FBRyxrQkFBSyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDOztBQUM1RCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7NkNBQ0osa0JBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7OztBQUFuQyxhQUFDOztBQUNMLGFBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLG1CQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsaUJBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOzs7OztBQUVoQixpQkFBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7OztBQUdiLGlCQUFLLEdBQUcsRUFBRTs7Ozs7cUNBQ0EsS0FBSzs7Ozs7Ozs7QUFBVixhQUFDO0FBQ0osbUJBQU8sR0FBRyxvQkFBRSxRQUFRLENBQUM7QUFDdkIsaUJBQUcsMkNBQXlDLENBQUMsV0FBUTthQUN0RCxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7OzZDQUNOLGlDQUFRLE9BQU8sQ0FBQzs7O0FBQWpDLGlCQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBR0gsS0FBSzs7Ozs7OztLQUNiOzs7U0FqQ0csWUFBWTs7O3FCQW9DSCxZQUFZIiwiZmlsZSI6ImxpYi9wdWxsLXJlcXVlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZzIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xuXG5cbmNsYXNzIFB1bGxSZXF1ZXN0cyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnVXNlci1BZ2VudCc6ICdSZXF1ZXN0LVByb21pc2UnXG4gICAgICB9LFxuICAgICAganNvbjogdHJ1ZSAvLyBBdXRvbWF0aWNhbGx5IHBhcnNlcyB0aGUgSlNPTiBzdHJpbmcgaW4gdGhlIHJlc3BvbnNlXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbCAocmVwbyA9ICdhbGwnKSB7XG4gICAgbGV0IHJlcG9zO1xuICAgIGlmIChyZXBvID09PSAnYWxsJykge1xuICAgICAgLy8gZ2V0IGFsbCB0aGUgcmVwb3NcbiAgICAgIGxldCBmaWxlID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJ3JlcG9zLmpzb24nKTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgbGV0IGogPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlLCAndXRmOCcpO1xuICAgICAgaiA9IEpTT04ucGFyc2Uoaik7XG4gICAgICBjb25zb2xlLmxvZyhqKTtcbiAgICAgIHJlcG9zID0gai5yZXBvcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwb3MgPSBbcmVwb107XG4gICAgfVxuXG4gICAgbGV0IHB1bGxzID0ge307XG4gICAgZm9yIChsZXQgciBvZiByZXBvcykge1xuICAgICAgbGV0IG9wdGlvbnMgPSBfLmRlZmF1bHRzKHtcbiAgICAgICAgdXJpOiBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9hcHBpdW0vJHtyfS9wdWxsc2BcbiAgICAgIH0sIHRoaXMuZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgcHVsbHNbcl0gPSBhd2FpdCByZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwdWxscztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWxsUmVxdWVzdHM7XG4iXX0=