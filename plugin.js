var calculate = function () {
    var div = $j('.story.open div.draw_container').last();
    var cards = $j('.estimate span', div);
    var results = {};

    cards.each(function() {
        var index = $j(this).text();
        var suggestion;

        if (!results[index]) {
            suggestion = {};
            suggestion.votes = 1;
        } else {
            suggestion = results[index];
            suggestion.votes++;
        }

        var percent = suggestion.votes / cards.length * 100;
        percent = Math.round(percent);
        suggestion.percentage = percent;
        suggestion.card = index;

        results[index] = suggestion;
    });

    div = $j('<div/>', {
        id: 'suggestions'
    });

    for (var i in results) {
        var suggestion = results[i];

        var str = 'Card ' + suggestion.card + ': ' +
            suggestion.votes + ' votes, ' +
            suggestion.percentage + '%';

        var style = 'color: ';
        var color;
        var percent = suggestion.percentage;
        if (percent < 40) {
            color = 'grey';
        } else if(percent >= 40 && percent < 60) {
            color = 'green';
        } else {
            color = 'red';
        }

        style += color + ';';

        var p = $j('<p/>', {
            text: str,
            style: style
        });

        div.append(p);
    }

    $j('#suggestions').remove();
    $j('.submit').append(div);
};

var a = $j('<a/>', {
    text: 'Calculate Results',
    onclick: 'calculate();',
    style: 'cursor: pointer'
});

var li = $j('<li/>').append(a);

$j('ul.actions').append(li);