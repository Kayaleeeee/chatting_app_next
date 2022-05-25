import styles from 'components/common/Header/index.module.scss';
import { HTMLAttributes } from 'react';
import { FC } from 'react';

const Header: FC<HTMLAttributes<HTMLHeadElement>> = ({ children }) => {
  return <header className={styles.wrapper}>{children}</header>;
};

export default Header;
