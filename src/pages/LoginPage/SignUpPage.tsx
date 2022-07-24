import { SignUpForm } from "../../components/Forms/SignUpForm";
import { LogoIcon } from "../../components/Icons/LogoIcon";

import styles from './styles.module.scss';

export function SignUpPage() {
   return (
      <section className={styles.page}>
         <LogoIcon className={styles.logoIcon} />
         <SignUpForm />
      </section>
   );
}