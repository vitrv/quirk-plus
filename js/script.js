// input -> [Base,Style] -> output

/* TODO:
   -Bootstrap/colorful ui
   -preset json parser
   -preset editor and serializer/loader
   -dynamic tab for preset editor
   -label input fields for commands, tags and tag color, and make them more user friendly
   -tool for formatting walls
*/


var parser = loadparser();


function importConfig(text)
{
  console.log(text);
}

function exportConfig()
{
  var textInput = JSON.stringify(parser.library);

  var element = document.createElement('a');
  element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
  element.setAttribute('download', 'library.txt');
  document.body.appendChild(element);
  element.click();
}

function status_show() {

  var vis = document.getElementById("stat").style.display;

  if(vis == "none") document.getElementById("stat").style.display = "block";
  else document.getElementById("stat").style.display = "none";;
}


function updateOutput() {
  var textbox = document.getElementById("text");
  document.getElementById("output").innerHTML = parser.transform(textbox.value);

  document.getElementById("onmsg").innerHTML = online_msg(parser.config, parser.context);
  document.getElementById("offmsg").innerHTML = offline_msg(parser.config, parser.context);
  document.getElementById("onidle").innerHTML = idle_msg(parser.config, parser.context);
  document.getElementById("offidle").innerHTML = offidle_msg(parser.config, parser.context);
  document.getElementById("pest").innerHTML = req_pest(parser.config, parser.context);
  document.getElementById("troll").innerHTML = req_troll(parser.config, parser.context);
  document.getElementById("ceasepest").innerHTML = cease_pest(parser.config, parser.context);
  document.getElementById("ceasetroll").innerHTML = cease_troll(parser.config, parser.context);
  document.getElementById("accept").innerHTML = accept_msg(parser.config, parser.context);
  document.getElementById("block").innerHTML = block_msg(parser.config, parser.context);
  document.getElementById("unblock").innerHTML = unblock_msg(parser.config, parser.context);
  document.getElementById("img").innerHTML = share_img(parser.config, parser.context);
}


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
  var sc = document.getElementById("sc");
  var rel = document.getElementById("reload");
  var im = document.getElementById("import");
  var ex = document.getElementById("export");


  for (var x in parser.library) {
    sel.options[sel.options.length] = new Option(parser.library[x].name, parser.library[x].name);
  }

  let styles = ['No Style', 'Memo Style', 'Script Style', 'BBScript Style',
  "BBMemo Style", 'PM Style', 'PM Strong Style', 'Discord Style', 'Block Style',
  "PMFreeform Style"]

  for (var s in styles) {
    sel2.options[sel2.options.length] = new Option(styles[s], styles[s]);
  }

  im.oninput = function i() {
    this.files[0].text().then( function(text) {importConfig(text);});
  }

  ex.onclick = function e() {
    exportConfig();
  }


  textbox.oninput = function parse() {
    updateOutput();
  }

  rel.onclick = function reload() {
    parser.context.tag = tag.value;
    parser.context.hex = hex.value;
    parser.context.com = com.value;
    parser.context.sc = sc.value;
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

  sc.oninput = function update() {
    parser.context.sc = sc.value;
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
      case ("Discord Style"):
        parser.style = new DiscordStyle();
        break;
      case ("BBMemo Style"):
        parser.style = new BBMemoStyle();
        break;
      case ("PM Strong Style"):
        parser.style = new PMStrongStyle();
        break;
      case ("Block Style"):
        parser.style = new BlockStyle();
        break;
      case ("PMFreeform Style"):
        parser.style = new PMFreeformStyle();
        break;
      default:
        parser.style = new MemoStyle();

    }
    updateOutput();
  }

}
