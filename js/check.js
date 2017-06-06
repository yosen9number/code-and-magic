var message;
function getMessage(a, b) {
    if (typeof a == 'boolean') {
        if (a == true) {
            message = 'Я попал в ' + b;
        } else {
            message = 'Я никуда не попал';
        }
    }
    else if (typeof a == 'number') {
        message = 'Я прыгнул на ' + (a * 100) + ' сантиметров';
    }
    else if (typeof a == 'object' && b == 'object'){
        var length = 0;
        for (var i = 0; i < a.length; i++) {
            a[i] = a[i] * b[i];
            console.log(a[i]);
            length +=  a[i];
        }
        message = 'Я прошёл ' + length + ' метров';
    }
    else if (typeof a == 'object') {
        var sum = 0;
        for (var i = 0; i < a.length; i++) {
            sum += a[i];
        }
        message = 'Я прошёл ' + sum + ' шагов';
    }

    return message;
}


