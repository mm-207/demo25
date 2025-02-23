const express = require("express");
const app = express();
const familyRoutes = require("./routes/familyRoutes");

app.use(express.json());
app.use(familyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});
