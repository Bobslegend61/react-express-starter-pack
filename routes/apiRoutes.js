const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/users", (req, res) => {
    let users = [{
        id: 1,
        name: "Alabi Emmanuel"
    }, {
        id: 2,
        name: "Nick James"
    },{
        id: 3,
        name: "Allen Write"
    }];

    res.json(users);
});

module.exports = apiRouter;