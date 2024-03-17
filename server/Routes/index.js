import express from "express"
import  { HandleGenerateshortUrl,redirectToUrl } from "../Controller/Url.controller.js"

const route= express.Router()


route.post("/",HandleGenerateshortUrl)


route.get("/:id",redirectToUrl)


route.post("url",(req,res)=>{
    
})

export default route

