window.onload = function(){
    let toggleButton = document.querySelector('.header__toggle-button')
    toggleButton.addEventListener('click', toggleAside)
    let aside = document.querySelector('.sidebar')
    let close = document.querySelector('.sidebar__close-btn')
    close.addEventListener('click  ', toggleAside)
    let main = document.querySelector('.main')
    function toggleAside(){
        aside.classList.toggle('unvisible')
        main.classList.toggle('position')
        main.classList.toggle('noscroll')
    };

    $('[data-open-block').on('mouseover', function() {
        const activeCls = 'is-active';
        alert('iphone - говно')
        console.log('iphone - говно')
        $('[data-open-block]').removeClass(activeCls);
        this.classList.add(activeCls)
        $('[data-content]').removeClass(activeCls);
      $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
    });

    

    // $('[data-open-block').on('touchstart', function() {
    //     const activeCls = 'is-active';
    //     $('[data-open-block]').removeClass(activeCls);
    //     this.classList.add(activeCls)
    //     $('[data-content]').removeClass(activeCls);
    //   $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
    // });

    // let btns = document.querySelectorAll('[data-open-block')
    // // console.log(btns);
    // let showAnother = (e) => {
    //     // console.log(e.target);
    //     for(let i=0; i < btns.length; i++){
    //         btns[i].classList.remove('is-active')
    //     }
    //     e.target.classList.add('is-active')
    //     console.log(e.target);
    // }
    // const activeCls = 'is-active';
    // for(let i=0; i < btns.length; i++){
    //     btns[i].addEventListener('touchstart',showAnother)
    // }
    // btns.addEventListener('click', showAnother)
    // for(let i=0; i < btns.length; i++){
    //     btns[i].addEventListener('touchstart', showAnother)
    // }
    // btns.addEventListener('click', showAnother)
    
    

    $('[data-open-faq').on('touchstart click', function() {
        const activeCls = 'is-active'
        $('[data-open-faq]').removeClass(activeCls)
        this.classList.add(activeCls)
        $('[data-content-faq]').removeClass(activeCls)
        $(`[data-content-faq="${$(this).data('open-faq')}"`).addClass(activeCls)
    });


    $('.show-content__payment-list li').on('touchstart click', function() {
        $('.show-content__payment-list li').removeClass('active');
        this.classList.add('active')
    })
// history info
    // $('.history-item').on('click', function() {
    //     this.classList.toggle('open').next().slideToggle(300)
    // })

    // для непосредственного внедрения svg

    // $('.ImgToSvg').each(function(){
    //   var $img = $(this);
    //   var imgClass = $img.attr('class');
    //   var imgURL = $img.attr('src');
    //   $.get(imgURL, function(data) {
    //     var $svg = $(data).find('svg');
    //     if(typeof imgClass !== 'undefined') {
    //       $svg = $svg.attr('class', imgClass+' replaced-svg');
    //     }
    //     $svg = $svg.removeAttr('xmlns:a');
    //     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
    //       $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    //     }
    //     $img.replaceWith($svg);
    //   }, 'xml');
    // });

    // $('.history-item__wrap').on('click', function() {
    //     this.nextElementSibling.hidden = true
    // })

    // Подсветка активной ссылки, при интеграции нужно удалить
    let pagePath = window.location.href.split('/')
    let localUrl = pagePath[pagePath.length - 1]
    if(localUrl == 'withdrawal-money.html'){
        $('.navigation__item:nth-child(3)').addClass('active')
    }else if(localUrl == 'add-money.html'){
        $('.navigation__item:nth-child(2)').addClass('active')
    }else if(localUrl == 'history.html'){
      $('.navigation__item:nth-child(4)').addClass('active')
    }else if(localUrl == 'balance.html'){
        $('.navigation__item:nth-child(1)').addClass('active')
    }else if(localUrl == 'notification.html'){
        $('.nav-list__item:nth-child(2)').addClass('active')
    }else if(localUrl == 'settings.html'){
        $('.nav-list__item:nth-child(1)').addClass('active')
    }else if(localUrl == 'faq.html'){
        $('.nav-list__item:nth-child(3)').addClass('active')
    }
    

    // ************************ Drag and drop ***************** //
// let dropArea = document.getElementById("drop-area")

// // Prevent default drag behaviors
// ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, preventDefaults, false)   
//   document.body.addEventListener(eventName, preventDefaults, false)
// })

// // Highlight drop area when item is dragged over it
// ;['dragenter', 'dragover'].forEach(eventName => {
//   dropArea.addEventListener(eventName, highlight, false)
// })

// ;['dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, unhighlight, false)
// })

// // Handle dropped files
// dropArea.addEventListener('drop', handleDrop, false)

// function preventDefaults (e) {
//   e.preventDefault()
//   e.stopPropagation()
// }

// function highlight(e) {
//   dropArea.classList.add('highlight')
// }

// function unhighlight(e) {
//   dropArea.classList.remove('active')
// }

// function handleDrop(e) {
//   var dt = e.dataTransfer
//   var files = dt.files

//   handleFiles(files)
// }

// let uploadProgress = []
// let progressBar = document.getElementById('progress-bar')

// function initializeProgress(numFiles) {
//     progressBar.style.display = 'block'
//   progressBar.value = 0
//   uploadProgress = []

//   for(let i = numFiles; i > 0; i--) {
//     uploadProgress.push(0)
//   }
// }

// function updateProgress(fileNumber, percent) {
//   uploadProgress[fileNumber] = percent
//   let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
//   console.debug('update', fileNumber, percent, total)
//   progressBar.value = total
// }

// function handleFiles(files) {
//   files = [...files]
//   initializeProgress(files.length)
//   files.forEach(uploadFile)
//   files.forEach(previewFile)
// }

// function previewFile(file) {
//   let reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onloadend = function() {
//     let img = document.createElement('img')
//     img.src = reader.result
//     document.getElementById('gallery').appendChild(img)
//   }
// }

// function uploadFile(file, i) {
//   var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
// //   Денис, как я понял, сдесь нужет свой url прописывать
//   var xhr = new XMLHttpRequest()
//   var formData = new FormData()
//   xhr.open('POST', url, true)
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

//   // Update progress (can be used to show progress indicator)
//   xhr.upload.addEventListener("progress", function(e) {
//     updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
//   })

//   xhr.addEventListener('readystatechange', function(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       updateProgress(i, 100) // <- Add this
//     }
//     else if (xhr.readyState == 4 && xhr.status != 200) {
//       // Error. Inform the user
//     }
//   })

//   formData.append('upload_preset', 'ujpu6gyk')
//   formData.append('file', file)
//   xhr.send(formData)
// }

// end of drop zone

  const dropdowns = document.querySelectorAll('.dropdown--js')
  for ( let i = 0; i<dropdowns.length; i++ ) {
      const dropdownHead = dropdowns[i].querySelector('.dropdown__head--js')
      const dropdownBody = dropdowns[i].querySelector('.dropdown__body--js')
      const heightBody = dropdownBody.scrollHeight
      let isOpen = false

      if ( dropdowns ) {
          dropdownBody.style.maxHeight = '0'
          dropdownHead.addEventListener('click  ', () => {
            console.log(dropdownBody);
              if (!isOpen) {
                  console.log('heightBody', heightBody);
                  dropdownBody.style.maxHeight = 'auto'
                  isOpen = true
                  dropdowns[i].classList.add('active')
              } else {
                  dropdownBody.style.maxHeight = '0'
                  dropdownBody.style.transition = '.3s'
                  isOpen = false
                  dropdowns[i].classList.remove('active')
              }
          })
      }
  }

}
