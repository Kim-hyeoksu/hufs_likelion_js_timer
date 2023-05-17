const timeDiv = document.getElementById("time")
const today = document.querySelector('.today')
function getTime() {
  let now = new Date()
  let hour = padZero(now.getHours())
  let minute = padZero(now.getMinutes())
  let second = padZero(now.getSeconds())
  let year = now.getFullYear()
  let month = now.getMonth()
  let date = now.getDate()
  let day = now.getDay()
  let days = ['일', '월', '화', '수', '목', '금', '토']
  day = days[day]

  today.textContent = `${year}년 ${month+1}월 ${date}일 ${day}요일`
  timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`
  setInterval(getTime, 1000)
}

function padZero(data) {
  return data < 10 ? `0${data}` : data
}

getTime()