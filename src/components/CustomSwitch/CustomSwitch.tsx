import React from 'react';
import { Switch } from '@mui/material';
import { styled } from '@mui/system';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 150,
  height: 35,
  backgroundColor: '#ffffff',
  borderRadius: 20,
  border: `3px solid #644BBA`,
  '& .MuiSwitch-thumb': {
    color: '#ffffff',
    width: 70,
    height: 25,
    position: 'absolute',
    borderRadius: 20,
    backgroundColor: '#644BBA',
    top: 2,
    left: 2,
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#ffffff',
    opacity: 1,
    transform: 'scale(1)',
  },
}));

export default function CustomizedSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <CustomSwitch checked={checked} onChange={handleChange}>
        <div className="optionText">Grafico</div>
        <div className="optionText">Pulso</div>
      </CustomSwitch>
    </div>
  );
}
