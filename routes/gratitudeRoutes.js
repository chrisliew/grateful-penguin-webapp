const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/gratitude", (req, res) => {
    const { userId, gratitude, mood } = req.body;
    User.findByIdAndUpdate(
      userId,
      {
        $push: { gratitudes: { gratitude: gratitude, mood: mood } }
      },
      { safe: true, upsert: true, new: true },
      function(err, model) {
        console.log(err);
      }
    );
    res.send(200, req.body);
  });
};
