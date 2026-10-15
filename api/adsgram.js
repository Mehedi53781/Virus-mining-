export default function handler(req, res) {
  const { userid, reward } = req.query;

  if (userid) {
    console.log(`User ${userid} watched the ad!`);
    return res.status(200).json({ success: true, message: "Reward granted" });
  }

  return res.status(400).json({ success: false, message: "Invalid request" });
}
