import { useForm, SubmitHandler } from "react-hook-form";
import { ISignUpFormProps } from "../../../shared/props/ISignUpFormProps";
import { Link } from 'react-router-dom'

import styles from '../../../styles/form.module.scss';

export function SignUpForm() {
   const { register, handleSubmit, formState: { errors } } = useForm<ISignUpFormProps, any>({
      defaultValues: {
         'email': '',
         'password': ''
      },
      mode: 'all',
      reValidateMode: 'onSubmit'
   });

   const emailRegister = register("email", {
      required: {
         value: true,
         message: "Can't be empty"
      },
      pattern: {
         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: 'Invalid email address'
      }
   });

   const passwordRegister = register("password", {
      required: {
         value: true,
         message: "Can't be empty"
      }
   });

   const repeatPasswordRegister = register("repeatPassword", {
      required: {
         value: true,
         message: "Can't be empty"
      }
   });

   const handleOnSubmit: SubmitHandler<ISignUpFormProps> = data => {
      console.log(data);
      return data
   }

   return (
      <form onSubmit={handleSubmit(handleOnSubmit)} className={`${styles.container} ${styles.signUp}`}>
         <h2 className={styles.title}>Sign Up</h2>
         <fieldset className={styles.fieldsSetContainer}>
            <div className={`${styles.fieldContainer} ${errors.email && styles.error}`}>
               <input {...emailRegister} type={'mail'} placeholder={'Email address'} />
               {errors.email && <h4 className={styles.fieldError}>{errors.email.message}</h4>}
            </div>

            <div className={`${styles.fieldContainer} ${errors.password && styles.error}`}>
               <input {...passwordRegister} type={'password'} placeholder={'Password'} />
               {errors.password && <h4 className={styles.fieldError}>{errors.password.message}</h4>}
            </div>

            <div className={`${styles.fieldContainer} ${errors.repeatPassword && styles.error}`}>
               <input {...repeatPasswordRegister} type={'password'} placeholder={'Repeat password'} />
               {errors.repeatPassword && <h4 className={styles.fieldError}>{errors.repeatPassword.message}</h4>}
            </div>
         </fieldset>

         <button type={"submit"} className={styles.submitButton}>
            Create an account
         </button>

         <p className={styles.redirectMessage}>
            Already have an account?
            <Link className={styles.redirectLink} to={'/login'}>Login</Link>
         </p>
      </form>
   );
}