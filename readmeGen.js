

const generateREAD = (responses) =>
`
# ${responses.projectName}

## Table of Contents

1.  [Description](#description)
2.  [Instalation](#instalation)
3.  [Usage](#usage)
4.  [External support documentation](#externalDocumentation)
5.  [Tests](#tests)
6.  [Social](#social)
7.  [Plugins](#plugins)
8.  [License](#license)

## [Description](#description)
${responses.projectDescription}


## [Instalation](#instalation)


## [Usage](#usage)


## [External support documentation](#externalDocumentation)

- [Font Awesome](https://fontawesome.com/)<br />
- [W3School](https://www.w3schools.com/)<br />
- [Mozilla](https://developer.mozilla.org)<br />
- [READ.me](https://docs.readme.com/docs/linking-to-pages")<br />
- [GitHub](https://pages.github.com/)<br />
- [Git_cheat_sheet_pdf](https://education.github.com/git-cheat-sheet-education.pdf)<br />
- [BootsStrap](https://getbootstrap.com/docs/4.5/)<br />
- [jQuery](https://jquery.com/)<br />
- [JqueryUi](https://jqueryui.com/)<br />
- [MomentJs](https://momentjs.com/docs/#/displaying/format/)<br />
- [npm](https://www.npmjs.com/)


## [Tests](#tests)
N/A

## [Social](#social)
if you need any further information or support, please, send an email to: ${responses.userEmail}

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/${responses.githubUserName}) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](${responses.linkdinUrl})



## [Plugins](#plugins)
N/A

## [License](#license)
Created by ${responses.userName}
Please refer to the LICENSE in the repo.
`;