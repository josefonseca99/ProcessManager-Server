import {Router} from 'express';
import {dataController} from '../controllers/dataController';

class DataRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config(); 
    }

    config(): void{
        this.router.get('/processNumber=:processNumber/flag=:flag',dataController.data);       
    }
}

const dataRoutes = new DataRoutes();
export default dataRoutes.router;