console.log("Esecuzione iniziata...");
const { connectToDatabase } = require("./Db");

(async () => {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request().query("SELECT TOP 1 * FROM PieceCounts");
    console.log("Risultato della query:", result.recordset);
  } catch (err) {
    console.error("Errore durante il test:", err.message);
  }
})();
