import axios from "axios"

const KEY="AIzaSyAWJNZoRyZP5KkYNewGAljLHgVeOBNLc-E"
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",params:{
        part:"snippet",
    maxResults:20,
        key:KEY

    }
})