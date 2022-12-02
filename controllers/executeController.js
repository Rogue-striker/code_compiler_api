import chalk from "chalk";
import executeCode  from "../lib/executeCode.js";
import generateCodeFile from "../lib/generateCodeFile.js";
import fs from 'fs'

export const postExecute = async function postExecute(req, res) {
    try{
        const { language, code, stdin } = req.body;
        const filePath = await generateCodeFile(code, language);
        console.time(chalk.cyan("execution time"));
        const { stdout, stderr, error } = await executeCode(language,filePath, stdin);
        console.log(chalk.magenta(`executed ${language.language} code successfully`));
        console.timeEnd(chalk.cyan("execution time"));
        fs.unlinkSync(filePath);
        res.json({ stdout, stderr, error });
    }
    catch(err){
        res.json({ error: err.message, fail: "true" });
    }
}
