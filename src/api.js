import axios from "axios";

const KEY = "AIzaSyA8lk1Fox4ixywO9A5vg3GphG7QGXLtsBQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResult: 5,
        key: KEY
    },
    headers:{}
})