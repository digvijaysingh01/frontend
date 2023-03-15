import * as yup from 'yup';

const validationSchema = yup.object().shape({
    groupName   : yup.string().min(2).required('Required*'),
    description : yup.string().min(20).required('Required*'),
    groupImg    : yup.mixed(),
    
    term : yup.array().of(yup.object().shape({
            termName : yup.string().min(2).required('Required*'),
            termDefination : yup.string().min(20).required('Required*'),
    })) 
})

export default validationSchema;