/* CRUD - Create(yaratish), 
		  Read(o'qish), 
		  Update(yangilash), 
		  Delete(o'chirish)
*/
const crudTable = document.querySelector('.crud-table');

// Create
function createUser(id, firstname, lastname, address) {
	return {id, firstname, lastname, address};
}

let users = [
	createUser(1, 'Alisher', 'Odilov', 'Namangan city'),
	createUser(2, 'Solijon', 'Karimov', 'Fargona city'),
	createUser(3, 'Ibrohim', 'Komoldinov', 'Tashkent city'),
]

renderUser()

// Read
function renderUser() {
	crudTable.innerHTML = '';

	const trForHead = document.createElement('tr');

	for(let prop in users[0]) {
		const th = document.createElement('th');
		th.innerText = prop;

		trForHead.appendChild(th);
	}

	const thAction = document.createElement('th');
	thAction.innerText = 'action';

	trForHead.appendChild(thAction);
	crudTable.appendChild(trForHead);

	for(let user of users){
		const tr = document.createElement('tr');

		for(let prop in user) {
			const td = document.createElement('td');
			td.innerText = user[prop];

			tr.appendChild(td);
		}

		const tdAction = document.createElement('td');
		const buttonEdit = document.createElement('button');
		const buttonDelete = document.createElement('button');
		const iconEdit = document.createElement('i');
		const iconDelete = document.createElement('i');
		tdAction.className = 'action';
		buttonEdit.className = 'crud-btn edit';
		buttonDelete.className = 'crud-btn delete';
		iconEdit.className = 'fa-solid fa-pen-to-square';
		iconDelete.className = 'fa-solid fa-trash-can';

		buttonEdit.appendChild(iconEdit);
		buttonDelete.appendChild(iconDelete);

		buttonDelete.onclick = function() {
			deleteUser(user.id);
		}

		buttonEdit.innerText = 'Edit';
		buttonDelete.innerText = 'Delete';

		tdAction.appendChild(buttonEdit);
		tdAction.appendChild(buttonDelete);
		tr.appendChild(tdAction);

		crudTable.appendChild(tr);
	}

}


// Delete
function deleteUser(id) {
	const filterUser = [];

	for(let user of users) {
		if(user.id !== id)
			filterUser.push(user);
	}

	users = [];

	for(let user of filterUser) {
		users.push(user);
	}

	renderUser();
}