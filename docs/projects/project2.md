
<style rel="stylesheet" href="css/style.css"></style>

<div id="progress-bar"></div>

<script src="https://cdn.jsdelivr.net/npm/progressbar.js@1.1.0/dist/progressbar.min.js"></script>
<script>
    var bar = new ProgressBar.Line('#progress-bar', { strokeWidth: 2 });
    bar.animate(0.7);  // Beispiel: Setzt den Fortschritt auf 70%
</script>