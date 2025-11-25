// PLACE YOUR OPENROUTER TOKEN BELOW (replace YOUR_OPENROUTER_API_TOKEN)
const OPENROUTER_API_TOKEN = "__OPENROUTER_API_TOKEN__";
async function askAI() {
  const input = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');
  responseDiv.innerHTML = "Thinking...";

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // Or another available model
        messages: [{role: 'user', content: input}]
      })
    });
    const data = await res.json();
    responseDiv.innerHTML = data.choices[0]?.message?.content || "No response";
  } catch (err) {
    responseDiv.innerHTML = "Error: " + err.message;
  }
}
