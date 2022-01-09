const fighters_stamina = [0, 10, 0, 10];

function getResult(fightersStamina) {
	let chances = [];

	for (let i = 0; i < fightersStamina.length; i++) {
		let arr = fightersStamina.slice();
		let x = arr[i];

		arr.splice(i, 1);
		let wins = 0;

		for (let j = 0; j < arr.length; j++) {
			let arr2 = arr.slice();
			let y = arr2[j];
			arr2.splice(j, 1);
			let abc = Math.abs(arr2[0] - arr2[1]);
			if (x - y === abc) wins += 0.5;
			else if (x - y > abc) wins += 1;
		}
		chances.push(wins);
	}
	chances;
	let sum = chances.reduce((a, b) => {
		return a + b;
	});
	sum;
	chances = chances.map((x) => {
		return Math.round((x / sum) * 100);
	});
	return chances;
}
let result = getResult(fighters_stamina);

result;
