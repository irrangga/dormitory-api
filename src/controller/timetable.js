const pool = require('../database')

// get all timetables
const getAllTimetables = (req, res) => {
  const sql = 'SELECT * FROM timetable ORDER BY user_id ASC'
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: 'Load data timetables success'
      },
      data: result
    })
  })
}

// get timetable by date
const getTimetableByDate = (req, res) => {
  const sql = `SELECT * FROM timetable WHERE ('${req.params.date}' BETWEEN check_in AND check_out)`
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: 'Load data timetables by date success'
      },
      data: result
    })
  })
}

// get unpaid users
const getUnpaidUsers = (req, res) => {
  const sql = `
  SELECT occupancy.user_id, occupancy.name,
  CEILING (DATEDIFF('${req.params.inspection_date}', occupancy.check_out) / 30.4375) AS total_month,
  CEILING (DATEDIFF('${req.params.inspection_date}', occupancy.check_out) / 30.4375) * room.price AS total_debt
  FROM occupancy
  INNER JOIN room ON occupancy.room_id = room.room_id
  WHERE check_out < '${req.params.inspection_date}'
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      status: {
        code: 200,
        shortcode: 'OK',
        message: 'Load data unpaid users success'
      },
      data: result
    })
  })
}

module.exports = { getAllTimetables, getTimetableByDate, getUnpaidUsers }
