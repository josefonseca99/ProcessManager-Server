import {execCommand} from './shellCommand'
import {strObjReplace} from './stringReplacer'

    export async function getProcessData(){
        let result = []
        let rawTaskList:any = await execCommand('tasklist /v /fo csv')
        let rawuserName:any = await execCommand('echo %username%')
        let username = rawuserName.stdout.replace(/[\r\n]/g,'')
        let formattedList = strObjReplace(rawTaskList.stdout.split("\r\n"))
      
        for(var i=1;i<formattedList.length-1;i++){
          
          var currentline=formattedList[i].split(",")
          var setPriority = currentline[6].includes(username) ? 0 : 1
      
          var obj = {
            'pid':currentline[1],
            'processName':currentline[0],
            'userName':currentline[6],
            'memoryUsage':currentline[4],
            'cpuTime':currentline[7],
            'priority':setPriority
          };
          result.push(obj)      
        }
        return result
      }
