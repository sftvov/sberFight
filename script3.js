const cave = [2, 4, 1, 1, -1, 0];

function getResult(cave) {
	let lengthWay = [];

	cave.forEach((item, index) => {
		let counter = 0;

		while (item != -1) {
			item = cave[item];
			if (item === index) {
				counter = -1;
				break;
			}
			index = cave.indexOf(item);
			counter++;
		}

		lengthWay.push(counter);
	});

	lengthWay;

	let longestWay = Math.max.apply(null, lengthWay);

	return lengthWay.indexOf(longestWay);
}

const result = getResult(cave);

result;
