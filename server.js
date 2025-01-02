const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./Db"); // Assumendo che tu abbia già un modulo `Db.js`

const app = express();
app.use(cors());

// Endpoint per eseguire la query
app.get("/api/last-piece-count", async (req, res) => {
  try {
    const pool = await connectToDatabase();
    const result = await pool
      .request()
      .query("SELECT TOP 1 Count FROM SIRIO.dbo.PieceCounts ORDER BY Timestamp DESC;");
    res.json({ count: result.recordset[0].Count });
  } catch (err) {
    console.error("Errore durante la query:", err.message);
    res.status(500).send("Errore del server");
  }
});

// Avvia il server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend in esecuzione sulla porta ${PORT}`);
});
