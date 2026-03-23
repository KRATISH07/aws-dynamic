// SIGNUP
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Fill all fields");
    return;
  }

  const res = await fetch("/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  alert(data.message);
  if (data.message === "Account created") {
    window.location.href = "index.html";
  }
}

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.message === "Login success") {
    localStorage.setItem("currentUser", email);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login";
  }
}

// ADD SUBJECT
async function addSubject() {
  const email = localStorage.getItem("currentUser");

  const name = document.getElementById("subject").value;
  const present = parseInt(document.getElementById("present").value);
  const absent = parseInt(document.getElementById("absent").value);

  if (!name || isNaN(present) || isNaN(absent)) {
    alert("Fill all fields");
    return;
  }

  await fetch("/add-subject", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, name, present, absent })
  });

  render();
}

// RENDER LIST
async function render() {
  const email = localStorage.getItem("currentUser");

  const res = await fetch(`/subjects/${email}`);
  const subjects = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  subjects.forEach((sub) => {
    const li = document.createElement("li");
    li.innerText = `${sub.name} - ${sub.percent}% (P:${sub.present}, A:${sub.absent})`;
    list.appendChild(li);
  });
}

// LOGOUT
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// AUTO LOAD
if (window.location.pathname.includes("dashboard.html")) {
  render();
}
