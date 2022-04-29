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

/*
Basic Style for logs, with acronym and no bbcode
*/
class MemoStyle extends Style {
  constructor() {
    super();

  }
  transform(line, b, context){
    return b.acronym + ": " + line;
  }
}

/*
Basic style for logs, with full name and no bbcode
*/
class ScriptStyle extends Style {
  constructor() {
    super();

  }
  transform(line, b, context){
    return b.name + ": " + line;
  }
}

/*
Style with full name and color, intended for use as spoken dialogue in paras
*/
class BBScriptStyle extends Style {
  constructor() {
    super();

  }

  stylize(lineArr, config, context){

    let coltag1 = "[color=#"+ config.hex + "]";
    let coltag2 = " [/color]";

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

/*
Style with acronym and color, intended for use as typed dialogue in paras
*/
class BBMemoStyle extends Style {
  constructor() {
    super();

  }

  stylize(lineArr, config, context){

    let coltag1 = "[color=#"+ config.hex + "]";
    let coltag2 = " [/color]";

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
    return b.acronym + ": " + line;
  }
}


/*
Spoilerized pms with tags
*/
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

/*
Unspoilerized pms with tags on every line
*/
class PMStrongStyle extends Style {
  constructor() {
    super();

  }
  stylize(lineArr, config, context){

    let lbracket = "[color=#000000][[/color]";
    let rbracket = "[color=#000000]][/color]";
    let tag = "[color=#" + context.hex + "]" + context.tag  + "[/color]";


    lineArr.forEach((item, i) => {

    lineArr[i] = lineArr[i] + " " + lbracket + tag + rbracket;
    if(i != lineArr.length-1) {
        lineArr[i] = lineArr[i] + '[br]';
    }
    lineArr[i] = this.transform(lineArr[i], config, context);
    });

    return lineArr;

  }
  transform(line, b, context){
    return b.acronym + ": " + line;
  }
}

/*
Unstyled written dialog between code fences, intended for use on discord
*/
class DiscordStyle extends Style {
  constructor() {
    super();

  }
  transform(line, b, context){
    return "`" + b.acronym + ": " + line + "`";
  }
}

/*
Format multiple lines as a single post, intended for parp memos, to allow written
dialogue to be posted all at once with no risk of interruption
*/
class BlockStyle extends Style {
  constructor() {
    super();

  }

  stylize(lineArr, config, context){

    lineArr.forEach((item, i) => {

      if(i != 0)
      {
        lineArr[i] = config.acronym + ": "  + lineArr[i];
      }
      if(i != lineArr.length-1)
      {
        lineArr[i] = lineArr[i] + '[br]';
      }

      lineArr[i] = this.transform(lineArr[i], config, context);
    });
    return lineArr;

  }

  transform(line, b, context){
    return line;
  }
}


/*
PMs that take code for tags instead of a color and handle
*/
class PMFreeformStyle extends Style {
  constructor() {
    super();

  }
  stylize(lineArr, config, context){

    let tag = context.hex;



    lineArr.forEach((item, i) => {
      if(i == 0) {
        lineArr[i] = tag +  " " + '[SPOILER]' + lineArr[i];
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
