async function antiOptimizeAsync(task) {
  const timeStart = new Date();
  const result = await task();

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), 11000 - (new Date() - timeStart));
  });
}