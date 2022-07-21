export function a11yPropsControls(key: string, index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function a11yPropsLabelledby(key: string, index: number) {
  return {
    id: `simple-tabpanel-${index}`,
    'aria-labelledby': `simple-tab-${index}`,
  };
}