import React from "react";
import PropTypes from "prop-types";
import data from "../../data/data";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "../../css/style.css";

/**
 * @func Form
 * @param {object} props
 * @return {HTML}
 */
export default function Form({
  roomType,
  vaccantRooms,
  price,
  setRoomType,
  setVaccantRooms,
  setPrice,
}) {
  /**
   * @func handleChange
   * @param {object} e
   * @return {undefined}
   */
  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    if (name === "roomType") setRoomType(val);
    if (name === "vaccantRooms") setVaccantRooms(val);
    if (name === "price") setPrice(val);
  };

  return (
    <section className="drop-down">
      <TextField
        select
        className="drop-down"
        label="Room Type"
        variant="outlined"
        name="roomType"
        value={roomType}
        onChange={handleChange}
      >
        {data.rooms.map((room) => (
          <MenuItem key={room.room_type} value={room.room_type}>
            {room.room_type}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        className="drop-down"
        label="Vaccant Rooms"
        variant="outlined"
        name="vaccantRooms"
        value={vaccantRooms}
        onChange={handleChange}
      >
        {data.rooms.map((room) => (
          <MenuItem key={room.vacant_rooms} value={room.vacant_rooms}>
            {room.vacant_rooms}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        className="drop-down"
        label="Price"
        variant="outlined"
        name="price"
        value={price}
        onChange={handleChange}
      >
        {data.rooms.map((room) => (
          <MenuItem key={room.price} value={room.price}>
            {room.price}
          </MenuItem>
        ))}
      </TextField>
    </section>
  );
}
Form.propTypes = {
  props: PropTypes.object,
};
