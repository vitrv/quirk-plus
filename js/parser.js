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
      let t = this.config.case.transform(i, item);
      lineArr[i] = this.config.transform(t, this.context);

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
    this.case = new Caps();
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
