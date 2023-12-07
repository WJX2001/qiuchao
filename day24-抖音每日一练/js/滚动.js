const ArrayImage = ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg']


// 获取相关元素
const cur = document.querySelector('.scroll_box .cur')
const prev = document.querySelector('.scroll_box .prev')
const next = document.querySelector('.scroll_box .next')
const scroll_box = document.querySelector('.scroll_box')

let cur_id= 0;
console.log(cur.datest)
console.log(111111)
// 推断序号函数
function CreateScroll_Img(cur_id){
    const prev_id = cur_id === 0 ? ArrayImage.length-1 : cur_id-1
    const next_id = cur_id === ArrayImage.length-1 ? 0 : cur_id+1
    cur.style.background = `url(${ArrayImage[cur_id]}) no-repeat center/cover`
    prev.style.background = `url(${ArrayImage[prev_id]}) no-repeat center/cover`
    next.style.background = `url(${ArrayImage[next_id]}) no-repeat center/cover`
}

CreateScroll_Img(cur_id)

// 滚动函数
function scroll_Image(prevOrNext,cur) {
    prevOrNext.style.transition = 'height 1s'
    prevOrNext.style.height = '100vh'
    setTimeout(() => {
        prevOrNext.style.transition = 'none'
        cur.style.background = `url(${ArrayImage[cur_id]}) no-repeat center/cover`
        prevOrNext.style.height = '0'
        prevOrNext.style.offsetWidth
        CreateScroll_Img(cur_id)
    },1000)
}

window.addEventListener('wheel',function(e) {
    if(e.deltaY<0) {
        cur_id--;
        if(cur_id<0) {
            cur_id=ArrayImage.length-1
        }
        scroll_Image(prev,cur)
    }
    if(e.deltaY>0) {
        cur_id = (cur_id+1) % ArrayImage.length;
        scroll_Image(next,cur)
    }
})