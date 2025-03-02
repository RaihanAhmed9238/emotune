document.getElementById('add').addEventListener('click', () => {
  let inp = document.getElementById('item');
  let check = document.createElement('input');
  check.type = 'checkbox';
  let label = document.createElement('label');
  label.textContent = inp.value;
  label.prepend(check);
  inp.value = '';
  document.getElementById('list').append(label);
});