function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(computerResult, playerResult) {
	document.getElementById('result').innerText = 'Punkty komputera: ' + computerResult + ' | ' + 'Punkty gracza: ' + playerResult;
}
