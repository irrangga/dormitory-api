const pool = require('../database')

// add new room
const addRoom = (req, res) => {
  const sql = `
  INSERT INTO room (room_id, price, room_size, bed, description)
  VALUES ('${req.body.room_id}', ${req.body.price}, '${req.body.room_size}', '${req.body.bed}', '${req.body.description}');
  INSERT INTO occupancy (room_id) 
  VALUES ('${req.body.room_id}')
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// get all rooms
const getAllRooms = (req, res) => {
  const sql = 'SELECT room_id, price, room_size, bed, description FROM room ORDER BY room_id ASC'
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// get room by room id
const getRoomByRoomId = (req, res) => {
  const sql = `SELECT room_id, price, room_size, bed, description FROM room WHERE room_id = '${req.params.room_id}'`
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// update room by room id
const updateRoomByRoomId = (req, res) => {
  const sql = `
  UPDATE room
  SET
  price = ${req.body.price},
  room_size = '${req.body.room_size}',
  bed = '${req.body.bed}',
  description = '${req.body.description}'
  WHERE 
  room_id = '${req.params.room_id}'
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// delete room by room id
const deleteRoomByRoomId = (req, res) => {
  const sql = `DELETE FROM room WHERE room_id = '${req.params.room_id}'`
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

module.exports = { addRoom, getAllRooms, getRoomByRoomId, updateRoomByRoomId, deleteRoomByRoomId }
