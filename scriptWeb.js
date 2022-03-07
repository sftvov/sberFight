(function (d) {
	'use strict';

	const arr = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Peter' },
		{ id: 3, name: 'Kate' },
	];

	for (let i = 1; i <= arr.length; i++) {
		let div = d.createElement('div');
		for (let j = 0; j < arr.length; j++) {
			if (arr[j].id == i) {
				div.onclick = function () {
					let name = arr[j].name;
					alert('Div number is ' + i + '. Name is: ' + name);
				};
			}
		}
		div.style.width = '30px';
		div.style.height = '30px';
		div.style.border = '1px solid red';
		d.body.appendChild(div);
	}
})(document);
