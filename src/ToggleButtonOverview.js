import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export function ToggleButtonOverview({time, setTime}) {
  

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTime: string,
  ) => {
    setTime(newTime);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      size="small"
      value={time}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="month">Month</ToggleButton>
      <ToggleButton value="year">Year</ToggleButton>
    </ToggleButtonGroup>
  );
}


