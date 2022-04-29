function loadparser()
{
  let p = new Parser();

  p.style = new MemoStyle();

  let etilea = new Base("ETILEA", "vicariousTelegnosis", "VT", "088880");
  etilea.transformations.push([/o/g, "O"]);
  etilea.format = ">>> ${t} <<<";

  let tastri = new Base("TASTRI", "ekisticVellum", "EV", "000000");
  tastri.transformations.push([/i/g, ";"]);
  tastri.transformations.push([/I/g, ";"]);

  let tayzul = new Base("TAYZUL", "placatedTempests", "PT", "550069");
  tayzul.transformations.push([/o/g, "@"]);
  tayzul.transformations.push([/O/g, "@"]);

  let zelter = new Base("ZELTER", "jauntyCyclonic", "JC", "51119f");
  zelter.transformations.push([/n/g, "n°"]);
  zelter.transformations.push([/N/g, "N°"]);
  zelter.format = "{ ${t} }";

  let remael = new Base("REMAEL", "grievousIsotope", "GI", "680088");
  remael.transformations.push([/E/g, "Σ"]);
  remael.transformations.push([/e/g, "ε"]);

  let korjax = new Base("KORJAX", "ganymedesCrucible", "GC", "929292");
  korjax.transformations.push([/o/g, "*"]);
  korjax.transformations.push([/O/g, "*"]);

  let ammola = new Base("AMMOLA", "assuagedWindsurf", "AW", "6f338a");
  ammola.transformations.push([/a/g, "4"]);
  ammola.transformations.push([/A/g, "4"]);

  let nolvei = new Base("NOLVEI", "sisyphusImpasse", "SI", "006a6a");
  nolvei.transformations.push([/L/g, "LL"]);
  nolvei.transformations.push([/l/g, "LL"]);

  let sionna = new Base("SIONNA", "charmeuseEternity", "CE", "0a63a0");
  sionna.transformations.push([/C/g, "C*"]);
  sionna.transformations.push([/c/g, "C*"]);
  sionna.format = "[i] ${t} [/i]";

  let arlyne = new Base("ARLYNE", "geodesicAcanthism", "GA", "416600");
  arlyne.transformations.push([/E/g, "ミ"]);
  arlyne.transformations.push([/e/g, "ミ"]);

  let kalias = new Base("KALIAS", "visceralNeology", "VN", "00508b");
  kalias.transformations.push([/C/g, "Ȼ"]);
  kalias.transformations.push([/c/g, "ȼ"]);
  kalias.transformations.push([/0/g, "O"]);
  kalias.transformations.push([/1/g, "l"]);
  kalias.case = new TitleCaps();

  let amyria = new Base("AMYRIA", "novellaVenomously", "NV", "00508b");
  amyria.transformations.push([/C/g, "Ȼ"]);
  amyria.transformations.push([/c/g, "ȼ"]);
  amyria.transformations.push([/-/g, "—"]);

  let skylus = new Base("SKYLUS", "tantalusClepsydra", "TC", "a15000");
  skylus.transformations.push([/Y/g, "¥"]);
  skylus.transformations.push([/y/g, "¥"]);
  skylus.format = "${t}...";

  let nerais = new Base("NERAIS", "decayedGlimmer", "DG", "8c2000");
  nerais.transformations.push([/i/g, "ii"]);
  nerais.transformations.push([/I/g, "II"]);
  nerais.format = ":: ${t} ::";

  let siabza = new Base("SIABZA", "epochMalediction", "EM", "bfb300");
  siabza.transformations.push([/y/g, "(y)"]);
  siabza.transformations.push([/Y/g, "(Y)"]);

  let lepioz = new Base("LEPIOZ", "samsaraOphiuran", "SO", "1d5400");
  lepioz.case = new Lepioz();

  let cezari = new Base("CEZARI", "ancillaryTravesty", "AT", "2b0057");
  cezari.case = new AltCaps();

  let soira = new Base("SOIRA", "visceralNeology", "VN", "00508b");
  let tiff = new Base("TIFF", "foxtrotCharmante", "FC", "d23162");
  let nora = new Base("NORA", "radiantAmbivalence", "RA", "0c83e6");

  p.config = etilea;

  p.library.push(etilea);
  p.library.push(tastri);
  p.library.push(tayzul);
  p.library.push(zelter);
  p.library.push(remael);
  p.library.push(korjax);
  p.library.push(ammola);
  p.library.push(nolvei);
  p.library.push(sionna);
  p.library.push(arlyne);
  p.library.push(kalias);
  p.library.push(amyria);
  p.library.push(skylus);
  p.library.push(nerais);
  p.library.push(lepioz);
  p.library.push(siabza);
  p.library.push(cezari);
  p.library.push(soira);
  p.library.push(tiff);
  p.library.push(nora);

  return p;
}
