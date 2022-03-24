const express = require('express');
const router = express.Router();
const Model = require('../models/database');

//Get All
router.get('/', async (req: { params: { id: String; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): Object; json: { (arg0: { message: any; }): void; new(): any; }; }; }, next: any) => {

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
