const loadPictures = async ()=>{
    // User get album Id
    const albumId = new URL(window.location.href).searchParams.get("albumId");
    //conrainer swiper
    const containerSw =document.querySelector('.swiper')
    //container data
    const afterSwiper = document.querySelector('.post-wrap')
  
    // fetch  data
    const albomRespons = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    const data = await albomRespons.json();
  
    //picture wrap
    const picturWrap = document.createElement('div');
    picturWrap.classList.add('swiper-wrapper');
    containerSw.appendChild(picturWrap);
  
    //render pfoto
   await data.forEach(el => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${el.thumbnailUrl}" alt="${el.title}"></img>`;
      picturWrap.appendChild(slide);
    });

  
    const swiperPagination = document.createElement('div');
    swiperPagination.classList.add('swiper-pagination');
  containerSw.appendChild(swiperPagination)
  
  const sviperScroll = document.createElement('div')
  sviperScroll.classList.add('swiper-scrollbar')
  containerSw.appendChild(sviperScroll)
  
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // title wrap
  data.forEach( el =>{
    const infoTitle = document.createElement('p')
    infoTitle.classList.add('post_wrap-text');
    infoTitle.innerHTML = `<span>Post ${el.id} :</span> ${el.title}`;
    afterSwiper.appendChild(infoTitle);
  
  })

  
  }
  loadPictures();
   