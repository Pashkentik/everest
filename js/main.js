const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('scroll_show');
    } else {
      entry.target.classList.remove('scroll_show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.scroll_hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownMenu() {
  document.getElementById("dropdown").classList.toggle("show_dropdown");
  
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropdown')) {

  var dropdowns = document.getElementsByClassName("dropdown_content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show_dropdown')) {
      openDropdown.classList.remove('show_dropdown');
    }
  }
}
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownMenuFooter() {
  document.getElementById("dropdown_footer").classList.toggle("show_dropdown");
}


function dropdownMenuMobileFooter() {
  document.getElementById("mobile_dropdown_footer").classList.toggle("show_dropdown");
}


class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }

  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.faq_list_item_group_title');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.faq_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('faq_show') : null;
        }
      }
      elHeader.parentElement.classList.toggle('faq_show');
    });
  }
}

new ItcAccordion('#accordion_1');


function mobileMenuToggle() {
  document.getElementById("mobile_menu_popup").classList.toggle("show_menu_popup");
  document.getElementById("buttonActive").classList.toggle("change_btn");
}
