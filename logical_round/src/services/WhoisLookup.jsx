import axios from "axios";
const api=axios.create({
    baseURL:"https://api-ninjas.com/7PTfxXD8Kg4Ch1ZBmxI39A==WMuyTF6uVcW5KUSG/",
    
   
})
export const getDomainDetails=()=>{
     api.get('whois', {
      headers: {
        header:('Access-Control-Allow-Origin: *')
      }
    })
   
    
}
