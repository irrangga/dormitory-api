const pool = require('../database')

// add new user
const addUser = (req, res) => {
  const sql = `
  INSERT INTO user (name, full_name, id_card_number, birthplace, birthdate, address, religion, phone_number)
  VALUES ('${req.body.name}', '${req.body.full_name}', '${req.body.id_card_number}', '${req.body.birthplace}', '${req.body.birthdate}', '${req.body.address}', '${req.body.religion}', '${req.body.phone_number}');
  INSERT INTO timetable (user_id, name)
  VALUES (LAST_INSERT_ID(), '${req.body.name}')
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: 'Add new user success'
      }
    })
  })
}

// get all users
const getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM user ORDER BY user_id ASC'
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: 'Load data users success'
      },
      data: result
    })
  })
}

// get user by user id
const getUserByUserId = (req, res) => {
  const sql = `SELECT * FROM user WHERE user_id = ${req.params.user_id}`
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: `Load data user ${req.params.user_id} success`
      },
      data: result
    })
  })
}

// update user by user id
const updateUserByUserId = (req, res) => {
  const sql = `
  UPDATE user
  SET
  name = '${req.body.name}',
  full_name = '${req.body.full_name}',
  id_card_number = '${req.body.id_card_number}',
  birthplace = '${req.body.birthplace}', 
  birthdate = '${req.body.birthdate}', 
  address = '${req.body.address}', 
  religion = '${req.body.religion}', 
  phone_number = '${req.body.phone_number}'
  WHERE 
  user_id = ${req.params.user_id}
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: `User ${req.params.user_id} successfully updated`
      }
    })
  })
}

// delete user by user id
const deleteUserByUserId = (req, res) => {
  const sql = `DELETE FROM user WHERE user_id = ${req.params.user_id}`
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: `User ${req.params.user_id} successfully deleted`
      }
    })
  })
}

module.exports = { addUser, getAllUsers, getUserByUserId, updateUserByUserId, deleteUserByUserId }
