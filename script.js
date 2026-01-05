let users = [];

async function loadUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  users = await res.json();
  render(users);
}

function render(data){
  const list = document.getElementById('users');
  list.innerHTML = '';

  data.forEach(user=>{
    const li = document.createElement('li');
    li.innerText = user.name;
    list.appendChild(li);
  });
}

document.getElementById('search').addEventListener('input', e=>{
  const value = e.target.value.toLowerCase();
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(value)
  );
  render(filtered);
});

loadUsers();
