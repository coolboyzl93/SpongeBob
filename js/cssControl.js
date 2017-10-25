/*
1. 获取css类的高度
2. 设置图片的max-width等于上面的高度
*/
(function () {
  window.onload = function () {
    var IMAGE_CONTAINER = document.querySelector('.detail-image-container')
    var IMAGE_DTEALS = document.querySelector('.detail-image')
    var THUMBNIAL_ITMES = document.querySelectorAll('.thumbnail-item')

    IMAGE_DTEALS.style.maxHeight = IMAGE_CONTAINER.offsetHeight * 0.9 + 'px'
    IMAGE_DTEALS.style.maxWidth = IMAGE_CONTAINER.offsetWidth * 0.9 + 'px'

    var thumbnailArr = [].slice.call(THUMBNIAL_ITMES)
    thumbnailArr.map((value) => {
      value.style.maxWidth = value.children[0].children[0].width + 'px'
      // console.log(value.children[0].children[0])
    })
  // console.log(IMAGE_DTEALS.style.maxHeight + '\n' + IMAGE_CONTAINER.offsetHeight)
  }
})()
