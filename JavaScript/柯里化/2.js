function ajax(type, url, data) {
  var xhr = new XMLHttpRequest()
  xhr.open(type, url, true)
  xhr.send(data)
  if(xhr.onreadystatechange === 4 && xhr.status === 200) {
    // operation
  }
}

var ajaxCurry = curry(ajax)

var post = ajaxCurry('Post')
