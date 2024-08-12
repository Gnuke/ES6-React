// log.mjs
/*export*/ function log(msg) {
  console.log(msg);
}
/*export*/ function error(msg) {
  console.log(msg);
}
/*export*/ const MIN_VALUE = 100;

export { log, error, MIN_VALUE };