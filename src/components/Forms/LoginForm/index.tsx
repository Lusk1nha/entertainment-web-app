import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormProps } from "../../../shared/props/ILoginFormProps";
import { Link } from 'react-router-dom'

import styles from '../../../styles/form.module.scss';

export function LoginForm() {
   const { register, control, handleSubmit, formState: { errors } } = useForm<ILoginFormProps>({
      defaultValues: {
         'email': '',
         'password': ''
      },
      mode: 'all',
      reValidateMode: 'onSubmit'
   });

   const handleOnSubmit: SubmitHandler<ILoginFormProps> = data => {
      console.log(data);
      return data
   }

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

   return (
      <form onSubmit={handleSubmit(handleOnSubmit)} className={`${styles.container} ${styles.login}`}>
         <h2 className={styles.title}>Login</h2>

         <fieldset className={styles.fieldsSetContainer}>
         <div className={`${styles.fieldContainer} ${errors.email && styles.error}`}>
               <input {...emailRegister} type={'mail'} placeholder={"Email address"} />
               {errors.email && <h4 className={styles.fieldError}>{errors.email.message}</h4> }
            </div>

            <div className={`${styles.fieldContainer} ${errors.password && styles.error}`}>
               <input {...passwordRegister} type={'password'} placeholder={'Password'} />
               {errors.password && <h4 className={styles.fieldError}>{errors.password.message}</h4> }
            </div>
         </fieldset>

         <button type={"submit"} className={styles.submitButton}>
            Login to your account
         </button>

         <p className={styles.redirectMessage}>
            Don’t have an account?
            <Link className={styles.redirectLink} to={'/signUp'}>Sign Up</Link>
         </p>
      </form>
   );
}