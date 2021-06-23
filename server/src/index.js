const config = require("./config");
const server = require("./server");
const admin = require("firebase-admin");
const serviceAccount = require("../frontend-subject-firebase-adminsdk-jpyhn-2abf5e9307.json");
const { query } = require("express");
const databaseURL = "https://frontend-subject.firebaseio.com/";

const db = admin.firestore;

function startServer() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: databaseURL,
    });
    console.log("Your database is connected!");
    server.listen(config.PORT, config.HOST, () => {
      console.log(`Your server is running on ${config.HOST}:${config.PORT}`);
    });
  } catch (err) {
    console.log("Your database is not connected!");
  }
}
startServer();

server.get("/getAllItem", async (req, res) => {
  try {
    let itemList = [];

    await admin
      .firestore()
      .collection("tools")
      .get()
      .then(async (querySnapshot) => {
        await querySnapshot.forEach(async (doc) => {
          await itemList.push({ id: doc.id, data: doc.data() });
        });
        console.log(itemList);
      });
    res.send(itemList);
  } catch (err) {
    console.log(err)
  }
});

server.get("/item/id", async (req, res) => {
  try {
    let { id } = req.query;
    console.log(id);
    let readData = await admin.firestore().collection("tools").doc(id).get();
    res.send(readData.data());
  } catch (err) {
    console.log(err)
  }
});

server.post("/createItem", async (req, res) => {
  const { id, name, amount, price, status, image } = req.body;
  const data = {
    id: id,
    name: name,
    image: image,
    amount: amount,
    price: price,
    status: status
  };
  console.log(data);
  try {
    let doc = await admin.firestore().collection("tools").doc().set(data);
  } catch (error) {
    console.log(error);
  }
});

server.delete("/deleteItem", async (req, res) => {
  const { id } = req.query;
  try {
    await admin.firestore().collection("tools").doc(id).delete();
  } catch (error) {
    console.log("item error");
  }
});

server.put("/updateItem", async (req, res) => {
  const {idDoc, id, name, amount, price, editData} = req.body;
  try {
    await admin.firestore().collection("tools").doc(idDoc).update({
      id: editData.id,
      name:editData. name,
      // image: image,
      amount: editData.amount,
      price: editData.price,
      // status: status
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});