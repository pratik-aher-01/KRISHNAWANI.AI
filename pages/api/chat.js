// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message } = req.body;

    const response = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`, // Secure variable
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: message,
      }),
    });

    const data = await response.json();
    const reply = data?.generated_text || data?.[0]?.generated_text || "Sorry, no response.";

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
