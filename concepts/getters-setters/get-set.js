const person = {
	firstName: 'Lawrence', 
	lastName: 'Solomon',
	get fullName() {
		return `${firstName} ${secondName}`
	},
	set fullName(value) {
		const parts = value.split(' ')
		this.firstName = parts[0]
		this.lastName = parts[1]
	}
}

person.fullName = "Josie Alaric"
console.log(person)
