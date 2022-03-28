const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req: String, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }, next: any) {
    
    res.status(200).json({message: "hi there! this is the back-end =)"});
    
});

// exporting to prevent scope errors
export { router as indexRouter };

module.exports = router;

