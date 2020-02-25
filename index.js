const path = require("path");

const getGitInfo = require("./lib/git");
const getProjectInfo = require("./lib/project");

const { helpText, output } = require("./lib/helper");

const [, , ...args] = process.argv;

if (args.includes("--help")) {
  console.log(helpText);
  process.exit();
}

const folderToCheck = path.join(process.env.PWD, args[0] || "");

async function main(folder) {
  const [projectInfo, gitInfo] = await Promise.all([
    getProjectInfo(folder),
    getGitInfo(folder)
  ]);

  return { projectInfo, gitInfo };
}

main(folderToCheck)
  .then(output)
  .then(console.log)
  .catch((e) => {
    console.log("This folder is not a project");
    if (args.includes("--debug")) {
      console.log(e);
    }
  })
  .finally(() => {
    process.exit();
  });
