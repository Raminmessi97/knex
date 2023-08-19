const {Pool} = require("pg")
const pool = new Pool({
    host:'localhost',
    post:5432,
    database:"todo",
    user:'ramin',
    password:'ramin'
})