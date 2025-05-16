/**
 * Retrieves text from user clipboard and calls ChatGPT API function.
 * Puts text received from API call in text area.
 * 
 * @returns {None} Modifies text within text area. 
 */
async function sendData() {
  try {
    const text = await navigator.clipboard.readText();
    const textArea = document.getElementById('llm-response');
    textArea.value = "Processing..."; // Show loading state
    textArea.value = await getOpenAIResponse(text);
  } catch (error) {
    console.error(error);
    document.getElementById('llm-response').value = "Error: Could not access clipboard. Check permissions.";
  }
}


/**
 * Makes a POST request to the OpenAI API with string parameter. 
 * 
 * @param {string} prompt - String of text from user's clipboard.
 *
 * @returns {string} The response from the ChatGPT API. 
 */
async function getOpenAIResponse(prompt) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer API_KEY`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini-2024-07-18",
      messages: [
          { role: "system", content: "Your role is to explain complex concepts in simple terms in under 200 words."},
          { role: "user", content: prompt }
      ]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}

// Calls function sendData() upon clicking of 'SimplifyAI!' button. 
document.getElementById('actionButton').addEventListener('click', function() {
  sendData();
});
