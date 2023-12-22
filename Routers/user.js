const express = require("express")

const imageUpload = require("../Helpers/Libraries/imageUpload");

const {profile,editProfile,changePassword,addStoryToReadList,readListPage} = require("../Controllers/user");
const { getAccessToRoute } = require("../Middlewares/Authorization/auth");


const router = express.Router() ;

router.get("/api/profile",getAccessToRoute ,profile)

router.post("/api/editProfile",[getAccessToRoute ,imageUpload.single("photo")],editProfile)

router.put("/api/changePassword",getAccessToRoute,changePassword)

router.post("/api/:slug/addStoryToReadList",getAccessToRoute ,addStoryToReadList)

router.get("/api/readList",getAccessToRoute ,readListPage)



module.exports = router