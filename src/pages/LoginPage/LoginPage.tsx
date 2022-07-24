import { LoginForm } from "../../components/Forms/LoginForm";

import styles from './styles.module.scss';

export function LoginPage() {
   return (
      <section className={styles.page}>
         <LoginForm />
      </section>
   );
}