const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req: String, res: { json: (arg0: String) => void; status: (arg0: number) => { (): Function; new(): Object; json: { (arg0: { message: String; }): void; new(): Object; }; }; }) => {
    
    res.status(200).json({message: "hi there! this is the back-end =)"});
    
});

// exporting to prevent scope errors
export { router as indexRouter };

module.exports = router;

