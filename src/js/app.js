export function orderByProps(obj, arrayIndex) {
    let result = [];
    let keys = Object.keys(obj).sort();
    arrayIndex.forEach(element => {
        result.push({key: element, value: obj[element]});
    });

    keys.forEach(element => {
        if (!arrayIndex.includes(element))
            result.push({ key: element, value: obj[element]});
    })
    return result;
}

export function destructuring(character) {
    let result = [];
    for (const attack of character.special) {
		const { id, name, description = 'Описание недоступно', icon } = attack;
		result.push({id, name, description, icon});
	}
    return result;
}