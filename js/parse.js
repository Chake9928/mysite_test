function fetchId(id) {
    return document.getElementById(id);
}

function nl2br(txt) {
  return txt.replace(/\n/g, '');
}

function typeIt(from) {
  let w = fetchId("typer");
  let tw = from.value;
  w.innerHTML = nl2br(tw);
}