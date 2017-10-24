/*
1. 获取css类的高度
2. 设置图片的max-width等于上面的高度
*/
(function () {
  window.onload = function () {
    const IMAGE_CONTAINER = document.querySelector('.detail-image-container')
    const IMAGE_DTEALS = document.querySelector('.detail-image')

    IMAGE_DTEALS.style.maxHeight = IMAGE_CONTAINER.offsetHeight * 0.9 + 'px'
    IMAGE_DTEALS.style.maxWidth = IMAGE_CONTAINER.offsetWidth * 0.9 + 'px'
  // console.log(IMAGE_DTEALS.style.maxHeight + '\n' + IMAGE_CONTAINER.offsetHeight)
  }
})()
