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
    optArticleTagsSelector = 'post-tags .list';


  function generateTitleLinks() {
    const titleList = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */

    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
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

  function generateTags() {
    /* find all articles */
    const findArticles = document.querySelectorAll(optArticleSelector);
    console.log(findArticles);
    /* START LOOP: for every article: */
    for (let findArticle of findArticles) {
      /* find tags wrapper */
      const findTags = document.querySelector(optArticleTagsSelector);
      console.log(findTags);
      /* make html variable with empty string */
      let html = '';
      console.log(html);
      /* get tags from data-tags attribute */

      let articleTag = findArticle.getAttribute('data-tags');
      /* split tags into array */
      const articleTagsArray = articleTag.split(' ');

      console.log(articleTagsArray);
      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        /* generate HTML of the link */
        console.log(tag);
        const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        /* add generated code to html variable */
        html = html + tagHTML;
        console.log('co to jest' + html);
        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      const tagWrapperSelector = document.querySelectorAll(optArticleTagsSelector);
      tagWrapperSelector.innerHTML = html;
      console.log('mamo pomocy ' + html);
    }

    function tagClickHandler(event) {
      /* prevent default action for this event */
      event.preventDefault();
      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href');
      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = document.getAttribute(href);
      console.log('pokaz tag ' + tag);
      /* find all tag links with class active */
      const activeTags = tag.querySelectorAll('a.active[href^="#tag-"]');
      console.log('active ' + activeTags)
      /* START LOOP: for each active tag link */
      for (let activeTag of activeTags) {
        /* remove class active */
        activeTag.classList.remove('active');
        /* END LOOP: for each active tag link */
      }
      /* find all tag links with "href" attribute equal to the "href" constant */
        




      /* START LOOP: for each found tag link */

      /* add class active */

      /* END LOOP: for each found tag link */

      /* execute function "generateTitleLinks" with article selector as argument */
    }

    function addClickListenersToTags() {
      /* find all links to tags */

      /* START LOOP: for each link */

      /* add tagClickHandler as event listener for that link */

      /* END LOOP: for each link */
    }

    addClickListenersToTags();


















    /* END LOOP: for every article: */
  }

  generateTags();
  
}
