// Agar admin login nahi hai
if (localStorage.getItem("adminLoggedIn") !== "true") {
  window.location.href = "../admin/admin.html";
}




if (localStorage.getItem("adminLoggedIn") !== "true") {
  window.location.href = "../index.html";
}



const table = document.getElementById("data");
let apps = JSON.parse(localStorage.getItem("osp_applications")) || [];

apps.forEach((app, index) => {
  let statusClass =
    app.status === "Eligible" ? "status-eligible" :
    app.status === "Not Eligible" ? "status-not" :
    "status-pending";

  table.innerHTML += `
    <tr>
      <td>${app.id}</td>
      <td>${app.name}</td>
      <td>${app.mobile}</td>
      <td>${app.village}</td>
      <td>${app.service}</td>
      <td class="${statusClass}">${app.status}</td>
      <td>
        <button class="btn btn-success btn-xs"
          onclick="updateStatus(${index}, 'Eligible')">Eligible</button>
        <button class="btn btn-danger btn-xs"
          onclick="updateStatus(${index}, 'Not Eligible')">Not Eligible</button>
      </td>
    </tr>
  `;
});

function logout() {
  // remove admin login session
  localStorage.removeItem("adminLoggedIn");

  // redirect to index.html (root folder)
  window.location.href = "../index.html";
}

