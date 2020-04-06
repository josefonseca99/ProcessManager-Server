import {Request, Response} from 'express';
import {compareByCPUTime, compareByMemUsage} from '../utils/listComparers'
import {getProcessData} from '../utils/processListing'


class DataController{
    
  public async data(req: Request,res:Response) {         

    var processList = await getProcessData();

    var finalList = parseInt(req.params.flag) ? 
    processList.sort(compareByCPUTime).slice(0,parseInt(req.params.processNumber)) :
    processList.sort(compareByMemUsage).slice(0,parseInt(req.params.processNumber))                
        
        res.json(finalList)
    }

    public create(req: Request, res: Response){
    }
}

export const dataController = new DataController();