function cache(func) {
  let memory = {};
  return function checkCache(...args) {
    let key = JSON.stringify(args);
    if (!(key in memory)) {
      memory[key] = func.apply(null, args);
    }
    return memory[key];
  }
}
