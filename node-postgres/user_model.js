// import { USER, HOST, DATABASE, PASSWORD, PORT } from "./env";
import Pool from "pg-pool";

const pool = new Pool({
  user: 'connkat',
  host: 'localhost',
  database: 'home_videos',
  password: '',
  port: 5432,
});

export const getUsers = () => {
    return new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM merchants ORDER BY id ASC", (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      });
    });
  };
  export const createUser = (body) => {
    return new Promise(function (resolve, reject) {
      const { name, email, password } = body;
      pool.query(
        "INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *",
        [name, email, password],
        (error, results) => {
          if (error) {
            reject(error);
          }
          resolve(`A new merchant has been added added: ${results.rows[0]}`);
        }
      );
    });
  };
  export const deleteUser = () => {
    return new Promise(function (resolve, reject) {
      const id = parseInt(request.params.id);
      pool.query(
        "DELETE FROM merchants WHERE id = $1",
        [id],
        (error, results) => {
          if (error) {
            reject(error);
          }
          resolve(`User deleted with ID: ${id}`);
        }
      );
    });
  };
