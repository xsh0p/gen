var sec = 1;
let text = "!!!Acabo de ganar 100 GB de datos moviles!!!\nEntre aqui y consiga los suyos: http://dev.server.net/gen/"
let sendurl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Data = () => document.querySelector("div#env").style.display = "flex";

async function Whats() {
	window.open(sendurl, "_blank");
	await sleep(2500);
	const element = document.querySelector(`#status-bar #sec${sec}`);
	element.style.backgroundColor = "blue";
	if (sec == 8) {
		const send = document.querySelector("button#send");
		send.disabled = false;
		send.style.backgroundColor = "lightblue";
		send.style.cursor = "pointer";
		const whts = document.querySelector("button#whats")
		whts.disabled = true;
		whts.cursor = "not-allowed";
	}
	sec++;
}

const Send = () => document.location.pathname = "/gen/login/";
