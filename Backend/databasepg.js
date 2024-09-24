const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: PASSWORD,
    database: 'postgres'
})

client.connect();


// Create the users table if it doesn't exist 
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    username VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );
`;

client.query(createTableQuery, (err, res) => {
    if(err) {
        console.error("Error creating table:", err.message);
    } else {
        console.log("Table created or already exists");
    }
})


// After creating the table, you can query it
client.query( 'Select * from users', (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})