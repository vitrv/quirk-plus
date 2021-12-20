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

  let kanaya = new Base("KANAYA", "GA", "008141")
  kanaya.case = new TitleCaps();

  let karkat = new Base("KARKAT", "CG", "626262")
  karkat.case = new AllCaps();

  let gamzee = new Base("GAMZEE", "TC", "2b0057")
  gamzee.case = new AltCaps();

  let gamzee2 = new Base("GAMZEE", "TC", "2b0057")
  gamzee2.case = new RollCaps();

  let tavros = new Base("TAVROS", "AT", "a15000")
  tavros.case = new InvCaps();

  p.config = etilea;

  p.library.push(etilea);
  p.library.push(tastri);
  p.library.push(tayzul);
  p.library.push(zelter);
  p.library.push(remael);
  p.library.push(korjax);

  p.library.push(kanaya);
  p.library.push(karkat);
  p.library.push(gamzee);
  p.library.push(gamzee2);
  p.library.push(tavros);

  return p;
}
