import {Pool } from "pg";

const pool: Pool = new Pool({
    user: "postgres", 
    password: "", 
    host: "localhost",
    port: 8000, 
    database: "home-videos"
})

export default pool;