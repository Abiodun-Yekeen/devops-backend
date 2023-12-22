const express = require("express")
const imageupload = require("../Helpers/Libraries/imageUpload");

const { getAccessToRoute } = require("../Middlewares/Authorization/auth");
const {addStory,getAllStories,detailStory,likeStory, editStory, deleteStory, editStoryPage } = require("../Controllers/story")
const { checkStoryExist, checkUserAndStoryExist } = require("../Middlewares/database/databaseErrorhandler");

const router = express.Router() ;

router.post("/api/addstory" ,[getAccessToRoute, imageupload.single("image")],addStory)


router.post("/api/:slug", checkStoryExist, detailStory)

router.post("/api/:slug/like",[getAccessToRoute,checkStoryExist] ,likeStory)

router.get("/api/editStory/:slug",[getAccessToRoute,checkStoryExist,checkUserAndStoryExist] , editStoryPage)

router.put("/api/:slug/edit",[getAccessToRoute,checkStoryExist,checkUserAndStoryExist, imageupload.single("image")] ,editStory)

router.delete("/api/:slug/delete",[getAccessToRoute,checkStoryExist,checkUserAndStoryExist] ,deleteStory)

router.get("/api/getAllStories",getAllStories)


module.exports = router