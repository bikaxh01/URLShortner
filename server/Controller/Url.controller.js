import { nanoid } from "nanoid";
import URL from "../Model/URL.model.js";

async function HandleGenerateshortUrl(req, res) {
  const orgUrl = req.body.url;

  const UniqueId = nanoid(8);
  console.log(UniqueId);
  console.log("req came");
  if (!orgUrl) {
    return res.status(400).json({
      message: "Invalid URl",
    });
  }

  await URL.create({
    shortId: UniqueId,
    originalUrl: orgUrl,
    visitHistory: [],
  });

  res.status(200).json(`http://localhost:8000/api/${UniqueId}`);
}

async function redirectToUrl(req, res) {
  const id = req.params.id;
  const date = new Date();
  const data = await URL.findOneAndUpdate(
    { shortId: id },
    { $push: { visitHistory: { timestamp: date.toLocaleDateString() } } }
  );

  console.log(data);

  const redirectUrl = await data.originalUrl;

  res.redirect(redirectUrl);
}

export { HandleGenerateshortUrl, redirectToUrl };
