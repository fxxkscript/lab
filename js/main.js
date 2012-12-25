-function($) {
  var bg = $('.bg-wrap'),
      arr = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'eighth', 'nighth', 'tenth'];
  $(document).ready(function() {
    replaceClass('first');
    bg[0].addEventListener('webkitTransitionEnd', function(e) {
      var target = e.target;
      triggerNext.call(target, 1, 2);
    }, false);
  });
  function triggerNext() {
    var nodeName = this.className;
    nodeName = nodeName.slice(0, -4);
    var result = $.inArray(nodeName, arr);
    if (result !== -1) {
      var next = result + 1,
          nextNode = arr[next];
      replaceClass(nextNode);
    }
  }
  function replaceClass(node) {
    var name = '.' + node + '-start';
    $(name).addClass(node + '-end').removeClass(node + '-start');
  }

}(window.jQuery);
