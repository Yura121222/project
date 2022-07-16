const loadUserInfo = async () => {
    // User get user Id
    const userId = new URL(window.location.href).searchParams.get("userId");

    //container
    const containerEl = document.querySelector('.container');

    // fetch user data
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await userResponse.json();
    
   // fetch albom data
    const albomRespons = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    const albomData = await albomRespons.json();

    // fetch data todos
    const todosResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todosData = await todosResponse.json();


    //user info article
    const articleWrap = document.createElement('article');
    articleWrap.classList.add('post_wrap');
    containerEl.appendChild(articleWrap);

    //user name p
    const userName = document.createElement('p');
    userName.innerHTML = `<span>Username:</span> ${data.username}`;
    userName.classList.add('post_wrap-text');
    articleWrap.appendChild(userName);

    //user email p
    const userEmail = document.createElement('p');
    userEmail.innerHTML = `<span>Email:</span> <a href="mailto:${data.email}">${data.email}</a>`;
    userEmail.classList.add('post_wrap-text');
    articleWrap.appendChild(userEmail);

    //user address p
    const userAdress = document.createElement('p');
    userAdress.innerHTML = `<span>Address:</span> <a href="https://www.google.com/maps/search/${data.address.geo.lat},${data.address.geo.lng}">
    ${data.address.street}, ${data.address.suite}, ${data.address.city}</a>`;
    userAdress.classList.add('post_wrap-text');
    articleWrap.appendChild(userAdress);

    //user phone p
    const userPhone = document.createElement('p');
    userPhone.innerHTML = `<span>Phone:</span> <a href="tel:${data.phone}">${data.phone}</a>`;
    userPhone.classList.add('post_wrap-text');
    articleWrap.appendChild(userPhone);

    //user Website p
    const userWebsite = document.createElement('p');
    userWebsite.innerHTML = `<span>Website:</span>  <a href="${data.website}">${data.website}</a>`;
    userWebsite.classList.add('post_wrap-text');
    articleWrap.appendChild(userWebsite);  
        
    //user Company p
    const userCompany = document.createElement('p');
    userCompany.innerHTML = `<span>Company:</span> ${data.company.name}`;
    userCompany.classList.add('post_wrap-text');
    articleWrap.appendChild(userCompany);

    //coment wrap
    const comntWrap = document.createElement('div');
    comntWrap.classList.add('comments_wrap');
    containerEl.appendChild(comntWrap);

     //h3 todos:
     const wrapH3 = document.createElement('h3'); 
     wrapH3.classList.add('comments_wrap-title');
     wrapH3.innerText = 'TODOs:';
     comntWrap.appendChild(wrapH3);
    
     //todos completed
    todosData.forEach(el => {
        if(el.completed === true){
            const divDelectus = document.createElement('div');
            divDelectus.classList.add('todo_wrap');
            divDelectus.classList.add('completed');
            divDelectus.innerText = 'delectus aut autem';
            comntWrap.appendChild(divDelectus);
        }
    //todos not completed    
    });
    todosData.forEach(el => {
        if(el.completed === false){
            const divDelectus = document.createElement('div');
            divDelectus.classList.add('todo_wrap');
            divDelectus.innerText = 'delectus aut autem';
            comntWrap.appendChild(divDelectus);
        }
    });

    //h3 albums
    const albumaH3 =  document.createElement('h3');
    albumaH3.classList.add('needMArginTop')
    albumaH3.classList.add('comments_wrap-title');
    albumaH3.innerText = 'Albums:';
    containerEl.appendChild(albumaH3);

    //albums wrap
    const albumsDivWrap =  document.createElement('div');
    albumsDivWrap.classList.add('albums_wrap');
    containerEl.appendChild(albumsDivWrap);

    //5 alboms
    for(i = 1 ; i<=5 ; i++ ){
    const firstAlbumItem = document.createElement('a');
    firstAlbumItem.innerHTML = `<span>${albomData[i].title}</span>`;
    firstAlbumItem.setAttribute('href', `album.html?albumId=${i}`);
    firstAlbumItem.classList.add('album');
    albumsDivWrap.appendChild(firstAlbumItem)
    }
    
};

loadUserInfo();