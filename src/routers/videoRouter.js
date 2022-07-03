import express from "express";
import { 
    watch, 
    upload, 
    deleteVideo,
    getEdit,
    postEdit
 } from "../controller/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);

// videoRouter.get("/:id(\\d+)/delete", deleteVideo);
// videoRouter.get("/upload", upload);

export default videoRouter;

// module.exports = videoRouter;