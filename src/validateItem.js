import * as Yup from 'yup';

export const  ItemSchema = Yup.object().shape({
    title: Yup.string().required('Title is Required'),
    description:Yup.string().required('Description is Required')
  });
  