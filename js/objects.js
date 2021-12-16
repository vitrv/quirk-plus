class Parser {
  constructor() {
    this.config = {};
    this.library = [];
    this.style = {};
    this.context = {
      com: "",
      tag: "",
      hex: "",
    };
  }

  transform(text) {
    let lineArr = text.split("\n")
    let com = "";
    if(this.context.com != "") com = this.context.com + " ";

    lineArr.forEach((item, i) => {
      lineArr[i] = this.config.transform(item, this.context);
    });

    this.style.stylize(lineArr, this.config, this.context);


    return com + lineArr.join("\n");
  }
}


class Base {
  constructor(name, acronym, hex) {
    this.name = name;
    this.acronym = acronym;
    this.hex = hex;
    this.transformations = [];
    this.format = "${t}";
  }


  transform(line, context) {
    let t = line;
    this.transformations.forEach((item, i) => {
      t = t.replace(item[0], item[1]);
    });

    t = this.format.replace(new RegExp('\\${t}', 'g'), t);
    return t;
  }

}

class Style {
  constructor() {

  }
  stylize(lineArr, config, context){
    lineArr.forEach((item, i) => {
      lineArr[i] = this.transform(lineArr[i], config);
    });
    return lineArr;
  }

  transform(line, b, context){
    return line;
  }


}

class MemoStyle extends Style {
  constructor() {
    super();

  }
  transform(line, b, context){
    return b.acronym + ": " + line;
  }
}
class ScriptStyle extends Style {
  constructor() {
    super();

  }
  transform(line, b, context){
    return b.name + ": " + line;
  }
}

class BBScriptStyle extends Style {
  constructor() {
    super();

  }

  stylize(lineArr, config, context){

    let coltag1 = "[color=#"+ config.hex + "]";
    let coltag2 = "[/color]";

    lineArr.forEach((item, i) => {
      lineArr[i] = lineArr[i] + '[br]'
      if(i == lineArr.length-1)
      {
        lineArr[i] =  lineArr[i] + coltag2;
      }


      lineArr[i] = this.transform(lineArr[i], config, context);
    });

    lineArr[0] = coltag1 + lineArr[0];
    return lineArr;

  }

  transform(line, b, context){
    return b.name + ": " + line;
  }
}

class PMStyle extends Style {
  constructor() {
    super();

  }
  stylize(lineArr, config, context){

    let lbracket = "[color=#000000][[/color]";
    let rbracket = "[color=#000000]][/color]";
    let tag = "[color=#" + context.hex + "]" + context.tag  + "[/color]";



    lineArr.forEach((item, i) => {
      if(i == 0) {
        lineArr[i] = lbracket + tag + rbracket + " " +
       '[SPOILER]' +
        lineArr[i];
      }
      if(i == lineArr.length-1)
      {
        lineArr[i] =  lineArr[i] + '[/SPOILER]'
      }
      if(i != lineArr.length-1) {
        lineArr[i] = lineArr[i] + '[br]'
      }

      lineArr[i] = this.transform(lineArr[i], config, context);
    });
    return lineArr;

  }
  transform(line, b, context){
    return b.acronym + ": " + line;
  }
}
