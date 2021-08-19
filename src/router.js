const express = require('express')
const router = express.Router()

const { addRoom, getAllRooms, getRoomByRoomId, updateRoomByRoomId, deleteRoomByRoomId } = require('./controller/room')
const { addFacility, getAllFacilities, deleteFacilityByListItem } = require('./controller/facility')
const { addUser, getAllUsers, getUserByUserId, updateUserByUserId, deleteUserByUserId } = require('./controller/user')
const { addOccupant, getAllOccupancies, getOccupiedRooms, getEmptyRooms, getOccupancyByRoomId, updateOccupancyByRoomId, deleteOccupancyByRoomId } = require('./controller/occupancy')
const { getAllTimetables, getTimetableByDate, getUnpaidUsers } = require('./controller/timetable')

// room router
router
  .route('/room')
  .post(addRoom)
  .get(getAllRooms)
router
  .route('/room/:room_id')
  .get(getRoomByRoomId)
  .put(updateRoomByRoomId)
  .delete(deleteRoomByRoomId)

// facility router
router
  .route('/facility')
  .post(addFacility)
  .get(getAllFacilities)
router.delete('/facility/:list_item', deleteFacilityByListItem)

// user router
router
  .route('/user')
  .post(addUser)
  .get(getAllUsers)
router
  .route('/user/:user_id')
  .get(getUserByUserId)
  .put(updateUserByUserId)
  .delete(deleteUserByUserId)

// occupancy router
router
  .route('/occupancy')
  .post(addOccupant)
  .get(getAllOccupancies)
router.get('/occupancy/occupied', getOccupiedRooms)
router.get('/occupancy/empty', getEmptyRooms)
router
  .route('/occupancy/:room_id')
  .get(getOccupancyByRoomId)
  .put(updateOccupancyByRoomId)
  .delete(deleteOccupancyByRoomId)

// timetable router
router.get('/timetable', getAllTimetables)
router.get('/timetable/:date', getTimetableByDate)
router.get('/timetable/unpaid/:inspection_date', getUnpaidUsers)

module.exports = router