import { LoginForm } from "../../components/Forms/LoginForm";
import { LogoIcon } from "../../components/Icons/LogoIcon";

import styles from './styles.module.scss';

export function LoginPage() {
   return (
      <section className={styles.page}>
         <LogoIcon className={styles.logoIcon} />
         <LoginForm />
      </section>
   );
}