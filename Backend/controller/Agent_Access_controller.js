const AskAgentQuestion = async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Invalid question format" });
  }

  try {
    const response = await fetch(process.env.AGENT_AI_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_input: question }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Failed to start agent run:", response.status, errText);
      return res.status(502).json({ error: "Failed to start agent run" });
    }
    const { run_id } = await response.json();
    if (!run_id) {
      console.error("No run_id returned from agent AI");
      return res
        .status(502)
        .json({ error: "No run_id returned from agent AI" });
    }

    const reply = await pollforresult(run_id);
    res.json({ reply });
  } catch (error) {
  console.error("Error in AskAgentQuestion:", error);

  res.status(500).json({
    success: false,
    error: error.message || "Something went wrong while contacting the AI.",
  });
}
};

const pollforresult = async (run_id, attempt = 15) => {
  for (let i = 0; i < attempt; i++) {
    const url = `${process.env.AGENT_AI_GET_URL}/${run_id}`;
    const response = await fetch(url);
    const rawText = await response.text();

    console.log(`Poll attempt ${i + 1} [${response.status}]:`, rawText);

    if (!response.ok) {
      throw new Error(`Status check failed: ${response.status} ${rawText}`);
    }
    if (!rawText) {
      await new Promise((r) => setTimeout(r, 1500));
      continue;
    }
    const data = JSON.parse(rawText);

    if (data.status === 200 && data.response) {
      return data.response;
    }
    if (data.status === "failed" || data.status === "error") {
      throw new Error("Agent run failed");
    }

    await new Promise((r) => setTimeout(r, 1500));
  }
  throw new Error("Timed out waiting for agent response");
};

module.exports = { AskAgentQuestion };
