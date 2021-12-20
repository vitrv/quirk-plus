
class Caps {
  constructor() {
  }
  transform(n, line){
    return line;
  }
}

class AllCaps extends Caps {
  constructor() {
    super();
  }
  transform(n, line) {
    return line.toUpperCase();
  }
}

class AltCaps extends Caps {
  constructor() {
    super();
  }

  transform(n, line) {
    if(n%2 == 1) return line.toUpperCase();
    else return line;
  }
}

class TitleCaps extends Caps {
  constructor() {
    super();
  }
  transform(n, line) {
    let words = line.split(" ");
    words.forEach((item, i) => {
      words[i] = item.substr(0,1).toUpperCase() + item.substr(1);
    });
    return words.join(" ");
  }
}

class RollCaps extends Caps {
  constructor() {
    super();
  }

  transform(n, line) {
    let res = ""
    for (var i = 0; i < line.length; i++) {
      if(i%2==1) res += line.charAt(i).toUpperCase();
      else res += line.charAt(i);
    }
    return res;
  }
}
class InvCaps extends Caps {
  constructor() {
    super();
  }

  transform(n, line) {
    let words = line.split(" ");
    words.forEach((item, i) => {
      words[i] = item.substr(0,1)+ item.substr(1).toUpperCase();
    });
    return words.join(" ");
  }
}