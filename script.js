let tone = "";

function setTone(t){
  tone = t;
}

function generate(){
  const output = document.getElementById("output");

  const replies = {
    playful: "Wow, that was short — should I be worried or amused?",
    confident: "Fair enough. What would make this more interesting for you?",
    warm: "I just want you to know I like talking to you.",
    flirty: "I feel like there’s more behind that message."
  };

  output.innerText = replies[tone] || "Pick a tone first.";
}
