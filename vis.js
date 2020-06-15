let arr = ['музыка', 'тапочки', 'экспонат', 'поцелуй'];
let item = arr[Math.floor(Math.random()*arr.length)];
let mainanswer = quantity(item);
let imges = ['img/1.png','img/3.png','img/6.png' , 'img/7.png', 'img/8.png', 'img/9.png', 'img/10.png' , 'img/11.png' ];

function quantity(arr){
	let result = [];
	for(let i = 0; i < item.length; i++){
		result[i] = '_';
	}
	return result;
}
alert('Количество букв в слове: ' + quantity(arr));
let word = item.length;
let schet = false;
let kill = 0;
let foto = document.getElementById('visit');
while(word > 0 && kill !=  8){
	let answer = prompt('Введите букву: ');
	if(answer.length !== 1){
		alert('Упс! Нужно вводить только одну букву');
	}else{
		for(let i = 0; i < item.length; i++){
			if(answer == item[i]){
				mainanswer[i] = answer;
				word--;
				schet = true;
				alert('Правильно! ' + mainanswer.join(' '));
			}
		}	
	}
if (!schet) {
	foto.src = imges[kill];
	kill++;
}
	
}
if(word == 0){
alert('Молодец! Слово: ' + item);
} 