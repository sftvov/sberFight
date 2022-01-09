names = ['Kevin', 'Jack', 'Mark'];
statements = ['Mark-is not youngest', 'Jack-is not youngest'];

function getResult(names, statements) {
	let indexArrays = [];
	for (let i = 0; i < names.length; i++) {
		indexArrays[i] = [];
		for (let j = 0; j < names.length; j++) {
			indexArrays[i].push(j);
		}
	}
	indexArrays;

	for (let i = 0; i < statements.length; i++) {
		let statement = statements[i];
		statement = statement.split('-');
		statement;
		let position = names.indexOf(statement[0]);
		position;
		switch (statement[1]) {
			case 'is not youngest':
				let indexOfZero = indexArrays[position].indexOf(0);
				if (indexOfZero !== -1) indexArrays[position].splice(indexOfZero, 1);
				break;
			case 'is not oldest':
				let lastPosition = indexArrays[position].indexOf(indexArrays.length - 1);
				lastPosition;
				if (lastPosition !== -1) indexArrays[position].splice(lastPosition, 1);
				break;
			case 'is youngest':
				indexArrays[position] = [0];
				for (let j = 0; j < indexArrays.length; j++) {
					let x = indexArrays[j];
					let indexOfZero = x.indexOf(0);
					if (x !== indexArrays[position] && indexOfZero !== -1) x.splice(indexOfZero, 1);
				}
				break;
			case 'is oldest':
				indexArrays[position] = [indexArrays.length - 1];
				for (let j = 0; j < indexArrays.length; j++) {
					let x = indexArrays[j];
					let lastPosition = x.indexOf(indexArrays.length - 1);
					if (x !== indexArrays[position] && lastPosition !== -1) x.splice(lastPosition, 1);
				}
				break;
		}
	}

	indexArrays;

	function findAllindexes(arr) {
		arr.forEach((x) => {
			if (x.length > 1) {
				x;
				for (let y of x) {
					for (let z of arr) {
						if (z.length === 1) {
							if (z[0] === y) {
								x.splice(x.indexOf(y), 1);
								findAllindexes(indexArrays);
							}
						}
					}
				}
			}
		});
	}

	findAllindexes(indexArrays);

	indexArrays;
	indexArrays = indexArrays.join('');
	indexArrays;

	let newNames = [];

	for (let i = 0; i < names.length; i++) {
		newNames[i] = names[indexArrays.indexOf(i)];
	}

	return newNames;
}

let result = getResult(names, statements);

result;
