// Getting PostgreSql To Show In Visual Studio (This One Isn't connected to anything at the moment)
const {Client} = require("pg")

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5431,
    password: "VyperUnc0ded!",
    database: "D.E.C.A",
});

client.connect();

client.query(`SELECT * FROM staff`, (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else {
        console.log("Error occured: " + err.message);
    }
    client.end;
});

module.exports = client 