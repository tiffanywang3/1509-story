var line = new ProgressBar.Line('#container');

var bar = new ProgressBar.Line('#container', {
    from: { color: '#000 '},
    to: { color: '#888 '},
    step: function(state, bar, attachment) {
        bar.path.setAttribute('stroke', state.color);
    }
});