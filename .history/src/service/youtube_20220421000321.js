class Youtube {
    constructor(){
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    async search(keyword){
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${keyword}&type=video&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE`,
            this.getRequestOptions);
      const result = await response.json();
      return result.items.map(item => ({...item, id:item.id.videoId}))
    }

    async mostPopular(){
      const response = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE",
            this.getRequestOptions);
        return await response.json();
  }    
}

export default Youtube;