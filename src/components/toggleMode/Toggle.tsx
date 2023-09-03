import { Button, useColorMode } from "@chakra-ui/react";
import styles from "./darkModeToggle.module.css";

function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <div className={styles.container} onClick={toggleColorMode}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div
          className={styles.ball}
          style={colorMode === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
  );
}

export default Toggle;
