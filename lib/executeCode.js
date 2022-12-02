import { exec } from 'child_process'
import chalk from 'chalk';
import fs from 'fs'
export default function executeCode( language, filePath, stdinput ) {
    return new Promise((resolve, reject) => {
        const child = exec(`${language.language} ${filePath}`, (error, stdout, stderr) => {
            if (stderr) {
                resolve({ stdout, stderr })
            }
            else if (error) {
                reject(error);
                return;
            }
            resolve({ stdout, stderr });
        });
        child.stdin.on('error', function (data) {
            console.log(chalk.red(data));
        });
        if (stdinput) {
            child.stdin.write(stdinput);
            child.stdin.end();
        }
        
    });
}

// executeCode({ language: { language: 'python3' }, fileName: 'jLeKkdxA66V-DSaY-LIZU.py', stdinput: '9' }).then((data) => {
//     console.log(data)
// }
// ).catch((err) => {
//     console.log(err.message)
// }
// )

