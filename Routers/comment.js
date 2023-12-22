const express = require("express")

const { getAccessToRoute } = require("../Middlewares/Authorization/auth");

const { addNewCommentToStory ,getAllCommentByStory,commentLike ,getCommentLikeStatus} = require("../Controllers/comment")

const { checkStoryExist } = require("../Middlewares/database/databaseErrorhandler");

const router = express.Router() ;


router.post("/api/:slug/addComment",[getAccessToRoute,checkStoryExist] ,addNewCommentToStory)

router.get("/api/:slug/getAllComment",getAllCommentByStory)

router.post("/api/:comment_id/like",commentLike)

router.post("/api/:comment_id/getCommentLikeStatus",getCommentLikeStatus)


module.exports = router