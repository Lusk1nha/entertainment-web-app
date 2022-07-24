import { SignUpForm } from "../../components/Forms/SignUpForm";

import styles from './styles.module.scss';

export function SignUpPage() {
   return (
      <section className={styles.page}>
         <SignUpForm />
      </section>
   );
}