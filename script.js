const container = document.querySelector('#container');

container.textContent = "This is container box";

const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container');

container.appendChild(flexContainer);

const divBox1 = document.createElement('div');
const divBox2 = document.createElement('div');
const divBox3 = document.createElement('div');
const divBox4 = document.createElement('div');
const divBox5 = document.createElement('div');
const divBox6 = document.createElement('div');
const divBox7 = document.createElement('div');
const divBox8 = document.createElement('div');
const divBox9 = document.createElement('div');
const divBox10 = document.createElement('div');



flexContainer.appendChild(divBox1);
flexContainer.appendChild(divBox2);
flexContainer.appendChild(divBox3);
flexContainer.appendChild(divBox4);
flexContainer.appendChild(divBox5);
flexContainer.appendChild(divBox6);
flexContainer.appendChild(divBox7);
flexContainer.appendChild(divBox8);
flexContainer.appendChild(divBox9);
flexContainer.appendChild(divBox10);



