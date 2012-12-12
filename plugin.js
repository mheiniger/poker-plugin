var calculate = function () {
    var cards = $j('.story.open .draw .estimate span');
    var results = {};

    cards.each(function() {
        var suggestion = {};
        var index = $j(this).text();

        if (!results[index]) {
            suggestion.votes = 1;
        } else {
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

        var p = $j('<p/>', {
            text: str
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