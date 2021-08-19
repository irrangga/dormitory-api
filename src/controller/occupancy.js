const pool = require('../database')

// add new occupant
const addOccupant = (req, res) => {
  const sql = `
  UPDATE occupancy
  SET
  user_id = ${req.body.user_id},
  name = '${req.body.name}',
  check_in = '${req.body.check_in}',
  check_out = '${req.body.check_out}'
  WHERE
  room_id = '${req.body.room_id}';

  UPDATE timetable
  SET
  check_in = '${req.body.check_in}',
  check_out = '${req.body.check_out}'
  WHERE
  user_id = ${req.body.user_id}
  AND
  name = '${req.body.name}'
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// get all occupancies
const getAllOccupancies = (req, res) => {
  const sql = 'SELECT * FROM occupancy ORDER BY room_id ASC'
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// get occupied rooms
const getOccupiedRooms = (req, res) => {
  const sql = 'SELECT room_id, user_id, name, check_out FROM occupancy WHERE user_id IS NOT NULL ORDER BY room_id ASC'
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// get empty rooms
const getEmptyRooms = (req, res) => {
  const sql = `
  SELECT occupancy.room_id, room.price, room.room_size, room.bed, room.description
  FROM occupancy
  INNER JOIN room ON occupancy.room_id = room.room_id
  WHERE user_id IS NULL
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// get occupancy by room id
const getOccupancyByRoomId = (req, res) => {
  const sql = `SELECT * FROM occupancy WHERE room_id = '${req.params.room_id}'`
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// update occupancy by room id
const updateOccupancyByRoomId = (req, res) => {
  const sql = `
  UPDATE occupancy
  SET
  user_id = ${req.body.user_id},
  name = '${req.body.name}',
  check_in = '${req.body.check_in}',
  check_out = '${req.body.check_out}'
  WHERE
  room_id = '${req.params.room_id}';
  
  UPDATE timetable
  SET
  check_in = '${req.body.check_in}',
  check_out = '${req.body.check_out}'
  WHERE
  user_id = ${req.body.user_id}
  AND
  name = '${req.body.name}'
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// delete occupancy by room id
const deleteOccupancyByRoomId = (req, res) => {
  const sql = `
  DELETE FROM occupancy WHERE room_id = '${req.params.room_id}';
  INSERT INTO occupancy (room_id) VALUES ('${req.params.room_id}')
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

module.exports = { addOccupant, getAllOccupancies, getOccupiedRooms, getEmptyRooms, getOccupancyByRoomId, updateOccupancyByRoomId, deleteOccupancyByRoomId }
