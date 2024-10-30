import styles from './result.module.css'

interface ResultProps {
    imc: string | null;
}

const getImcInfo = (imc: number | null) => {
    if (imc === null) return { className: '', label: 'IMC inválido' };
    if (imc < 18.5) return { className: styles.underweight, label: 'Abaixo do peso' };
    if (imc >= 18.5 && imc <= 24.9) return { className: styles.normalWeight, label: 'Peso ideal' };
    if (imc >= 25 && imc <= 29.9) return { className: styles.overweight, label: 'Sobrepeso' };
    if (imc >= 30 && imc <= 34.9) return { className: styles.obesity1, label: 'Obesidade grau I' };
    if (imc >= 35 && imc <= 39.9) return { className: styles.obesity2, label: 'Obesidade grau II' };
    return { className: styles.obesity3, label: 'Obesidade grau III' };
};

const Result: React.FC<ResultProps> = ({ imc }) => {
    const imcValue = imc ? parseFloat(imc) : null;
    const { className, label } = getImcInfo(imcValue);

    return (
        <div className={`${styles.resultContainer} ${className}`}>
            <p>{label}</p>
            <p>{imc}</p>
        </div>
    );
};

export default Result;
