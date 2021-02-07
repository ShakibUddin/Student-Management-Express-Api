const router = require('express').Router();
const {getAllStudents,addStudent,getSpecificStudent,replaceSpecificStudent,deleteSpecificStudent,updateSpecificStudent} = require('./controllers');

router.post('/',addStudent);
router.get('/all',getAllStudents);
router.get('/:studentId',getSpecificStudent);
router.put('/:studentId',replaceSpecificStudent);
router.delete('/:studentId',deleteSpecificStudent);
router.patch('/:studentId',updateSpecificStudent);


module.exports = router;