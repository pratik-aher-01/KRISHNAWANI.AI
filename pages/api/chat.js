// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: message }),
      }
    );

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ message: data.error });
    }

    // Hugging Face returns an array of generated_text
    res.status(200).json({ reply: data[0]?.generated_text || "No reply" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
