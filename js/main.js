/*
先制定计划，再按照步骤写程序
1. 获取所有缩略图
2. 监控每个缩略图的点击事件
3. 如果发生了点击，根据缩略图的信息更新大图
3.1 从缩略图的数据属性中获取图像的url
3.2 从缩略图的数据属性中获取标题文本
3.3 将图像和标题设置到大图上
*/

// DOM选择器
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
const THUMBNAIL_LINK_SELECTOR = '[ data-image-role="trigger"]'
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]'
// 类
const HIDDEN_DTEAIL_CLASS = 'hidden-detail'
const TINY_EFFECT_CLASS = 'is-tiny'
// 键值
const ESC_KEY = 27

// 设置大图像的信息
function setDetails (imgUrl, titleText) {
  'use strict'
  let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR)
  detailImage.setAttribute('src', imgUrl)

  let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR)
  detailTitle.textContent = titleText
}

// 获取缩略图的图片路径
function imageFromThumb (thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-url')
}

// 获取小图像的标题名
function titleFromThumb (thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-title')
}

// 将 获取缩略图的信息和将信息传给大图像 放在一起
function setDetailsFromThumb (thumbnail) {
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail))
}

// 设置缩略图的事件监听
function addThumbnailClickHandler (thumbnail) {
  'use strict'
  thumbnail.addEventListener('click', function (event) {
    event.preventDefault()
    setDetailsFromThumb(thumbnail)
    showDetails()
  })
}

// 将nodelit变成数组
function getThumbnailsArray () {
  'use strict'
  let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR)
  let thumbnailsArray = [].slice.call(thumbnails)
  return thumbnailsArray
}

// 增加hidden类
function hideDetails () {
  'use strict'
  document.body.classList.add(HIDDEN_DTEAIL_CLASS)
}

// 移除hidden类
function showDetails () {
  'use strict'
  let frame = document.querySelector(DETAIL_FRAME_SELECTOR)
  document.body.classList.remove(HIDDEN_DTEAIL_CLASS)
  // js 配合css类命的重要动画方法，通过一个延迟的删除类函数，来实现。
  frame.classList.add(TINY_EFFECT_CLASS)
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS)
  }, 50)
}

// 增加键值事件句柄
function addkeyPressHandler () {
  'use strict'
  document.body.addEventListener('keyup', function (event) {
    event.preventDefault()
    // console.log(event.keyCode)
    if (event.keyCode === ESC_KEY) {
      hideDetails()
    }
  })
}

// 初始化事件监听
function initializeEvents () {
  'use strict'
  let thumbnails = getThumbnailsArray()
  // map中传入一个函数名，可以直接将数组中的每个元素作为该函数的参数
  thumbnails.map(addThumbnailClickHandler)
  addkeyPressHandler()
}

initializeEvents()
