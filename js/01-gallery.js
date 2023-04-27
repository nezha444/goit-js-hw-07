import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')

const addGalleryItems = galleryItems.map(objItem =>{  
    const string = `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img 
            onclick="event.preventDefault()" 
            class="gallery__image" 
            src=${objItem.preview} 
            data-source=${objItem.original} 
            alt=${objItem.description}/>
        </a>
    </li>`
    return string
}).join('')


gallery.insertAdjacentHTML("beforeend", addGalleryItems)


gallery.addEventListener('click', openOriginalImg)

const openOriginalImg = (event) => {
    console.log("Greate picture created!")
    const originalImg = basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}">`)
    originalImg.show()

    gallery.addEventListener('keydown', keyEscape)
    function keyEscape (pressedKey){
        if (pressedKey.key === 'Escape'){
            console.log("Escape is pressed")
            originalImg.close()
            gallery.removeEventListener('keydown', keyEscape)
        }
    }
}

