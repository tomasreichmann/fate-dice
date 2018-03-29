import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { cyan } from 'material-ui/colors';
import withRoot from '../src/withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const plus = <svg
  style={{
    height: '75%'
  }}
  version="1.1"
  x="0px"
  y="0px"
  viewBox="0 0 100 100"
  >
  <path
    fill="#ffffff"
    d="M95,53.303c0,1.09-0.884,1.974-1.974,1.974h-37.5v37.5c0,1.09-0.884,1.974-1.974,1.974h-7.105 c-1.09,0-1.974-0.884-1.974-1.974v-37.5h-37.5C5.884,55.276,5,54.393,5,53.303v-7.105c0-1.09,0.884-1.974,1.974-1.974h37.5v-37.5     c0-1.09,0.884-1.974,1.974-1.974h7.105c1.09,0,1.974,0.884,1.974,1.974v37.5h37.5c1.09,0,1.974,0.884,1.974,1.974V53.303z"
  />
</svg>;

const minus = <svg
  style={{
    height: '75%'
  }}
  version="1.1"
  x="0px"
  y="0px"
  viewBox="0 0 100 100"
  >
  <path
    fill="#ffffff"
    d="M95,53.303c0,1.09-0.884,1.974-1.974,1.974H6.974C5.884,55.276,5,54.393,5,53.303v-7.105c0-1.09,0.884-1.974,1.974-1.974     h86.053c1.09,0,1.974,0.884,1.974,1.974V53.303z"
  />
</svg>;

const dieValueMap = {
  [-1]: minus,
  0: null,
  1: plus
};

const Die = ({ roll }) => {
  return <span style={{
    verticalAlign: 'top',
    display: 'inline-flex',
    position: 'relative',
    width: '20vw',
    height: '20vw',
    backgroundColor: cyan[700],
    color: 'white',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 2vw',
    borderRadius: 12,
    fontSize: 40,
    lineHeight: 1
  }} >
    { dieValueMap[roll] }
  </span>;
}

class Index extends React.Component {
  state = {
    values: [],
  };

  roll = () => {
    const randomRoll = () => Math.floor(Math.random() * 3 -1);
    this.setState({
      values: [
        randomRoll(),
        randomRoll(),
        randomRoll(),
        randomRoll()
      ],
    });
  };

  render() {
    const { classes } = this.props;
    const { values } = this.state;

    return (
      <div className={classes.root} onClick={this.roll}>
        <div style={{ marginBottom: 20 }}>
          { values.map( value => <Die roll={value}/> ) }
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
