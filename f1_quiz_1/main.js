let submit = document.querySelector('#submit');

submit.addEventListener('click', function() {
  var count = 0;

  let q1 = document.getElementById('q1').value;
  let q2 = document.getElementById('q2').value;
  let q3 = document.getElementById('q3').value;
  let q4 = document.getElementById('q4').value;
  let q5 = document.getElementById('q5').value;
  let q6 = document.getElementById('q6').value;
  let q7 = document.getElementById('q7').value;
  let q8 = document.getElementById('q8').value;
  let q9 = document.getElementById('q9').value;
  let q10 = document.getElementById('q10').value;

  let a1 = document.getElementById('a1');
  let a2 = document.getElementById('a2');
  let a3 = document.getElementById('a3');
  let a4 = document.getElementById('a4');
  let a5 = document.getElementById('a5');
  let a6 = document.getElementById('a6');
  let a7 = document.getElementById('a7');
  let a8 = document.getElementById('a8');
  let a9 = document.getElementById('a9');
  let a10 = document.getElementById('a10');

  let s1 = document.getElementById('s1');
  let s2 = document.getElementById('s2');
  let s3 = document.getElementById('s3');
  let s4 = document.getElementById('s4');
  let s5 = document.getElementById('s5');
  let s6 = document.getElementById('s6');
  let s7 = document.getElementById('s7');
  let s8 = document.getElementById('s8');
  let s9 = document.getElementById('s9');
  let s10 = document.getElementById('s10');
  
  if (q1.toLowerCase() == "bahrain" || q1.toLowerCase() == "sakhir" || q1.toLowerCase() == "sakhir  circuit") {
    count++;
    s1.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a1.textContent = "Correct answer: Bahrain";
    s1.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q2.toLowerCase() == "hamilton" || q2.toLowerCase() == "lewis hamilton") {
    count++;
    s2.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a2.textContent = "Correct answer: Lewis Hamilton";
    s2.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q3 == "11") {
    count++;
    s3.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a3.textContent = "Correct answer: 11";
    s3.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q4.toLowerCase() == "leclerc" || q4.toLowerCase() == "charles leclerc") {
    count++;
    s4.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a4.textContent = "Correct answer: Charles Leclerc";
    s4.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q5.toLowerCase() == "perez" || q5.toLowerCase() == "sergio perez" || q5.toLowerCase() == "checo" || q5.toLowerCase() == "checo perez") {
    count++;
    s5.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a5.textContent = "Correct answer: Sergio Perez";
    s5.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q6.toLowerCase() == "hamilton" || q6.toLowerCase() == "lewis hamilton") {
    count++;
    s6.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a6.textContent = "Correct answer: Lewis Hamilton";
    s6.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q7 == "8") {
    count++;
    s7.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a7.textContent = "Correct answer: 8";
    s7.innerHTML = "<span class='i'>Wrong<span>";
  }
  
  if (q8 == "78") {
    count++;
    s8.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a8.textContent = "Correct answer: 78";
    s8.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q9 == "31") {
    count++;
    s9.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a9.textContent = "Correct answer: 31";
    s9.innerHTML = "<span class='i'>Wrong<span>";
  }

  if (q10.toLowerCase() == "red") {
    count++;
    s10.innerHTML = "<span class='c'>Correct<span>";
  } else {
    a10.textContent = "Correct answer: Red";
    s10.innerHTML = "<span class='i'>Wrong<span>";
  }

  let score = document.getElementById('score');

  score.textContent = "You got: " + count + "/10 !";
})
