let buttons = document.querySelectorAll('.numbers');
let operation = document.querySelectorAll('.operator');
let val;
let last_choice;

for (let i = 0; i < buttons.length; i++) {
  buttons[i]?.addEventListener('click', () => {
    let input = document.querySelector('.value');
    input.value += buttons[i].textContent;
  })
}

for (let i = 0; i < operation.length; i++) {
  operation[i]?.addEventListener('click', () => {
    let input = document.querySelector('.value');
    if (!val) {
      val = input.value;
      input.value = '';
    }
    else {
      if (i == 0 || i == 1) input.value = '';
      if (i == 2 ) input.value = parseFloat(val) / 100;
      if (i == 3 ) input.value = parseFloat(val) / parseFloat(input.value);
      if (i == 4 ) input.value = parseFloat(val) * parseFloat(input.value);
      if (i == 5 ) input.value = parseFloat(val) - parseFloat(input.value);
      if (i == 6 ) input.value = parseFloat(val) + parseFloat(input.value);

      if (i == 7) {
        switch (last_choice) {
          case 2:
            input.value = parseFloat(val) / 100;;
            break;
          case 3:
            input.value = parseFloat(val) / parseFloat(input.value)
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
  })
}
