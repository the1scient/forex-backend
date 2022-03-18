// @ts-ignore
const express = require('express');
// @ts-ignore
const router = express.Router();

const Model = require('../models/database');

//Get by ID Method
router.get('/:id', async (req: { params: { id: any; }; }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: any; }): void; new(): any; }; }; }, next: any) => {

    try {
        const data = await Model.findById(req.params.id);
        res.json(data);

    }
    catch(error) {
        res.status(500).json({message: error});
    }



});




module.exports = router;