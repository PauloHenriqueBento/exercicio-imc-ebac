import styles from './result.module.css'

interface ResultProps {
    imc: string | null;
}

const getColorClass = (imc: number | null) => {
    if (imc === null) return '';
    if (imc < 18.5) return styles.underweight;
    if (imc >= 18.5 && imc <= 24.9) return styles.normalWeight;
    if (imc >= 25 && imc <= 29.9) return styles.overweight;
    if (imc >= 30 && imc <= 34.9) return styles.obesity1;
    if (imc >= 35 && imc <= 39.9) return styles.obesity2;
    return styles.obesity3;
};

const Result: React.FC<ResultProps> = ({ imc }) => {
    const imcValue = imc ? parseFloat(imc) : null;
    const colorClass = getColorClass(imcValue);

    return (
        <div className={`${styles.resultContainer} ${colorClass}`}>
            <p>{imc}</p>
        </div>
    );
};

export default Result;
