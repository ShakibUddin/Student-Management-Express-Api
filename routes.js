const router = require('express').Router();
const {getAllStudents,addStudent,getSpecificStudent,replaceSpecificStudent,deleteSpecificStudent,updateSpecificStudent} = require('./controllers');

router.post('/',addStudent);
router.get('/all',getAllStudents);
router.get('/:id',getSpecificStudent);
router.put('/:id',replaceSpecificStudent);
router.delete('/:id',deleteSpecificStudent);
router.patch('/:id',updateSpecificStudent);


module.exports = router;