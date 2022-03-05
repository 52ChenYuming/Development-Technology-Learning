function ajax(url)  {
  const promise = new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url,true)
    xhr.onreadystatechange = function() {
      if(xhr.readyState ===4 && xhr.status ===200) {
        resolve(JSON.parse(xhr.responseText))
      } else if (xhr.status === 404) {
        reject(new Error('404 Not Found'))
      }
    }
    xhr.send(null)
  })
  return promise
}
url = '/data/test.json'
ajax(url)
.then(res => console.log(res))
.catch(err => console.log(err))