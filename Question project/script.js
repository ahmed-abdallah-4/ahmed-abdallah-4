/*
Tasks
  -onclick to header display accordion content
  -show/hide  +/- buttons
*/


const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) =>  {
        console.log(item);
        const content=item.querySelector(".accordion-content");
        const header = item.querySelector(".accordion-header");
        const toggleButton = item.querySelector(".toggle-icon");


        header.addEventListener("click", () => {
            (item.querySelector(".accordion-content")).classList.toggle("active");
        if (content.classList.contains("active")){
            toggleButton.innerHTML="-";
        }else {
            toggleButton.innerHTML="+";
        }
        
        });
    });