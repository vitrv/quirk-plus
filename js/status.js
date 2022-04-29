var color_black = "[color=#000000]";
var close_tag = "[/color]"

var l_bracket = color_black + "[" + close_tag;
var r_bracket = color_black + "]" + close_tag;

var color_tag;
var context_tag;
var handle;
var acro;
var user;
var context_acro;
var context_handle;
var user2;


function msg_comp(config, context)
{
  color_tag = "[color=#" + config.hex + "]";
  context_tag = "[color=#" + context.hex + "]";
  handle = color_tag + config.handle + close_tag;
  context_handle = context_tag + context.sc + close_tag;
  acro = color_tag + config.acronym + close_tag;
  context_acro = context_tag + context.tag + close_tag;
  user = handle + " " + l_bracket + acro + r_bracket;
  user2 = context_handle + " " + l_bracket + context_acro + r_bracket;
}

function online_msg(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black + " is now online! --" + close_tag;

  if(context.com != "")
  res = context.com + " " + res;

  document.getElementById("onmsg_label").innerHTML = `-- ${config.handle} [${config.acronym}] is now online! --`;

  return res;

}

function offline_msg(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black + " is now offline! --" + close_tag;

  if(context.com != "")
  res = context.com + " " + res;
  document.getElementById("offmsg_label").innerHTML = `-- ${config.handle} [${config.acronym}] is now offline! --`;

  return res;
}

function idle_msg(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black + " is now idle! --" + close_tag;

  if(context.com != "")
  res = context.com + " " + res;
  document.getElementById("onidle_label").innerHTML = `-- ${config.handle} [${config.acronym}] is now idle! --`;

  return res;
}

function offidle_msg(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black + " is no longer idle! --" + close_tag;
  document.getElementById("offidle_label").innerHTML = `-- ${config.handle} [${config.acronym}] is no longer idle! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}

function req_pest(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has requested to pester " + close_tag + user2 +
  color_black + "!  --" + close_tag;

  document.getElementById("pest_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  is requesting to pester ${context.sc} [${context.tag}]! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}

function req_troll(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has requested to troll " + close_tag + user2 +
  color_black + "!  --" + close_tag;

  document.getElementById("troll_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  is requesting to troll ${context.sc} [${context.tag}]! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}

function cease_pest(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has ceased pestering " + close_tag + user2 +
  color_black + "!  --" + close_tag;

  document.getElementById("ceasepest_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  has ceased pestering ${context.sc} [${context.tag}]! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}

function cease_troll(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has ceased trolling " + close_tag + user2 +
  color_black + "!  --" + close_tag;

  document.getElementById("ceasetroll_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  has ceased trolling ${context.sc} [${context.tag}]! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}

function accept_msg(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has accepted " + close_tag + user2 +
  color_black + "'s request!  --" + close_tag;

  document.getElementById("accept_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  has accepted ${context.sc} [${context.tag}]'s request! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}

function block_msg(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has blocked " + close_tag + user2 +
  color_black + "!  --" + close_tag;

  if(context.com != "")
  res = context.com + " " + res;

  document.getElementById("block_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  has blocked ${context.sc} [${context.tag}]! --`;

  return res;
}

function unblock_msg(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has unblocked " + close_tag + user2 +
  color_black + "!  --" + close_tag;

  document.getElementById("unblock_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  has unblocked ${context.sc} [${context.tag}]! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}

function share_img(config, context){
  msg_comp(config, context);
  var res = color_black + "-- " + close_tag + user + color_black +
  " has shared an image: \"" + context.sc + "\"!  --" + close_tag;

  document.getElementById("img_label").innerHTML = `-- ${config.handle} [${config.acronym}] \
  has shared an image: ${context.sc}! --`;

  if(context.com != "")
  res = context.com + " " + res;

  return res;
}


function w3Copy_stat(id) {
  /* Get the text field */
  var copyText = document.getElementById(id);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
}
