
window.onload = function () {
    document.getElementById("subject").focus();
}
// sub = document.getElementById('subject').focus()
document.getElementById('subSubject').addEventListener('click', sumClick)

function sumClick() {
    sub = document.getElementById('subject').value
    alert(sub)
    url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao&part=snippet&q=${sub}&maxResults=5&publishedAfter=2021-12-21T02:49:05.100Z&publishedBefore=2021-12-21T02:49:05.100Z&order=relevance&videoDuration=any&type=video`
    console.log(url)
}
apiKey = "AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao"
dur = "https://www.googleapis.com/youtube/v3/videos?id=k8JD1A9uVaM&part=contentDetails&key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao"
xy = {}
xd = {}
duration = ""
url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4Yhlk-ADYBzSyiqD0QEgrvjB3plD4jao&part=snippet&q=axiosjavascript&maxResults=5&publishedAfter=2021-12-21T02:49:05.100Z&publishedBefore=2021-12-21T02:49:05.100Z&order=relevance&videoDuration=any&type=video"
// axios.get(url)
//     .then(function (response) {
//         // handle success
//         xy = response.data
//         ObjtoHtml(xy)
//         console.log(xy);
//     })
function ObjtoHtml(lines) {
    console.log("lines are: ", lines)
    axios.get(dur)
        .then(function (durRes) {
            xd = durRes.data
            duration = xd.items[0].contentDetails.duration
            document.getElementById('test').innerHTML =
                `Video id is : ${lines.items[1].id.videoId}<hr> ${lines.items[1].snippet.description}<br>
                        ${lines.items[1].snippet.publishedAt}
                        <br>Duration is ${duration} <br>  <a href="https://www.youtube.com/watch?v=${lines.items[1].id.videoId}" target="_blank">video</a>`
            console.log("duration is " + duration)
        })
}
res = ''
resArray = []
console.log("script start")
            // "publishedAt": "2019-09-23T15:00:22Z",