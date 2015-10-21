require('source-map-support').install();

'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _ = require('../..');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('pull requests', function () {
  it('should-work', function callee$1$0() {
    var pr, pulls;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          pr = new _.PullRequests();
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(pr.getAll('all'));

        case 3:
          pulls = context$2$0.sent;

          console.log(pulls);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvcHVsbC1yZXF1ZXN0cy1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2dCQUU2QixPQUFPOztvQkFDbkIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7QUFFN0Msa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsZUFBZSxFQUFFLFlBQU07QUFDOUIsSUFBRSxDQUFDLGFBQWEsRUFBQztRQUNYLEVBQUUsRUFDRixLQUFLOzs7O0FBREwsWUFBRSxHQUFHLG9CQUFrQjs7MkNBQ1QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7OztBQUE5QixlQUFLOztBQUNULGlCQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O0dBQ3BCLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3B1bGwtcmVxdWVzdHMtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0cmFuc3BpbGU6bW9jaGFcblxuaW1wb3J0IHsgUHVsbFJlcXVlc3RzIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5cbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmRlc2NyaWJlKCdwdWxsIHJlcXVlc3RzJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkLXdvcmsnLGFzeW5jICgpID0+IHtcbiAgICBsZXQgcHIgPSBuZXcgUHVsbFJlcXVlc3RzKCk7XG4gICAgbGV0IHB1bGxzID0gYXdhaXQgcHIuZ2V0QWxsKCdhbGwnKTtcbiAgICBjb25zb2xlLmxvZyhwdWxscyk7XG4gIH0pO1xufSk7XG5cbiJdfQ==