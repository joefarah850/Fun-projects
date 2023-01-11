(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.butn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  let del = document.querySelector('.btn-del');
  let pi = document.querySelector('.btn-pi');
  let perc = document.querySelector('.btn-percent');
  let ln = document.querySelector('.btn-ln');
  let fact = document.querySelector('.btn-factorial');
  let nPr = document.querySelector('.btn-nPr');
  let nCr = document.querySelector('.btn-nCr');
  let exp = document.querySelector('.btn-exp');

  //retrieve data from numbers that are clicked
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });

  equal.addEventListener('click', function (e) {
    if (screen.value === '') {
      screen.value = 'Please Enter a Value: ';
    } else {
      let answer = eval(screen.value);
      screen.value = +(answer).toFixed(5);
    }
  })

  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if (screen.value === '') {
        screen.value = 'Please Enter a Value: ';
      } else {
        let answer = eval(screen.value);
        screen.value = +(answer).toFixed(5);
      }
    }
  })

  clear.addEventListener('click', function (e) {
    screen.value = '';
  })

  del.addEventListener('click', function (e) {
    screen.value = screen.value.substring(0, (screen.value).length - 1);
  })

  pi.addEventListener('click', function (e) {
    screen.value += Math.PI;
  })

  ln.addEventListener('click', function (e) {
    screen.value += 'ln(';
    document.querySelector('.btn-equal').addEventListener('click', function (e) {
      let answer = eval(parseFloat((Math.log((screen.value).substring(3, (screen.value).length)))));
      screen.value = +(answer).toFixed(5);
    })
  })

  perc.addEventListener('click', function (e) {
    screen.value /= 100;
  })

  fact.addEventListener('click', function (e) {
    let aux = screen.value;
    screen.value += '!';
    document.querySelector('.btn-equal').addEventListener('click', function (e) {
      let answer = factorial(aux);
      screen.value = +(answer).toFixed(5);
    })
  })

  nPr.addEventListener('click', function (e) {
    let aux = screen.value;
    screen.value += 'P';
    document.querySelector('.btn-equal').addEventListener('click', function (e) {
      let r = parseFloat((screen.value).substring(aux.length + 1, (screen.value).length));
      let answer = factorial(aux) / factorial(aux - r);
      screen.value = +(answer).toFixed(5);
    })
  })

  nCr.addEventListener('click', function (e) {
    let aux = screen.value;
    screen.value += 'C';
    document.querySelector('.btn-equal').addEventListener('click', function (e) {
      let r = parseFloat((screen.value).substring(aux.length + 1, (screen.value).length));
      let p1 = factorial(aux);
      let p2 = factorial(r) * factorial(aux - r);
      let answer = p1 / p2;
      screen.value = +(answer).toFixed(5);
    })
  })

  exp.addEventListener('click', function (e) {
    let aux = screen.value;
    screen.value += '**';
    document.querySelector('.btn-equal').addEventListener('click', function (e) {
      let answer = eval(parseFloat(screen.value));
      screen.value = +(answer).toFixed(5);
    })
  })

  function factorial(num) {
    if (num == 0 || num == 1) {
      return 1;
    } else {
      return (num * factorial(num - 1));
    }
  }
})();