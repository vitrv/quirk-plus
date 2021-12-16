// input -> [Base,Style] -> output

/* TODO:
   -Bootstrap/colorful ui
   -preset editor and serializer/loader
   -tabs for preset editor
   -update menu for new presets
   -Title case and all caps
   -take tags and commands for bb-formatted styles
   -Add bbscript and colorscript styles
*/


var parser = loadparser();


function updateOutput() {
  var textbox = document.getElementById("text");
  document.getElementById("output").innerHTML = parser.transform(textbox.value);
}

/*function setTag(item, index, arr) {
  var tag = document.getElementById("tag").value;
  arr[index] = item + " " + tag
}*/

function w3Copy() {
  /* Get the text field */
  var copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
}

window.onload = function() {

  var sel = document.getElementById("preset");
  var sel2 = document.getElementById("style");
  var textbox = document.getElementById("text");
  var tag = document.getElementById("tag");
  var com = document.getElementById("com");
  var hex = document.getElementById("hex");
  var rel = document.getElementById("reload");


  for (var x in parser.library) {
    sel.options[sel.options.length] = new Option(parser.library[x].name, parser.library[x].name);
  }

  let styles = ['No Style', 'Memo Style', 'Script Style', 'BBScript Style', 'PM Style']

  for (var s in styles) {
    sel2.options[sel2.options.length] = new Option(styles[s], styles[s]);
  }


  textbox.oninput = function parse() {
    updateOutput();
  }

  rel.onclick = function reload() {
    parser.context.tag = tag.value;
    parser.context.hex = hex.value;
    parser.context.com = com.value;
    updateOutput();
  }

  tag.oninput = function update() {
    parser.context.tag = tag.value;
    updateOutput();
  }

  hex.oninput = function update() {
    parser.context.hex = hex.value;
    updateOutput();
  }

  com.oninput = function update() {
    parser.context.com = com.value;
    updateOutput();
  }


  sel.onchange = function update() {
    parser.config = parser.library[sel.selectedIndex-1];
    updateOutput();
  }

  sel2.onchange = function update() {
    switch (sel2.value) {
      case ('No Style'):
        parser.style = new Style();
        break;
      case ("Memo Style"):
        parser.style = new MemoStyle();
        break;
      case ("Script Style"):
        parser.style = new ScriptStyle();
        break;
      case ("BBScript Style"):
        parser.style = new BBScriptStyle();
        break;
      case ("PM Style"):
        parser.style = new PMStyle();
        break;
      default:
        parser.style = new MemoStyle();

    }
    updateOutput();
  }

}
