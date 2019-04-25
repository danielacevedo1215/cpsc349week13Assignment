(function (window){
    'use strict'

    const b = document.querySelector('body')

    // Get post to load form jsonplaceholder
    $.getJSON("https://jsonplaceholder.typicode.com/posts", (postData) => {
        postData.forEach((p) => {
            p.body = p.body.replace(/\n/gi, '<br/>');
        // Display articles
        $(b).append(`<article>
            <h2 data-posts="title">${p.title}</h2>
            <p data-posts="body">${p.body}</p>
            <button data-post="id" value="${p.id}" type="button">Show Comments</button>
            <section class="comments" id="comments-${p.id}" hidden>
            <h3>Comments</h3>
            </section>
            </article>
        `);
    });
    // show comments button
    const BUTTON_SELECTOR = '[data-posts="id"]';
    let buttons = document.querySelectorAll(BUTTON_SELECTOR);
    buttons.forEach(function (button) {
      'use strict';

      let sectionSelector = `#comments-${button.value}`;
      let commentSection = document.querySelector(sectionSelector);

      button.addEventListener('click', function (event) {
        if (commentSection.hidden) {
          commentSection.hidden = false;
          button.textContent = 'Hide comments';
            
            $(commentSection).html('<h3>Comments</h3>');
             // Get comments to load form jsonplaceholder
            $.getJSON(`https://jsonplaceholder.typicode.com/comments?postId=1`, (comments) => {
              comments.forEach((comm) => {
                comm.b = comm.body.replace(/\n/gi, '<br/>');
                $(commentSection).append(`<p data-comments="body">${comm.pc}</p>
                <address data-comments="name">
                    <a data-comments="email" href="mailto:${comm.email}">${comm.name}</a>
                </address>`);
              });
            });
          
        } else {
          commentSection.hidden = true;
          button.textContent = 'Show comments';
        }

        event.preventDefault();
      });
    });
  });
})(window);
