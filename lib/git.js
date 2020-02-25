const path = require("path");
const fs = require("fs").promises;
const ini = require("ini");

// It would be fine to use something like https://www.npmjs.com/package/ini
// const gitRemoteUrlFromConfig = fileContent => {
//   const sections = fileContent.split("\n");
//   const urls = sections
//     .filter(row => row.includes("\turl = "))
//     .map(urlRow => {
//       const urlStart = urlRow.indexOf("http");
//       return urlRow.slice(urlStart);
//     });
//   return urls;
// };

let gitRemoteUrlFromConfig = obj => {
  return Object.values(obj)
    .map(key => key.url)
    .filter(ele => ele)
    .map(url => url.replace("git@github.com:", "https://github.com/") || url);
};

module.exports = async folder => {
  const gitInfo = {};
  const file = path.join(folder, ".git", "config");
  try {
    await fs.access(file);
    const fileContent = await fs.readFile(file, "utf-8");
    let gitConfigToObj = ini.parse(fileContent);
    gitInfo.url = gitRemoteUrlFromConfig(gitConfigToObj);
  } catch {}

  return gitInfo;
};
