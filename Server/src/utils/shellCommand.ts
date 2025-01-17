import { exec } from 'child_process';

export function execCommand(cmd:any) {
        return new Promise(function (resolve, reject) {
          exec(cmd, (err, stdout, stderr) => {
            if (err) {
              reject(err);
            } else {
              resolve({ stdout, stderr });
            }
          });
        });
      }

