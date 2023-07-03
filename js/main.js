let before = document.getElementById("before");
let liner = document.getElementById("liner");
let command = document.getElementById("typer"); 
let textarea = document.getElementById("texter"); 
let terminal = document.getElementById("terminal");

let commands = [];

//まずバナーを表示
loopLines(banner, "", 100);
//<textarea>領域にキー入力をフォーカス
textarea.focus();

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
	if (e.key == "Enter") {
		commands.push(command.innerHTML);
		addLine("toTakeshi> " + command.innerHTML, "no-animation", 0);
		commander(command.innerHTML);
		command.innerHTML = "";
		textarea.value = "";
	}
}

function commander(cmd) {
	switch (cmd.toLowerCase()) {
		case "$whois -table":
			loopLines(whois, "color2 margin", 80);
		break;
		case "$works -list":
			loopLines(works, "color2 margin", 80);
		break;
		case "$areyou -borntocode?":
			loopLines(born2code, "color2 margin", 80);
		break;
		case "$areyou -masterofcss?":
			loopLines(needlessToSay, "color2 margin", 80);
		break;
		default:
		addLine("<span class=\"inherit\">Command not found.</span>", "error", 100);
		break;
	}
}

function addLine(text, style, time) {
  let t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    let next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);
	//ウィンドウの一番下までスクロール
    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

//line追加
function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
