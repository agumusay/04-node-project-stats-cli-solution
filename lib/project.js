const path = require("path");
const fs = require("fs").promises;

module.exports = async (folder) => {
  const packageJsonPath = path.join(folder, "package.json");

  await fs.access(packageJsonPath);

  let packageJsonContent = await fs.readFile(packageJsonPath, "utf-8");
  packageJsonContent = JSON.parse(packageJsonContent);
  return packageJsonContent;
};
