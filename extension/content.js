console.log("extension is working !");

(() => {
  async function scanAndSend() {
    try {
      console.log("Scanning page for div with ID 'my_text'...");

      // Use a try-catch block for safe DOM access
      const myTextElement = document.getElementById("my_text");

      if (myTextElement) {
        const extractedText = myTextElement.innerText;
        console.log("Div found! Extracted text:", extractedText);

        // Send the data to the server
        const response = await fetch("http://localhost:3000", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: extractedText }),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("Server response:", responseData);
          alert(responseData.message);
        } else {
          console.error(`Server error: ${response.status}`);
        }
      } else {
        console.log("Div with ID 'my_text' not found.");
      }
    } catch (error) {
      console.error("Error during scanning or sending:", error);
    }
  }

  scanAndSend();
})();
