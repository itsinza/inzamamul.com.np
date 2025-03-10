// typing animation
var typed = new Typed(".typing",{
  strings: ["", "Freelance Web Designer", "Web Developer", "Graphic Designer", "Tech Enthusiast", "Content Creator"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
// Aside
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function()
  {
    removeBackSection();
    for(let j=0; j<totalNavList; j++)
    {
      if(navList[j].querySelector("a").classList.contains("active"))
      {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
    if(window.innerWidth < 1200)
    {
      asideSectionTogglerBtn();
    }
  })
}
function removeBackSection()
{
  for(let i=0; i<totalSection; i++)
    {
      allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
  allSection[num].classList.add("back-section");
}
function showSection(element)
{
  for(let i=0; i<totalSection; i++)
  {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
  for(let i=0; i<totalNavList; i++)
  {
  navList[i].querySelector("a").classList.remove("active");
  const target = element.getAttribute("href").split("#")[1];
  if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
  {
    navList[i].querySelector("a").classList.remove("active");
  }
  }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>
{
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++ )
  {
    allSection[i].classList.toggle("open");
  }
}

document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = event.target;
  const data = new FormData(form);
  const responseMessage = document.getElementById('response-message');

  try {
      const response = await fetch('https://formspree.io/f/movandrz', {
          method: 'POST',
          body: data,
          headers: {
              'Accept': 'application/json'
          }
      });

      if (response.ok) {
          responseMessage.textContent = 'Thank you! Your message has been sent.';
          form.reset(); // Clear the form after submission
      } else {
          responseMessage.textContent = 'Oops! There was a problem with your submission.';
      }
  } catch (error) {
      responseMessage.textContent = 'Oops! There was a problem with your submission.';
  }
});

document.querySelector(".home").addEventListener("click", function()
{
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})