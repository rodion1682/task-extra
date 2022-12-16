export class App {
	#totalAmount

	constructor(numbers, date) {
		this.numbers = numbers;
		this.date = date;
		this.#totalAmount = 0;
	}

	run() {
		const donationForm = document.querySelector('.donate-form');
		
		donationForm.addEventListener('submit', (event) => {
			event.preventDefault();
		
			let newDate = new Date();
			let newApp = new App();
			newApp.addHTML(newDate);

			let totalAmount = document.querySelector('#total-amount');
			let allItems = document.querySelectorAll('.donate-item b');
			
			newApp.setTotalAmount = newApp.calcAllNumberSum(allItems);
			totalAmount.textContent = newApp.getTotalAmount;
		});
	}

	addHTML(date) {
		this.date = date;
		const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const donationInput = document.querySelector('.donate-form__donate-input');
		let hours = this.date.getHours();
		let donatesContainer = document.querySelector('.donates-container__donates');

		let time = '';
		if (hours < 12 && hours > 0) {
			time = 'am';
		} else {
			time = 'pm';
		}

		let donateItem = document.createElement('div');
		donateItem.className = 'donate-item';
		donateItem.innerHTML += `
		${monthNames[this.date.getMonth()]} 
		${this.date.getDate()}th 
		${this.date.getFullYear()}, 
		${hours}:${this.date.getMinutes()}:${this.date.getSeconds()} ${time} - 
		<b>${donationInput.value}$</b>`;

		return donatesContainer.appendChild(donateItem);
	}

	get getTotalAmount () {
		return this.#totalAmount;
	}

	set setTotalAmount(totalAmount) {
		this.#totalAmount = totalAmount;
	}

	calcAllNumberSum(numbers) {
		this.numbers = numbers;
		let sum = 0;

		numbers.forEach((item) => {
			sum += Number(item.textContent.replace('$', ''));
		});

		return sum;
	}
}
