const container = document.querySelector('.container')
const jumbo = document.querySelector('.jumbo');
const thums = document.querySelectorAll('.thumb')

container.addEventListener('click', (e) =>{
  
  //apakah yang di klik adalah tumb
  if(e.target.className == 'thumb'){

    jumbo.src = e.target.src; 
    jumbo.classList.add('fade')
    setTimeout(() => {
      jumbo.classList.remove('fade')
    }, 100);

    thums.forEach((thumb) =>{

      // //cara 1 agar class activenya berjalan pada item yang kita klik
      // if(thumb.classList.container('active')){
      //   thumb.classList.remove('active')
      // }
      //caara 2 tetapi mengubah seleruh kelas menjadi thumb
      thumb.className = 'thumb'
    })

    e.target.classList.add('active')
    
  }
}) 