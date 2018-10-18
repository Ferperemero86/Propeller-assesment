
// Set toggle behaviour to the accordion.

// Get all the accordion elements.
const menuItem = document.querySelectorAll('li');

    //Loop all the elements
    for(var i=0; i<menuItem.length; i++) {

        //Asgin a click event to every element.
        menuItem[i].addEventListener('click', function(evt) {
            //If the element has been clicked already remove clicked class and hide content.
            const titleSection = this.firstElementChild;

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
                this.lastElementChild.className = 'content';
                titleSection.lastElementChild.className = 'fas fa-angle-down';
            //Otherwise add clicked class and show content.
            } else {
                this.classList.add('clicked');
                this.lastElementChild.className = 'show';
                titleSection.lastElementChild.className = 'fas fa-angle-up';
            }
        });

    }

    //Get JSON content

    //Use function callback
    function getJSON(url,callback,error) {
        var xhr = new XMLHttpRequest();
        //Execute callback whenever readyState changes
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                   callback(JSON.parse(xhr.responseText));
            }
        }
    };

    xhr.open("GET",url,true);
    xhr.send();

   }


   //Get json content and add it into the DOM
   getJSON(
       'https://design.propcom.co.uk/buildtest/accordion-data.json',
       function(data) {
         for (var i=0; i < menuItem.length; i++) {
           menuItem[i].lastElementChild.innerHTML = "<p>" + data.blocks[i].content + "</p>"
           let headings = document.querySelectorAll('h3');
           headings[i].innerHTML = data.blocks[i].heading;
         }
       }
   );
