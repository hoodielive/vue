// Old way
function objectify (key, value) {
	let obj = {}
	obj[key] = value 
	return obj
}

console.log(objectify('name', 'Larry Solo'))

// New way/ Computed Property Names
function objectify (key, value) {
	return {
		[key]: value
	}
}

console.log(objectify('status', 'awo' ))

