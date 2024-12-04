$(document).ready(function() {
    // Show default content
    $('.page-content').hide();
    $('#reason-and-resolution').fadeIn();

    $('#nav a').on('click', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        if (page) {
            $('.page-content').hide();
            $('#' + page).fadeIn(900);
            $('#nav a').removeClass('selected');
            $(this).addClass('selected');

            // Initialize haiku when 'sandbox' page is displayed
            if (page === 'sandbox') {
                if (!window.haikuInitialized) {
                    initializeHaiku();
                    window.haikuInitialized = true;
                }
            }
        }
    });

    // Smooth scroll for chapter links
    $('.chapter-nav a').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 20
        }, 800);
    });

    // Updated modal content object with additional entries
    const modalContent = {

        'pershingx': {
            'image': 'https://miro.medium.com/v2/resize:fit:2560/format:webp/1*OenHCQmGa10wpCzR8o9PtA.png',
            'description': `
                <h2>BNY Mellon - Pershing X</h2>
                <h3>Publicis Sapient</h3>
                <label>Senior User Experience Designer II</label>
                <p>Pershing X is a project involving financial technology solutions for modern wealth management. It focuses on delivering integrated platforms for financial advisors and their clients.</p><br>
            `
        },
        'tiktok-business': {
            'image': 'https://miro.medium.com/v2/resize:fit:2000/format:webp/1*gC_cmPMoCAMgckq051lwZg.png',
            'description': `
                <h2>Headless Content Architecture for TikTok For Business</h2>
                <h3>Code & Theory</h3>
                <label>Senior Interaction Designer</label>
                <p>Enhancing content delivery and scalability through a headless CMS architecture tailored for TikTok's business platform.</p><br>
            `
        },
        'gnc-shopify': {
            'image': 'https://miro.medium.com/v2/resize:fit:2400/format:webp/1*ijfhJkgMsBKeSl3rIzi0XQ.png',
            'description': `
               <h2>Shopify Overhaul for General Nutrition Centers (GNC)</h2>
                <h3>Elva Design Group</h3>
                <label>Senior User Experience Designer</label>
                <p>Revamping the e-commerce experience for GNC by overhauling their platform to improve user engagement and sales conversion.</p><br>
            `
        },
        'salesforce-integration': {
            'image': 'https://i.ibb.co/0DPv3vQ/Frame-4349.png',
            'description': `

               <h2>Salesforce Integrations</h2>
                <h3>PFSweb, LiveArea</h3>
                <label>Senior User Experience Designer</label>
                <p>Streamlining CRM processes for YETI, West Marine, Aquasana, Hardinge, & Simpson Strong-Tie through advanced Salesforce integrations {aka, "Solutions Architecture"}.</p><br>
            `
        },
        'pharma-ux': {
            'image': 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9EZTgvxttDXOacHzI9axeQ.gif',
            'description': `
               <h2>UX + ADA Compliance for Pharma and Non-Profit</h2>
                <h3>FlightPath</h3>
                <label>Senior User Experience Designer</label>                <p>Ensuring accessibility and user-friendliness by implementing UX best practices and ADA compliance for pharmaceutical and non-profit organizations.</p><br>
            `
        },
        'terrarium-app': {
            'image': 'https://miro.medium.com/v2/resize:fit:3962/format:webp/1*TutCePQB0bSCoMfMTWJb-Q.png',
            'description': `
               <h2>A Ground Up 0-to-1 MVP iOS Video Sharing App</h2>
                <h3>O3 World</h3>
                <label>User Experience Designer</label>                        
                <p>Developed an MVP iOS app focusing on user engagement and seamless video experiences, taking it from concept to launch.</p><br>
            `
        },
        'design-edu': {
            'image': 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*vkU8lZmqnOHgheOsK0qtrw.png',
            'description': `
                <h2>Design 101 for .EDU</h2>
                <h3>One Sixty Over Ninety</h3>
                <label>Interaction Designer</label>      
                <p>Introducing foundational design principles to educational platforms to enhance learning experiences and engagement.</p><br>
            `
        },
        'design-by-data': {
            'image': 'https://i.ibb.co/KLPDrZQ/image-5-Copy.png',
            'description': `
                <h2>Design by Data</h2>
                <h3>Leadnomics</h3>
                <label>Senior Web Designer</label>                      <p>Leveraging analytics to inform and enhance design decisions, creating data-driven design strategies.</p><br>
            `
        },
        'pratt': {
            'image': 'https://miro.medium.com/v2/resize:fit:4466/format:webp/1*kY6yg0chz7Puu-WgrlYNMA.jpeg',
            'description': `
                <h2>Pratt Institute of Art</h2>
                <h3>BFA, Animation & Motion Graphics {Incomplete}; 3.2 GPA</h3>
                <label>Circa: 2002-03; 2004-05</label>                      <p>"Stop-out", not 'drop-out'. Ask me before you judge me, please.</p><br>
            `
        },
        // Add more entries as needed
    };

    // Modal functionality
    $('.modal-link').on('click', function(e) {
        e.preventDefault();
        var linkId = $(this).attr('id');
        var content = modalContent[linkId];

        if (content) {
            $('#modal-image').attr('src', content.image);
            $('#modal-description').html(content.description);
            $('#modal').fadeIn();
        }
    });

    // Close modal functionality
    $('.close-button').on('click', function() {
        $('#modal').fadeOut();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').fadeOut();
        }
    });

    // Scroll to top functionality
    function scrollToTop() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    }

    $('#back-to-top-desktop, #back-to-top-mobile').on('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });

    // Show or hide back to top button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.modal-link').on('mouseover', function() {
        const imageUrl = this.getAttribute('data-image');
        const preview = document.querySelector('.image-preview');
        preview.style.backgroundImage = `url(${imageUrl})`;
        preview.style.top = `${this.getBoundingClientRect().top}px`;
        preview.style.left = `${this.getBoundingClientRect().right + 10}px`;
        preview.style.display = 'block';
    }).on('mouseout', function() {
        document.querySelector('.image-preview').style.display = 'none';
    });
});

// Haiku JavaScript Logic
function initializeHaiku() {
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }

        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise(resolve => (this.resolve = resolve));

            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }

            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }

        update() {
            let output = '';
            let complete = 0;
            for (let i = 0; i < this.queue.length; i++) {
                let { from, to, start, end, char } = this.queue[i];

                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class='dud'>${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }

        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    const phrases = [

        ['Hi, got a minute?', "I'm Zack Gort and I design", 'experiences'],
        ['Hi, got a minute?', "I'm Zack Gort and I design", 'web interfaces'],
        ['Hi, got a minute?', "I'm Zack Gort and I design", 'for any device'],

        ['Everything from', 'creative ideation', 'to big red buttons'],
        ['Everything from', 'creative ideation', '- responsive websites'],
        ['Everything from', 'creative ideation', '- intuitive forms'],

        ['People I work with', 'say I have a good mind for', 'functional design'],
        ['People I work with', 'say I have a good mind for', 'clean typography'],
        ['People I work with', 'say I have a good mind for', 'usability'],

        ['Ideas arent pulled', 'from thin air, but founded in', 'whiteboard discussions'],
        ['Ideas arent pulled', 'from thin air, but founded in', 'AB split-testing'],
        ['Ideas arent pulled', 'from thin air, but founded in', 'trial and error'],

    ];

    let currentIndex = 0;
    const lines = document.querySelectorAll('#sandbox .text-line');
    const scramblers = Array.from(lines).map(el => new TextScramble(el));

    function setTextLines() {
        const [line1, line2, line3] = phrases[currentIndex];
        lines[0].textContent = line1;
        lines[1].textContent = line2;
        scramblers[2].setText(line3).then(() => {
            setTimeout(nextHaiku, 2000);
        });
    }

    function nextHaiku() {
        currentIndex = (currentIndex + 1) % phrases.length;
        setTextLines();
    }

    setTextLines();
}

// Inside your $(document).ready(function() { ... }) or equivalent
if (page === 'sandbox') {
    if (!window.haikuInitialized) {
        initializeHaiku();
        window.haikuInitialized = true;
    }
}


document.addEventListener('DOMContentLoaded', function() {
   // Array of possible statements
   const statements = [
      "& in the end, it's not the years in your life that count; it's the life in your years. — Abraham Lincoln",
      "& when you want something, all the universe conspires in helping you to achieve it. — Paulo Coelho",
      "& the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom. — Anaïs Nin",
      "& in that moment, I swear we were infinite. — Stephen Chbosky, The Perks of Being a Wallflower",
      "& though she be but little, she is fierce. — William Shakespeare, A Midsummer Night's Dream",
      "& now that you don’t have to be perfect, you can be good. — John Steinbeck, East of Eden",
      "& I think to myself, what a wonderful world. — Louis Armstrong",
      "& still, after all this time, the sun never says to the earth, ‘You owe me.’ Look what happens with a love like that. It lights the whole sky. — Hafez",
      "& when it rains on your parade, look up rather than down. Without the rain, there would be no rainbow. — Gilbert K. Chesterton",
      "& when you can't go back, you have to worry only about the best way of moving forward. — Paulo Coelho, The Alchemist",
      // ... (rest of your statements)
   ];

   // Access the button and list elements
   const button = document.getElementById('generate-statement-btn');
   const statementList = document.getElementById('statement-list');

   // Ensure both button and list are found in the DOM
   if (button && statementList) {
      button.addEventListener('click', function() {
         // Pick a random statement
         const randomStatement = statements[Math.floor(Math.random() * statements.length)];
         // Create a new list item element
         const listItem = document.createElement('li');
         listItem.textContent = randomStatement;
         listItem.style.fontFamily = 'PT Mono, monospace';
         listItem.style.color = '#262626';
         listItem.style.padding = '5px 0';

         // Append the statement to the list
         statementList.appendChild(listItem);
      });
   } else {
      console.error("Button or list element not found.");
   }
});

console.clear();

const TAIL_LENGTH = 20;

const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0});

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle') ;
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

function updateCursor() {  
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });
    
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    
    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor)
}

document.addEventListener('mousemove', onMouseMove, false);

initCursor();
updateCursor();


function setTextLines() {
    const { lines: haikuLines, image } = phrases[currentIndex];
    const [line1, line2, line3] = haikuLines;

    // Preload the image
    const img = new Image();
    img.src = image;
    img.onload = () => {
        haikuImage.src = image;

        // Set the text lines
        lines[0].textContent = line1;
        lines[1].textContent = line2;

        scramblers[2].setText(line3).then(() => {
            setTimeout(nextHaiku, 3000);
        });
    };
}



// AUDIO PLAYER TEST //





document.querySelectorAll('a[href="https://ifimaybefrank.com/"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link.href, '_blank');
  });
});
