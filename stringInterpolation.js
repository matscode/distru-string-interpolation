/**
 * @author Michael Akanji <matscode@gmail.com> {@link https://melindex.com/matscode}
 */

function str_intpl(string, opts) {
    for (var key in opts) {
        string = string.replace('__' + key.toUpperCase() + '__', opts[key]);
    }

    console.log(string);
}

const string = "James loves to play __SPORT__ on __DAYOFWEEK__ at exactly __TIME__.";
const opts = {sport: "soccer", dayOfWeek: "Sunday", time: "3:30pm"};

str_intpl(string, opts);