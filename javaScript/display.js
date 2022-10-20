function displayUser()
{
    let tableUserDiv = document.getElementById("userList");
    let table ="";
    for (let i = 0; i < registerUser.users.length; i++) {
        let aUser = registerUser.users[i];
        table += `
        <tr id = "${aUser.id}"></tr>
        <th scope="row">${aUser.id}</th>
        <td>${aUser.email}</td>
        <td>${aUser.password}</td>
        <td>${aUser.fName}</td>
        <td>${aUser.lName}</td>
        <td>${aUser.age}</td>
        <td>${aUser.address}</td>
        <td>${aUser.phone}</td>
        <td>${aUser.payment}</td>
        <td>${aUser.color}</td>
        <td><button type="button" class="btn btn-danger" onclick="deleteUser(${aUser.id})">Delete</button></td>
        `;
    }
    tableUserDiv.innerHTML = table;
}