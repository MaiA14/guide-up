import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    marginBottom: '400px',
    top: 0
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs className="MuiPaper-root"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="overview" className="MuiTab-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <Tab label="messenger"  className="MuiTab-wrapper" onClick={() => window.scrollTo({ top: 490, behavior: 'smooth' })} />
        <Tab label="bookings"  className="MuiTab-wrapper" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })} />
      </Tabs>
    </Paper>
  );
}