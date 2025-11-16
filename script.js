function makeid(l) {
  // write your code here
	let result = '';
	let bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (let i = 0; i <l; i++) {
		result+= bigString.charAt(
			Math.floor(Math.random() * bigString.length)
		)
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");  
alert(makeid(l));  
