import React from 'react';
import {
  Typography,
  Button,
  Container,
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core/';
import { KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles({
  field: {
    display: 'block',
    marginTop: 20,
    marginBottom: 20
  }
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [titleError, setTitleError] = React.useState(false);
  const [details, setDetails] = React.useState('');
  const [detailsError, setDetailsError] = React.useState(false);
  const [category, setCategory] = React.useState('todos');

  const handleSubmit = e => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title.trim() == '') {
      setTitleError(true);
    }

    if (details.trim() == '') {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={e => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={e => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>

      {/* Icons */}
    </Container>
  );
}
