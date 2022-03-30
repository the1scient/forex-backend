const express = require('express');
const router = express.Router();
const Trades = require('../models/database');


type postDataProps = {
    time: JSON,
    instrument: String,
    rate: Number,
    type: String,
    amount: Number
}

  
router.post('/', async (req: { body: postDataProps }, res: { json: (arg0: String) => void; status: (arg0: number) => { (): Function; new(): Object; json: { (arg0: { message: String; }): void; new(): Object; }; }; }, next: any) => {

    if(!req.body.instrument || req.body.rate || req.body.type || req.body.amount) {
    }

    if(req.body.rate == null || req.body.rate == undefined || req.body.rate < 0 || req.body.rate == NaN) {
        req.body.rate = 1.321;
        alert('Rate is not valid. Redirecting to home page.');
        window.location.href='http://localhost:3000';
    }

    /** 
    const data = new Model({
        time: new Date(),
        instrument: req.body.instrument,
        rate: req.body.rate.toFixed(3),
        type: req.body.type,
        amount: req.body.amount
    });*/
    // create a postgres post data object
    const data = new Trades({
        timestamp: false,
        createdAt: false,
        exclude: ['updatedAt', 'createdAt', 'timestamps', 'id'],
        time: new Date().toJSON(),
        instrument: req.body.instrument,
        rate: req.body.rate.toFixed(3),
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
            .json({message: "Something went wrong" + error})
    }


});


export { router as postRouter };

module.exports = router;