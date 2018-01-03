const express = require("express");
const apiRoute = require("./routes/apiRoutes");

// Define app
const app = express();

// define port
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Working.....");
})
app.use("/api", apiRoute);

// Listen
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));