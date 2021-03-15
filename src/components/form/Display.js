import React from "react";
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
/**
 * @func Display
 * @param {object} props
 * @return {HTML}
 */
export default function Display({ roomType, vaccantRooms, price }) {
  return (
    <Card variant="outlined">
      <ol>
        <Typography variant="h5" component="h2">
          <li>
            {roomType}, {vaccantRooms}, ${price}
          </li>
        </Typography>
      </ol>
    </Card>
  );
}
Display.propTypes = {
  props: PropTypes.object,
};

