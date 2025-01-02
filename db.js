const sql = require("mssql");

// Configurazione del database
const dbConfig = {
  server: "becky-api.database.windows.net", // Nome del server
  database: "SIRIO", // Nome del database
  user: "CM-AS", // Nome utente SQL Server
  password: "Matcosxp1234!", // Password SQL Server
  options: {
    encrypt: true, // Necessario per Azure SQL
    trustServerCertificate: false, // Non usare certificati non attendibili
  },
};

// Funzione per connettersi al database
async function connectToDatabase() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Connessione al database SQL Server riuscita!");
    return pool;
  } catch (err) {
    console.error("Errore nella connessione al database:", err.message);
    throw err;
  }
}

module.exports = {
  sql,
  connectToDatabase,
};
