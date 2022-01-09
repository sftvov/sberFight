s = 'c cccccc b a b';
symbol = 'a';

function getResult(s, symbol) {
	function replaceSpace(i) {
		let length = arr[i].length + arr[i + 1].length + 1;
		let newItem = symbol.repeat(length);
		arr.splice(i, 2, newItem);
	}

	function compareNeighbors(arr) {
		let length = arr.length;
		for (let i = 0; i < arr.length - 1; i++) {
			let one = arr[i];
			let two = arr[i + 1];
			if (one[0] === symbol || two[0] === symbol) {
				if (one.length !== two.length) {
					let fat = one.length > two.length ? one : two;
					if (fat[0] === symbol) {
						replaceSpace(i);
						i--;
					}
				} else {
					replaceSpace(i);
					i--;
				}
			}
		}
		if (arr.length !== length) compareNeighbors(arr);
	}

	let arr = s.split(' ');

	compareNeighbors(arr);

	arr = arr.map((x) => {
		return x[0] === symbol ? x.length : 0;
	});
	return Math.max.apply(null, arr);
}

const result = getResult(s, symbol);

result;
