document.getElementById("calculate-btn").addEventListener("click", function() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1;  // Months are 0-based in JavaScript Date
    const year = parseInt(document.getElementById("year").value);
  
    const result = document.getElementById("result");
  
    // Validate input values
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || month < 0 || month > 11 || year < 1900) {
      result.textContent = "Please enter a valid date.";
      return;
    }
  
    const birthdate = new Date(year, month, day);
    const today = new Date();
  
    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    result.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  });
  
  document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("result").textContent = "";
  });
  
  document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("birthdate").value = "";
    document.getElementById("result").textContent = "";
  });
  
  // Matrix-like falling numbers background effect
  const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const columns = Math.floor(canvas.width / 20);
  const drops = Array(columns).fill(0);
  
  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = "#0CF0E0";
    ctx.font = "18px monospace";
  
    for (let i = 0; i < drops.length; i++) {
      const text = Math.floor(Math.random() * 10);
      ctx.fillText(text, i * 20, drops[i] * 20);
  
      if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 50);
  
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
