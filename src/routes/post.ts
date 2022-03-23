// @ts-ignore
const express = require('express');
// @ts-ignore
const router = express.Router();
// @ts-ignore
const Model = require('../models/database');



router.post('/', async function(req: { body: { time: any; instrument: String; rate: Number; type: String; amount: Number;  }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: any; }): void; new(): any; }; }; }, next: any) {

    let Rate = req.body.rate.toFixed(3);



    const data = new Model({
        time: new Date(),
        instrument: req.body.instrument,
        rate: Rate,
        type: req.body.type,
        amount: req.body.amount
    });

    try {

        const dataToSave = await data.save();
        res.status(200).json(dataToSave);

    }
    catch(error) {
        console.log(error);
        res.status(500)
            .json({message: error})
    }


});



module.exports = router;