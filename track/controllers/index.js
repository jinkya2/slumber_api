const pool = require("../../helpers/db");

/**
 * @route POST /track
 * @desc post a schedule track
 * @access public
 * @returns
 */
const createTrack = async (req, res) => {
  try {
    const { circadian, medicines, exercises, meditation, user_name } = req.body;
    console.log("server received data from client");
    console.log(req.body);
    console.log("Date");
    console.log(new Date());
    const newTrack = await pool.query(
      `INSERT INTO TRACK_V2 (track_date, user_name, 
        sleep_start, sleep_end, sleep_stretch, 
        medicine_minox, medicine_ashwg, medicine_finacet, medicine_biokare, 
        exercise_pushups, exercise__chairdips, exercise_squats, exercise_legloweringdrill, exercise_pullups, exercise_nof, 
        meditation_s1, meditation_s2, meditation_s3) 
        VALUES(to_timestamp(${Date.now()}/1000), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *`,
      [ 
        user_name,
        circadian.start, circadian.end, circadian.stretching,
        medicines.minox, medicines.ashwg, medicines.finacet, medicines.biokare,
        exercises.pushups, exercises.chairdips, exercises.squats, exercises.legloweringdrill, exercises.pullups, exercises.nof,
        meditation.session1, meditation.session2, meditation.session3
      ]
    );
    res.json(newTrack.rows[0]);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", payload: error });
  }
};

/**
 * @route GET /track
 * @desc get all the schedule metadata
 * @access public
 * @returns
 */
 const getTrack = async (req, res) => {
  try {
    console.log("server received data from client");
    const newTrack = await pool.query(`SELECT * FROM TRACK_V2`);
    console.log(newTrack);  // {rowCount, rows[track_date, user_name], sleep[sleep_start, sleep_end, sleep_stretch], medicines[medicine_minox, medicine_ashwg, medicine_finacet, medicine_biokare], exercise[exercise_pushups, exercise__chairdips, exercise_squats, exercise_legloweringdrill, exercise_pullups, exercise_nof], meditation[meditation_s1, meditation_s2, meditation_s3]}
    res.json(newTrack);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", payload: error });
  }
};

module.exports = {
  createTrack,
  getTrack
};
