class Youtube {
    constructor(){
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    search(keyword){
      return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${keyword}&type=video&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE`
      ,this.getRequestOptions)
      .then(response => response.json());
    }

    async mostPopular(){
      const response = fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE"
      , this.getRequestOptions)
      const result = await response.json();

      return result;
  }    
}

export default Youtube;