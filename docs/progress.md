
<style rel="stylesheet" href="css/style.css"></style>

<!-- <div id="progress-bar"></div> -->
<div id="container"></div>
<script src="https://cdn.jsdelivr.net/npm/progressbar.js@1.1.0/dist/progressbar.min.js"></script>
<script>
    // var bar = new ProgressBar.Line('#progress-bar', { strokeWidth: 2 });
    // bar.animate(0.7);  // Beispiel: Setzt den Fortschritt auf 70%
let bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' / 100');
  }
});
let full = false
setInterval(() => {
    if (!full){
        bar.animate(0.7);
        full = !full;
    }
}, 2000);
setInterval(() => {
    if (full){
        bar.animate(0.0);
        full = !full;
    }
}, 4000);

</script>