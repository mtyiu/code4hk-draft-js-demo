1. What is Draft.js?
2. Introduce two NPM modules based on Draft.js
	1. React Draft Wysiwyg: https://github.com/jpuri/react-draft-wysiwyg/
		1. The code example will be based on this module
	2. medium-draft: https://github.com/brijeshb42/medium-draft
3. How to implement the view?
	1. Baseline: `<Editor />`
	2. Apply different options to customize the editor
4. How to convert the edited contents to HTML?
	1. Use another module: https://github.com/jpuri/draftjs-to-html/
	2. Can have an interface/ API to save the HTML
5. For React developers: What is the use of "state" for the editor?
	1. Save the content as state such that previously saved content can be loaded to the editor later
6. Show our edit view - how do we combine the above components to revamp our edit view?
	1. Reason: Improve writers' user experience
	2. Challenge: How to integrate with our existing CMS?
	3. Solution: React + Redux + Draft.js
