const express = require('express');
const router = express.Router();
const Model = require('../models/database');

//Get All Trades

type message = {
    error: string
}

router.get('/', async (req: { params: { id: String; }; }, res: { json: (arg0: String) => void; status: (arg0: number) => { (): Function; new(): Object; json: { (arg0: { message: any; }): void; new(): Object; }; }; }, next: String) => {

    try {
        const data = await Model.find().sort({_id: -1});
        res.json(data);

    }
    catch(error) {
        res.status(500).json({message: error});
    }



});

// exporting to prevent scope errors
export { router as tradesRouter };
module.exports = router;
