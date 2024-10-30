import { useState } from "react";
import styles from './app.module.css'

import Form from "./components/form"
import Result from "./components/result";
import Header from "./components/header";


function App() {
  const [imc, setImc] = useState<string | null>(null);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Form onCalculate={setImc} />
        <Result imc={imc} />
      </div>
    </>
  )
}

export default App
