import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// //1....if validateform passes then onSubmit
// const validateForm=(values)=>{
// const errors={};
// console.log("validateForm",values);
// //email min 5
// if(values.email.length<5){
//   errors.email="please provide longer email";
// }
// else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
// errors.email="Invalid email address"
// }
// //email pattern
// //password lenth 8 and 12
// if(values.password.length<8){
//   errors.password="please provide longer password";
// }
// else if(values.password.length>12){
// errors.password="Invalid provide shorter password"
// }
// //strong password task
// console.log(errors);
// return errors;
// }
// function BasicForm(){
//   const formik=useFormik({
//     initialValues:{email:"",password:""},
//     validate:validateForm,
//     onsubmit:(values)=>{
//       console.log("onSubmit",values);
//     },
//   });
//   return(
//     <form onSubmit={formik.handleSubmit}>
//         <input
//         id="email"
//         name="email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         type="email"
//         placeholder="Enter your email" 
//         />
//         {formik.touched.email && formik.errors.email? formik.errors.email:""}
//         <input
//         id="password"
//         name="password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         type="password"
//         placeholder="Enter your password" 
//         />
//         {formik.touched.password && formik.errors.password? formik.errors.password:""}
//         <button type="submit">Submit</button>
//     </form>
//   );
//   }
//2....with destructuring simplified
//2.1
//if validateform passes then onSubmit
// const validateForm=(values)=>{
//   const errors={};
//   console.log("validateForm",values);
//   //email min 5
//   if(values.email.length<5){
//     errors.email="please provide longer email";
//   }
//   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//   errors.email="Invalid email address"
//   }
//   //email pattern
//   //password lenth 8 and 12
//   if(values.password.length<8){
//     errors.password="please provide longer password";
//   }
//   else if(values.password.length>12){
//   errors.password="Invalid provide shorter password"
//   }
//   //strong password task
//   console.log(errors);
//   return errors;
//   }
//2.2 using yup
const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a bigger email😊")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched")
    .required("Why not fill email😊"),
  password: yup
    .string()
    .min(8, "Need a bigger password 😊")
    .max(12, "Too much password😂")
    .required("Why not fill password😊")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
export function BasicForm() {

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: { email: "", password: "" },
    //validate:validateForm,
    validationSchema: formValidationSchema,
    onsubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        placeholder="Enter your email" />
      {touched.email && errors.email ? errors.email : ""}
      <br />
      <input
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="Enter your password" />
      {touched.password && errors.password ? errors.password : ""}
      <br />
      <button type="submit">Submit</button>
    </form>
  );

}
