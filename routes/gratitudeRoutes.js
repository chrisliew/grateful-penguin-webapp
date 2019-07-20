const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/gratitude", (req, res) => {
    const { userId, gratitude } = req.body;
    User.findByIdAndUpdate(
      userId,
      {
        $push: { gratitudes: { gratitude: gratitude, mood: 0 } }
      },
      { safe: true, upsert: true, new: true },
      function(err, model) {
        console.log(err);
      }
    );
    res.send(200, req.body);
  });
};
