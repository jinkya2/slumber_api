# Notes

# Clutter

.index.js

./users
--/controllers
--/models
--/.routes.config.js
    router = express.Router();
    
    router.post("/", async (req, res)=>{
        try {
            ...
        } catch (error) {
            return res.status(xxx).json({message: "Internal Error", payload: error})
        }
    })
    module.exports=router;


{
    "circadian": {
        "start": 0,
        "end": 0,
        "stretching": false
    },
    "medicines": {
        "minox": false,
        "ashwg": false,
        "finacet": false,
        "biokare": false
    },
    "exercises": {
        "pushups": 0,
        "chairdips": 0,
        "squats": 0,
        "legloweringdrill": 0,
        "pullups": 0,
        "nof": false
    },
    "meditation": {
        "session1": 0,
        "session2": 0,
        "session3": 0
    }
}


Sr.No.  \\ Date \\ circadian    \\ medicines    \\ exercises    \\ meditation
                    start           minox           pushups         session1
                    end             ashwg           chairdips       session2
                    stretch         finacet         squats          session3
                                    biokare         leglowerdrill
                                                    pullups
                                                    nof

CREATE TABLE TRACK_V1(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    circadian VARCHAR(55),
    medicines VARCHAR(65),
    exercises VARCHAR(100),
    meditation VARCHAR(55)
)

INSERT INTO TRACK_V1 (circadian, medicines, exercises, meditation) VALUES($1, $2, $3)

CREATE TABLE TRACK_V1(
    id SERIAL PRIMARY KEY,
    date 
    circadian                       // "{start: "06:34 AM", end: "00:00 AM", stretch: true}" 55
    medicines                       // '{minox: false, ashwg: false, finacet: false, biokare: false}' 65
    exercises                       // '{"pushups": 12, "chairdips": 12, "squats": 12, "leglowerdrills": 99, "pullups": 99, "nofap": false}' // 100
    meditation: "{ "session1": 13, "session1": 13, "session1": 13, }" // 55
);


ALTER TABLE <TABLE_NAME> ALTER COLUMN <COLUMN_NAME> TYPE <NEW_TYPE eg_ VARCHAR(100)>














-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** track_records

CREATE TABLE track_records
(
 track_id                  serial NOT NULL,
 "date"                      date NOT NULL,
 "user"                      varchar(50) NOT NULL,
 sleep_start               date NOT NULL,
 sleep_end                 date NOT NULL,
 sleep_stretch             boolean NOT NULL,
 medicine_minox            boolean NOT NULL,
 medicine_ashwg            boolean NOT NULL,
 medicine_finacet          boolean NOT NULL,
 medicine_biokare          boolean NOT NULL,
 exercise_pushups          smallint NOT NULL,
 exercise__chairdips       smallint NOT NULL,
 exercise_squats           smallint NOT NULL,
 exercise_legloweringdrill smallint NOT NULL,
 exercise_pullups          smallint NOT NULL,
 meditation_s1             smallint NOT NULL,
 meditation_s2             smallint NOT NULL,
 meditation_s3             smallint NOT NULL
);







