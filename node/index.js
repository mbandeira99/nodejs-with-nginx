const express = require('express')
const { faker } = require('@faker-js/faker')

const app = express()

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
  multipleStatements: true
}

const mysql = require('mysql');

app.get('/', (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  const sql = `INSERT INTO people(name) values ('${faker.name.firstName()}')`
  connection.query(sql)

  connection.query("SELECT name FROM people", (err, rows) => {
    if (err) throw err
    
    const names = Object.keys(rows).map(key => rows[key].name);

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${names.map(name => `<li>${name}</li>`).join('')}
      </ul>
    `)
  })

  connection.end()
})

app.listen(3000, () => console.log('Server is up and running'))