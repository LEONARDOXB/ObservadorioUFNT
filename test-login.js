fetch('http://localhost:3000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@observatorio.ufnt.edu.br',
    password: 'Ufnt@2024!Obs#Db'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Erro:', err)); 