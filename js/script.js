{
  'use strict';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    console.log('Link was clicked!');
    console.log(event);
    /*[DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);


    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';


  function generateTitleLinks(customSelector = '') {
    const titleList = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */
    console.log('custom is: ' + customSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('custom article is: ' + articles);
    let html = '';
    for (let article of articles) {

      const articleId = article.getAttribute('Id');
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);
      html = html + linkHTML;
      console.log(html);
    }




    titleList.innerHTML = html;




  }

  generateTitleLinks();
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

  function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles){
      /* find tags wrapper */
      const tagsList = article.querySelector(optArticleTagsSelector);
      console.log('tagsList is: ' + tagsList);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log('article: ' + articleTags);
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log('array: ' + articleTagsArray);
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){

        console.log('tag is: ' + tag);
        /* generate HTML of the link */
        const tagHtml = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        /* add generated code to html variable */
        html = html + tagHtml;
        console.log('html is: ' + html);
      /* END LOOP: for each tag */
     }
      /* insert HTML of all the links into the tags wrapper */
     tagsList.innerHTML = html;
     console.log('tagsList.innerHTML: ' + tagsList.innerHTML);
     
    /* END LOOP: for every article: */
   } 
  }
  
  generateTags();
  
  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log('tag: ' + tag);
    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('active is: ' + activeTagLinks);
    /* START LOOP: for each active tag link */
    for(let activeTagLink of activeTagLinks){

    
      /* remove class active */
      activeTagLink.classList.remove('active');
    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    let foundTagLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log('foundTagLinks is: ' + foundTagLinks);
    /* START LOOP: for each found tag link */
    for(let foundTag of foundTagLinks){

    
      /* add class active */
      foundTag.classList.add('active');
    /* END LOOP: for each found tag link */
  }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }
  
  function addClickListenersToTags(){
    /* find all links to tags */
    const links = document.querySelectorAll('.post-tags .list a');
    console.log('links are: ' + links);
    /* START LOOP: for each link */
    for(let link of links){
      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    }
  }
  
  addClickListenersToTags();

  function generateAuthors() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
      /* find tags wrapper */
      const authorList = article.querySelector(optArticleAuthorSelector);
      console.log('authorList: ' + authorList);
      /* make html variable with empty string */
      let html = '';
      /* get author from post-author class */
      const articleAuthor = article.getAttribute('data-author');
      console.log('articleAuthor: ' + articleAuthor);
      /* generate HTML of the link */
      const authorHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';
      /* add generated code to html variable */
      html = html + authorHTML;
      console.log('html: ' + html);
      /* insert HTML of all the links into the tags wrapper */
      authorList.innerHTML = html;
      console.log('authorList.innerHtml ' + authorList.innerHTML);
      /* END LOOP: for every article: */
    }
  }
  generateAuthors();
  function authorClickHandler(event){
     /* prevent default action for this event */
     event.preventDefault();
     /* make new constant named "clickedElement" and give it the value of "this" */
     const clickedElement = this;
     /* make a new constant "href" and read the attribute "href" of the clicked element */
     const href = clickedElement.getAttribute('href');
     
    /* make a new constant "author" and extract author from the "href" constant */
     const author = href.replace('#author', '');
     console.log('author is: ' + author);
     /* find all author links with class active */
     const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
     console.log('active is: ' + activeAuthorLinks);
     /* START LOOP: for each active tag link */
     for(let activeAuthorLink of activeAuthorLinks){
 
     
       /* remove class active */
       activeAuthorLink.classList.remove('active');
     /* END LOOP: for each active tag link */
     }
     /* find all author links with "href" attribute equal to the "href" constant */
     let foundAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
     console.log('foundAuthorLinks is: ' + foundAuthorLinks);
     /* START LOOP: for each found tag link */
     for(let foundAuthorLink of foundAuthorLinks){
 
     
       /* add class active */
       foundAuthorLink.classList.add('active');
     /* END LOOP: for each found tag link */
   }
     /* execute function "generateTitleLinks" with article selector as argument */
     generateTitleLinks('[data-author="' + author + '"]');
   };
   function addClickListenersToAuthors(){
    /* find all links to tags */
    const links = document.querySelectorAll('.post-author a');
    console.log('links are: ' + links);
    /* START LOOP: for each link */
    for(let link of links){
      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
    }
   }
   addClickListenersToAuthors();
}
