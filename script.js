let tone = "";

function setTone(t) {
  tone = t;
}

function generate() {
  const input = document.getElementById("input").value.trim();
  const output = document.getElementById("output");

  if (!input || !tone) {
    output.innerHTML = "<p>Please enter a message and pick a tone.</p>";
    return;
  }

  // Basic keyword/emotion analysis
  const lower = input.toLowerCase();
  let context = "";

  if (lower.includes("lol") || lower.includes("haha") || lower.includes("😂")) {
    context = "funny";
  } else if (lower.includes("?")) {
    context = "question";
  } else if (lower.includes("thanks") || lower.includes("thank")) {
    context = "grateful";
  } else {
    context = "neutral";
  }

  // Dynamic templates per tone
  const templates = {
    playful: {
      funny: ["Haha, I see your sense of humor is top-notch!", "Wow, that made me laugh 😄", "You’re dangerously funny, I’m warned now!"],
      question: ["Hmm, tricky question! Let me think…", "Oh, I like the way you ask questions 😏", "I’m intrigued by that one!"],
      grateful: ["Aww, you’re sweet 😄", "Thanks! I like it when you say that 😏", "You just made my day!"],
      neutral: ["Interesting… tell me more!", "Haha, okay, I like this vibe!", "Oh really? I want to hear more 😄"]
    },
    confident: {
      funny: ["I like your humor, keep it coming.", "You’ve got a sharp wit, I respect that.", "Confidence + humor, nice combo."],
      question: ["Good question, here’s what I think…", "I can answer that clearly for you.", "Let’s break it down."],
      grateful: ["Appreciate that. I respect it.", "Thanks, I notice that kind of energy.", "I like that, thank you."],
      neutral: ["Noted. I see where you’re coming from.", "Interesting, I’ll respond clearly.", "Okay, let’s keep this going."]
    },
    warm: {
      funny: ["You always make me smile 😄", "I love when you’re playful!", "Your humor brightens the conversation."],
      question: ["I like how thoughtful you are.", "Thanks for asking, I appreciate it.", "Your curiosity is cute."],
      grateful: ["That’s very kind of you.", "I appreciate you saying that.", "You’re sweet 😌"],
      neutral: ["I enjoy talking with you.", "You make this conversation easy.", "I’m glad we’re chatting."]
    },
    flirty: {
      funny: ["Haha, you’re dangerously charming 😏", "Careful, that humor might get you in trouble 😉", "You know how to make me smile… intentionally? 😏"],
      question: ["Ooh, I like your curiosity 😉", "That question tells me a lot about you 😏", "You’re keeping me intrigued 😏"],
      grateful: ["Mmm, I like when you say that 😏", "Your words are nice… keep them coming 😉", "You’re charming, I won’t lie 😏"],
      neutral: ["I’m noticing you… 😉", "You’ve got my attention 😏", "I want to hear more from you 😏"]
    }
  };

  // Pick a random template from the right category
  const choices = templates[tone][context];
  const reply = choices[Math.floor(Math.random() * choices.length)];

  output.innerHTML = `
    <h3>Your reply:</h3>
    <p>${reply}</p>
    <small>This tone signals <strong>${tone}</strong> energy and adapts to your message.</small>
  `;
}
