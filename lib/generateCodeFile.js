import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';
import chalk from 'chalk';

export default function generateCodeFile(code, language) {
    return new Promise((resolve, reject) => {
        // console.log(language, '\n', code, '\n')
        if (!code || !language) {
            reject('Langugage or Code is not provided');
            return;
        }
        const extension = language.extension;
        const unqiueId = nanoid();
        const fileName = `${unqiueId}.${extension}`;
        const filePath = path.join(path.resolve(), `/temp_codes/${fileName}`);
        fs.writeFile(filePath, code,(err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(filePath);
            }
        })
    });
}

// generateCodeFile('print("hello world")', { extension: 'py' }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(chalk.red(err.message));
// })