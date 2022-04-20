class Youtube {
    constructor(){
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    search(keyword){
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${keyword}&type=video&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE`
      ,this.getRequestOptions)
      .then(response => response.json())
    }
    mostPopular(){
      fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE"
      , this.getRequestOptions)
      .then(response => response.json())
  }
    
}