function findMatching (str, name) {
  return str.filter( (driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
}