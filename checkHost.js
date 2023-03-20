var respond
if (!location.href.includes(".com")) {
  respond = "Can't Inject";
} else {
  respond = "Can Inject";
}
alert(respond);
