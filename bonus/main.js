const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	}
];

// assegno un colore per ogni tipo di icona, generando un colore casuale
assignColor(icons);

// genero le icone dentro a container
const container = document.querySelector('.container');
drawIcons(container, icons);

// creo l'elemento select 
const select = assignSelectOptions();
// filtro le icone per tipo, aggiornando dinamicamente l'elenco in base al valore della select
select.addEventListener('change', function(){
	if (this.value == '') {
		drawIcons(container, icons);
	} else {
		const filteredIcons = icons.filter(icon => {
			if (icon.type == this.value) {
				return true;
			}
			return false;
		});
		drawIcons(container, filteredIcons);
	}
});








/* FUNZIONI */

// assegno alla select un'option per ogni icon.type
function assignSelectOptions() {
	let select = document.getElementById('type-selector');
	select.innerHTML = `<option value="">All</option>`;
	let currentOption = '';

	icons.forEach(icon => {
		if(icon.type != currentOption) {
			currentOption = icon.type;
			select.innerHTML += `<option value="${currentOption}">${currentOption}</option>`
		}
	});

	return select;
}


// assegna un colore per tipo di icona
function assignColor(array) {
	const animalColor = generateRandomColor();
	const vegetableColor = generateRandomColor();
	const userColor = generateRandomColor();

	array.forEach(icon => {
		switch (icon.type) {
			case 'animal':
				icon.color = animalColor;
				break;
			case 'vegetable':
				icon.color = vegetableColor;
				break;
			case 'user':
				icon.color = userColor;
		}
	});

	return true;
}


// genera tutte le icone dentro a container, a partire dalla struttura dati icons
function drawIcons(container, array) {
	let content = '';

	array.forEach(icon => {
		content +=`<div class="icon">
						<i style="color:${icon.color};" class="${icon.family} ${icon.prefix}${icon.name}"></i>
						<span>${icon.name}</span>
					</div>`;
	});

	container.innerHTML = content;
}


// genera un colore esadecimale casuale
function generateRandomColor() {
	let color = '#';

	for (let i = 0; i < 6; i++) {
		let hexValue = Math.floor(Math.random() * 16);
		switch (hexValue) {
			case 10:
				hexValue = 'a';
				break;
			case 11:
				hexValue = 'b';
				break;
			case 12:
				hexValue = 'c';
				break;
			case 13:
				hexValue = 'd';
				break;
			case 14:
				hexValue = 'e';
				break;
			case 15:
				hexValue = 'f';
		}
		color += hexValue;
	}
	return color;
}


