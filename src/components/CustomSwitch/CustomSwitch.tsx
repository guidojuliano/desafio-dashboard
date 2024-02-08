import React, { useState } from 'react';
import styles from './CustomSwitch.module.css';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

interface CustomSwitchProps {
  onOptionChange: (option: 'Grafico' | 'Pulso') => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState<'Grafico' | 'Pulso'>('Grafico');

  const handleOptionToggle = () => {
    const newOption = selectedOption === 'Grafico' ? 'Pulso' : 'Grafico';
    setSelectedOption(newOption);
    onOptionChange(newOption);
  };

  return (
    <div className={styles['custom-switch']} onClick={handleOptionToggle}>
      <div className={styles['switch-container']}>
        <div className={`${styles.option} ${selectedOption === 'Grafico' ? styles.selected : ''}`}>
          <BarChartIcon />
          Gráfico
        </div>
        <div className={`${styles.option} ${selectedOption === 'Pulso' ? styles.selected : ''}`}>
          <StarRoundedIcon /> Pulso
        </div>
        <div className={`${styles.slider} ${selectedOption === 'Pulso' ? styles['slide-right'] : ''}`} />
      </div>
    </div>
  );
};

export default CustomSwitch;
