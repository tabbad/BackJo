const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  await User.add({ ...req.body });
  res.send({ msg: "User Added" });
});

app.put("/update", async (req, res) => {
  const snapshot = await User.get();
  console.log("ma requete");
  console.log(req.body.UserName);
  snapshot.docs.forEach(async (doc) => {
    if (doc.data().UserName === req.body.UserName) {
      await User.doc(doc.id).update( { ...req.body } );
    }
  }
  );
  res.send({ msg: "Updated" });
});

app.delete("/delete", async (req, res) => {
  const snapshot = await User.get();
  snapshot.docs.forEach(async (doc) => {
    if (doc.data().UserName === req.body.UserName) {
      await User.doc(doc.id).delete();
    }
  });
  res.send({ msg: "Deleted" });
});
app.listen(4000, () => console.log("Up & RUnning *4000"));
