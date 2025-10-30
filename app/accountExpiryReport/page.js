document.addEventListener("DOMContentLoaded", function () {
  const reportData = [
    { id: 1, name: "Test", email: "testangel00@gmail.com", expiry: "29-01-2022" },
    { id: 2, name: "suku", email: "chauhanpratik9191613@gmail.com", expiry: "29-01-2022" },
  ];

  const tableBody = document.querySelector("#expiryTableBody");

  reportData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.expiry}</td>
    `;
    tableBody.appendChild(row);
  });
});
