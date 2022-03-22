// @ts-ignore
const express = require('express');
// @ts-ignore
const router = express.Router();

// @ts-ignore
const Model = require('../models/database');

//Get by ID Method
router.get('/', async (req: { params: { id: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: any; }): void; new(): any; }; }; }, next: any) => {

    try {
        const data = await Model.find().sort({_id: -1});
        res.json(data);

    }
    catch(error) {
        res.status(500).json({message: error});
    }



});




module.exports = router;