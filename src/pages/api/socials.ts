
import { socials } from "./data/socialsdata";

export default function handler(req, res) {
  console.log(req);
  res.status(200).json(socials);
}
