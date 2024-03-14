function uniqueByServerIdSchemaTable(arr) {
  let seen = {};
  return arr.filter((item) => {
    let key = item.serverId + item.schema + item.table;
    return seen.hasOwnProperty(key) ? false : (seen[key] = true);
  });
}