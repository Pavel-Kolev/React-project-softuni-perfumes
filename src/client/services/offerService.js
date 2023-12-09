import * as request from "../lib/request"
const baseurl="https://project-parfumewebsite.onrender.com/offers"
export const CreateComment=async (ParfumeId,data)=>{
const result =await request.post(`${baseurl}/${ParfumeId}/create`,data)
return result
}
export const FindComments=async(ParfumeId)=>{
    const result =await request.post(`${baseurl}/${ParfumeId}/find`)
return result
}
export const DeleteComment=async(commentId,parfumeId)=>{
    const result =await request.remove(`${baseurl}/${parfumeId}/${commentId}/delete`)
    return result
}
