import { useState } from "react";
import styles from './form.module.css';

interface FormProps {
    onCalculate: (imc: string) => void;
}

const Form: React.FC<FormProps> = ({ onCalculate }) => {
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);

    const handleCalculate = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            onCalculate(imc);
        }
    };

    return (
        <>
            <input
                className={styles.input}
                type="number"
                placeholder="Altura em cm"
                onChange={(e) => setHeight(Number(e.target.value))}
            />
            <input
                className={styles.input}
                type="number"
                placeholder="Peso em kg"
                onChange={(e) => setWeight(Number(e.target.value))}
            />
            <button onClick={handleCalculate} className={styles.button}>Calcular</button>
        </>
    )
}

export default Form;