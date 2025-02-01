function introduceLoadUi() {
  const elements = {
    title: document.querySelector(".title"),
    statement: document.querySelector(".statement"),
    profil_image: document.querySelector(".profil-image"),
    profil_component: document.querySelector(".profil-component"),
    component: document.getElementById("introduce"),
    button: document.getElementById("showAboutMe"),
    backButton: document.getElementById("backButton"),
  };

  const screenWidth = window.innerWidth;

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function toggleTransform(element, transformValue ) {
    if (element.style.transform === transformValue) {
      element.style.transform = "";
    } else {
      element.style.transform = transformValue;
    }
  }

  function toggleClass(element, className) {
    element.classList.toggle(className);
  }

   function animateElements() {
    toggleClass(elements.title, "transform-right-title");
  

    toggleClass(elements.statement, "transform-right-title");
  

    toggleClass(elements.profil_component, "transform-left");
    

    toggleClass(elements.profil_image, "tranform-profil");
    
  }

  elements.button.addEventListener("click", async () => {
    
    animateElements();
    toggleTransform(elements.component, "translateX(100%)");
    toggleTransform(elements.backButton, screenWidth <= 768 ? "translateX(-600px) translateY(80px)" : "translateX(-2000px)");
  });

  window.addEventListener("load", () => {
    elements.component.classList.toggle("active");
  });
}

function loadUI() {
  window.onload = async () => {
    const button_contact = document.querySelector(".contact-button");

    const tranformButton_contact = !button_contact.classList.contains(
      "contact-button-transform"
    )
      ? button_contact.classList.add("contact-button-transform")
      : button_contact.classList.remove("contact-button-transform");
  };
}

function contactButtonOnClick() {
  const button_contact = document.querySelector(".contact-button");
  const linkA = document.getElementById("contact-link");
  const link_Social_Media = document.getElementById("social-media-wa");
  const link_Social_Media2 = document.getElementById("social-media-instagram");

  button_contact.addEventListener("click", async (e) => {
    button_contact.classList.toggle("active");
    linkA.classList.toggle("anu");
    link_Social_Media.classList.toggle("active");
    link_Social_Media2.classList.toggle("active");
  });
}

function scrollProject() {
  const container = document.getElementById('project-container');
  
  const contents = Array.from(container.querySelectorAll('.content'));
  window.addEventListener('scroll', () => {
    contents.forEach((content) => {
      let screen = window.innerHeight;
      let position = content.getBoundingClientRect().top;
      
      if (position < screen - 100 ) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
}

function sliderImage() {
  const container = document.getElementById("gallery-container");
  const itemsContainer = Array.from(
    container.querySelectorAll(".gallery-item")
  );
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const updateGallery = () => {
    itemsContainer.forEach((item) => {
      item.classList.remove(`gallery-item-1`);
      item.classList.remove(`gallery-item-2`);
      item.classList.remove(`gallery-item-3`);
      item.classList.remove(`gallery-item-4`);
      item.classList.remove(`gallery-item-5`);
    });

    itemsContainer.forEach((item, i) => {
      item.classList.add(`gallery-item-${i + 1}`);
    });
  };

  
  window.addEventListener('scroll', () => {
    itemsContainer.forEach((item, i) => {
      let screen = window.innerHeight;
      let position = item.getBoundingClientRect().top;

      item.classList.remove(`gallery-item-${i + 1}`);

      if (position < screen - 300) {
        item.classList.add(`gallery-item-${i + 1}`);
      }
    });
  });
  

  nextButton.addEventListener("click", () => {
    const firstItem = itemsContainer.shift();
    itemsContainer.push(firstItem);
    updateGallery();
  });

  prevButton.addEventListener("click", () => {
    const lastItem = itemsContainer.pop();
    itemsContainer.unshift(lastItem);
    updateGallery();
  });



}



scrollProject();
loadUI();
sliderImage();
introduceLoadUi();
contactButtonOnClick();
