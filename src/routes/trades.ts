
const express = require('express');
const router = express.Router();
const database = require('../db');
const Trades = require('../models/database');


//Get All Trades


router.get('/', async (req: { params: { id: String; }; }, res: { json: (arg0: String) => void; status: (arg0: number) => { (): Function; new(): Object; json: { (arg0: { message: String; }): void; new(): Object; }; }; }) => {

    try {
        /** 
        const trades = await Model.findAll();
        console.log(trades);
        res.status(200).json(trades);*/
        // set updatedAt, createdAt false
        const trades = await Trades.findAll({
            attributes: {
                exclude: ['updatedAt', 'createdAt', 'timestamps']
            }
        });
        res.status(200).json(trades);
        
        

    }
    
    catch(error) {
       console.log(error);
        res.status(500).json({message: "Something went wrong! :("});
    }

});

// exporting to prevent scope errors
export { router as tradesRouter };
module.exports = router;
