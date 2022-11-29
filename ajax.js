function ajax() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.querySelector(".demo").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", "ajax_info.txt");
  xhr.send();
}

const ajaxButton = document.querySelector(".fetch-btn");
ajaxButton.addEventListener("click", ajax);