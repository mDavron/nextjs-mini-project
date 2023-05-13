// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
import { socials } from "./data/socialsdata";

export default function handler(req, res) {
  console.log(req);
  res.status(200).json(socials);
}
