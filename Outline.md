1. What is Draft.js?
2. Introduce two NPM modules based on Draft.js
  - React Draft Wysiwyg: https://github.com/jpuri/react-draft-wysiwyg/
    - The code example will be based on this module
  - medium-draft: https://github.com/brijeshb42/medium-draft
3. How to implement the view?
  - Baseline: `<Editor />`
  - Apply different options to customize the editor
4. How to convert the edited contents to HTML?
  - Use another module: https://github.com/jpuri/draftjs-to-html/
  - Can have an interface/ API to save the HTML
5. For React developers: What is the use of "state" for the editor?
  - Save the content as state such that previously saved content can be loaded to the editor later
6. Show our edit view - how do we combine the above components to revamp our edit view?
  - Reason: Improve writers' user experience
  - Challenge: How to integrate with our existing CMS?
  - Solution: React + Redux + Draft.js
