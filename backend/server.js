const express = require("express");
const dbConnect = require("./config/dbConnect");
const { globalErrhandler, notFound } = require("./middlwares/globalErrHandler");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");
const cors = require("cors");
dbConnect();
const app = express();

//middlewares
app.use(express.json());

// cors middlware
app.use(cors());

//users route
app.use("/api/v1/users", usersRoute);
//account routes
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers
app.use(notFound);

app.use(globalErrhandler);

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));
