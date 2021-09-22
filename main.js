(function() {

    'use strict'

    const generateHTMLfromObject = (gitData, templateSelector, htmlSelector) => {
        const rawTemplate = document.querySelector(templateSelector).innerHTML;
        const compiledTemplateFunc= Handlebars.compile(rawTemplate);
        const ourGeneratedHTML = compiledTemplateFunc(gitData);
        document.querySelector(htmlSelector).innerHTML = ourGeneratedHTML;
    }

    const generateHTMLfromArr = (gitData, templateSelector, htmlSelector) => {
        const rawTemplate = document.querySelector(templateSelector).innerHTML;
        const compiledTemplateFunc= Handlebars.compile(rawTemplate);
        const ourGeneratedHTML = compiledTemplateFunc({gitData});
        console.log(gitData);
        document.querySelector(htmlSelector).innerHTML = ourGeneratedHTML;
    }

    fetch(`https://api.github.com/users/ggroshansii`)
        .then(response => response.json())
        .then(data => generateHTMLfromObject(data, '#git-bio-template', '.git-bio'))


    // fetch(`https://api.github.com/users/ggroshansii/orgs`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    fetch(`https://api.github.com/users/ggroshansii/repos`)
        .then(response => response.json())
        .then(data => generateHTMLfromArr(data, '#git-repo-template', '.git-repo'))


})()