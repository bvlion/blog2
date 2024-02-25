const SEARCH_URL = '/search/'

function handleKeyPress(event) {
  if (event.key === "Enter") {
      searchBlog();
  }
}

function searchBlog() {
  const word1 = document.getElementById('cse-search-input-box-id')
  const word2 = document.getElementById('cse-search-input-box-id2')
  const word = word1 == null ? word2.value : word1.value
  const url = word ? SEARCH_URL + '#' + word : SEARCH_URL
  location.href = url
}

function socialMediaPopUp(url, title, width, height) {
  var left = (screen.width / 2) - (width / 2);
  var top = (screen.height / 2) - (height / 2);
  window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
}
