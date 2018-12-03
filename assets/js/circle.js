//circle

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
var param = {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#aaa',
        width: 1
    },
    to: {
        color: '#333',
        width: 4
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
}

var htmlCircle = new ProgressBar.Circle(html, param);
htmlCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
htmlCircle.text.style.fontSize = '1rem';
htmlCircle.animate(.87);

var javascriptCircle = new ProgressBar.Circle(javascript, param);
javascriptCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
javascriptCircle.text.style.fontSize = '1rem';
javascriptCircle.animate(.75);

var cssCircle = new ProgressBar.Circle(css, param);
cssCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
cssCircle.text.style.fontSize = '1rem';
cssCircle.animate(.75);

var photoshopCircle = new ProgressBar.Circle(photoshop, param);
photoshopCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
photoshopCircle.text.style.fontSize = '1rem';
photoshopCircle.animate(.75);

var illustratorCircle = new ProgressBar.Circle(illustrator, param);
illustratorCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
illustratorCircle.text.style.fontSize = '1rem';
illustratorCircle.animate(.75);

var xdCircle = new ProgressBar.Circle(xd, param);
xdCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
xdCircle.text.style.fontSize = '1rem';
xdCircle.animate(.75);

var trelloCircle = new ProgressBar.Circle(trello, param);
trelloCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
trelloCircle.text.style.fontSize = '1rem';
trelloCircle.animate(.75);

var indesignCircle = new ProgressBar.Circle(indesign, param);
xdCircle.text.style.fontFamily = '"open sans", Helvetica, sans-serif';
indesignCircle.text.style.fontSize = '1rem';
indesignCircle.animate(.75);