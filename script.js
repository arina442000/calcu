var _a, _b;
var buttons = document.querySelectorAll('.numbers');
var operation = document.querySelectorAll('.operator');
var val;
var last_choice;
var _loop_1 = function (i) {
    (_a = buttons[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var input = document.querySelector('.value');
        input.value += buttons[i].textContent;
    });
};
for (var i = 0; i < buttons.length; i++) {
    _loop_1(i);
}
var _loop_2 = function (i) {
    (_b = operation[i]) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var input = document.querySelector('.value');
        if (!val) {
            val = input.value;
            input.value = '';
        }
        else {
            if (i == 0 || i == 1)
                input.value = '';
            if (i == 2)
                input.value = parseFloat(val) / 100;
            if (i == 3)
                input.value = parseFloat(val) / parseFloat(input.value);
            if (i == 4)
                input.value = parseFloat(val) * parseFloat(input.value);
            if (i == 5)
                input.value = parseFloat(val) - parseFloat(input.value);
            if (i == 6)
                input.value = parseFloat(val) + parseFloat(input.value);
            if (i == 7) {
                switch (last_choice) {
                    case 2:
                        input.value = parseFloat(val) / 100;
                        ;
                        break;
                    case 3:
                        input.value = parseFloat(val) / parseFloat(input.value);
                        break;
                    case 4:
                        input.value = parseFloat(val) * parseFloat(input.value);
                        break;
                    case 5:
                        input.value = parseFloat(val) - parseFloat(input.value);
                        break;
                    case 6:
                        input.value = parseFloat(val) + parseFloat(input.value);
                        break;
                }
            }
            val = '';
        }
        last_choice = i;
    });
};
for (var i = 0; i < operation.length; i++) {
    _loop_2(i);
}
