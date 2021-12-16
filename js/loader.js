function loadparser()
{
  let p = new Parser();

  p.style = new MemoStyle();

  let etilea = new Base("ETILEA", "VT", "088880");
  etilea.transformations.push([/o/g, "O"]);
  etilea.format = ">>> ${t} <<<";

  let tastri = new Base("TASTRI", "EV", "000000");
  tastri.transformations.push([/i/g, ";"]);
  tastri.transformations.push([/I/g, ";"]);

  let tayzul = new Base("TAYZUL", "PT", "550069");
  tayzul.transformations.push([/o/g, "@"]);
  tayzul.transformations.push([/O/g, "@"]);

  let zelter = new Base("ZELTER", "JC", "51119f");
  zelter.transformations.push([/n/g, "n°"]);
  zelter.transformations.push([/N/g, "N°"]);
  zelter.format = "{ ${t} }";

  let remael = new Base("REMAEL", "GI", "680088");
  remael.transformations.push([/E/g, "Σ"]);
  remael.transformations.push([/e/g, "ε"]);

  let korjax = new Base("KORJAX", "GC", "969696");
  korjax.transformations.push([/o/g, "*"]);
  korjax.transformations.push([/O/g, "*"]);

  p.config = etilea;

  p.library.push(etilea);
  p.library.push(tastri);
  p.library.push(tayzul);
  p.library.push(zelter);
  p.library.push(remael);
  p.library.push(korjax);

  return p;
}
