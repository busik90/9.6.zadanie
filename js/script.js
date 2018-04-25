var list = document.getElementById('list'),
		add = document.getElementById('addElem'),
		listItems = list.getElementsByTagName('li'),
		listLength = listItems.length;

log();

add.addEventListener('click', function() {
	var newListElem = document.createElement('li');

	newListElem.innerHTML = 'item ' + listLength++;
	list.appendChild(newListElem);

	console.log(newListElem.innerText);
});

//Display log in console

function log() {
	console.log('Liczba elementów na liście: ' + listLength);
	for (i = 0; i < listLength; i++) {
		console.log(listItems[i].innerText);
	}
	console.log('');
	console.log('Elementy dodane:');
}

