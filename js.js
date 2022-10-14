var x = function x() {
  var y = 0;
  [5, 5, 25, 2].forEach(function addTo(number) { y += number;
  });
  return y;
  };
  test('test.', function () {
  equal(x(), 37,
  'y = 37.');
  });