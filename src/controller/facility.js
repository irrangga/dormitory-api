const pool = require('../database')

// add new facility
const addFacility = (req, res) => {
  const sql = `
  INSERT INTO facility (facilities, list_item)
  VALUES ('${req.body.facilities}', '${req.body.list_item}')
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// get all facilities
const getAllFacilities = (req, res) => {
  const sql = `
  SELECT facilities,
  GROUP_CONCAT(list_item ORDER BY list_id ASC SEPARATOR ', ')
  FROM facility GROUP BY facilities ORDER BY FIELD(facilities, 'bedroom', 'bathroom', 'public')
  `
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

// delete facility by list_item
const deleteFacilityByListItem = (req, res) => {
  const sql = `DELETE FROM facility WHERE list_item = '${req.params.list_item}'`
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send({
      data: result,
      status: 'ok'
    })
  })
}

module.exports = { addFacility, getAllFacilities, deleteFacilityByListItem }
