let calendar = 1951;
let dateOfBirth = 1923;
let name = 'hnna';
let phrases = ['28', 'hanna'];

function getResult(calendar, dateOfBirth, name, phrases) {
	let realAge = calendar - dateOfBirth;
	let offerAge = Number(phrases[0]);
	let realName = name.toLowerCase().split('');
	let offerName = phrases[1].toLowerCase().split('');

	function compareDifferentLengthNames(longName, shortName) {
		let errors = 0;
		for (let i = 0; i < longName.length; i++) {
			if (longName[i] !== shortName[i]) {
				errors++;
				shortName.splice(i, 0, longName[i]);
			}
		}
		return errors > 1 ? false : true;
	}

	function compareEqualNames(name, offerName) {
		let errors = 0;
		for (let i = 0; i < name.length; i++) {
			if (name[i] !== offerName[i]) {
				errors++;
			}
		}
		return errors > 1 ? false : true;
	}

	if (realAge === offerAge || realAge - 1 === offerAge) {
		if (realName.length !== offerName.length) {
			return realName.length > offerName.length ? compareDifferentLengthNames(realName, offerName) : compareDifferentLengthNames(offerName, realName);
		} else return compareEqualNames(realName, offerName);
	} else return false;
}
