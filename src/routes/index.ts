// @ts-ignore
const express = require('express');
// @ts-ignore
const router = express.Router();

/* GET home page. */
router.get('/', function(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }, next: any) {
    res.status(403).json({message: "hi there! this is the back-end =)"});



});

module.exports = router;