const chatWindow = document.getElementById("chatWindow");

function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return; 

    addMessage(userInput, "user-message");
    document.getElementById("userInput").value = ""; 

    const botResponse = generateResponse(userInput);
    setTimeout(() => addMessage(botResponse, "bot-message"), 500); 
}

function addMessage(text, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + className;
    messageDiv.innerHTML = text;  
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; 
}

function generateResponse(userInput) {
    const input = userInput.toLowerCase();

    if (input === "hi" || input === "hello" || input === "hey") {
        return "Hey! How can I help you?";
    }

    if (input.startsWith("can you say ")) {
        return "While I can say that, my main purpose is to provide information on Roblox. Try asking me to recommend a game or help you with Roblox Studio!";
    }

    if (input.includes("recommend") && input.includes("game")) {
        return "I recommend trying <strong>Adopt Me!</strong>, <strong>Brookhaven</strong>, or <strong>Tower of Hell</strong> if you're looking for popular Roblox games!";
    }

    if (input.includes("studio help") || input.includes("roblox studio")) {
        return "For help with Roblox Studio, check out the official <a href='https://create.roblox.com/docs/' target='_blank'>Roblox Developer Hub</a> for tutorials and documentation. Do you need help with scripting, building, or something else?";
    }

    if (input.includes("scripting help") || input.includes("lua")) {
        return "In Roblox, scripts are written in Lua. You can learn more about scripting on the <a href='https://create.roblox.com/docs/' target='_blank'>Roblox Developer Hub</a>. Start with loops and conditional statements to get comfortable. Let me know if you need any specific help!";
    }

    if (input.includes("rules") || input.includes("safety") || input.includes("safe")) {
        return "Roblox has strict community guidelines. Please avoid sharing personal information and report suspicious behavior. For more information, visit the <a href='https://en.help.roblox.com/' target='_blank'>Roblox Help Center</a>.";
    }

    return "I'm here to help with Roblox! Try asking me for game recommendations, Roblox Studio tips, or scripting help in Lua. You can also check out the <a href='https://create.roblox.com/docs/' target='_blank'>Developer Hub</a> or the <a href='https://en.help.roblox.com/' target='_blank'>Help Center</a> for more details.";
}
