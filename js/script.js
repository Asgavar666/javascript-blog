{
  'use strict';

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    
    console.log('Link was clicked!');
    console.log(event);
    /*[DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
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


  function generateTitleLinks(){
    const titleList = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */
  
    titleList.innerHTML = '';
      
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = ''; 
    for(let article of articles){
        
      const articleId = article.getAttribute('Id');
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle +  '</span></a></li>';
      console.log(linkHTML);
      html = html + linkHTML;
      console.log(html);
    }
      
      

      
    titleList.innerHTML = html;
      
      
    

  }

  generateTitleLinks();
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  
  function generateTags(){
    /* find all articles */
    const findArticles = document.querySelectorAll(optArticleSelector);
    console.log(findArticles);
    /* START LOOP: for every article: */
    for(findArticle of findArticles){
      /* find tags wrapper */
      const findTags = document.querySelector(optArticleTagsSelector);
      console.log(findTags);
      /* make html variable with empty string */
      let html = '';
      console.log(html);
      /* get tags from data-tags attribute */
      
      let articleTag = findArticle.getAttribute('data-tags');
      
      articleTag.split(' ');
      console.log(articleTag);
    }
      
  
      
  
      
  
      /* split tags into array */
  
      /* START LOOP: for each tag */
  
        /* generate HTML of the link */
  
        /* add generated code to html variable */
  
      /* END LOOP: for each tag */
  
      /* insert HTML of all the links into the tags wrapper */
  
    /* END LOOP: for every article: */
  }
  
  generateTags();
}
