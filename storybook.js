import fs from "fs";
import path from "path";

// This script reads all the stories in the components directory and writes them to a JSON file,
// which will be used by a custom Storybook implementation inside `routes/storybook` folder.

const componentsDir = "./src/components";
const outputDir = "./src/routes/storybook";

let result = {};

function readFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      readFiles(filePath);
    } else if (filePath.endsWith("stories.tsx")) {
      const moduleName = file.replace(".stories.tsx", "");
      result[moduleName] = {
        path: filePath.replace("src/", "../../"),
        stories: [],
      };
      const content = fs.readFileSync(filePath, "utf8");
      const regex = /export function (\w+)/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const funcName = match[1];
        result[moduleName].stories.push(funcName);
      }
    }
  });
}

readFiles(componentsDir);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, "stories.json"),
  JSON.stringify(result, null, 2)
);
