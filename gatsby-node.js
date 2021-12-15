const path = require("path");
exports.onCreatePage = async ({page, actions}) =>{
  const {createPage} = actions
  console.log('Page - ' + page.page);
  if(page.path.match(/^\/users/)){
      createPage({
          path: "/users",
          matchPath: "/users/:id",
          component: path.resolve("src/pages/users.js")
      })
  }
}