var fs = require("fs"); 

const getUsersWithPosts = async () => {
    // Fetch users from JSONPlaceholder
    const url = "https://jsonplaceholder.typicode.com/users"
    const usersResponse = await fetch(url);
    const users = await usersResponse.json();
    

    // Fetch posts for each user
    const usersWithPosts =await Promise.all( 
        users.map(async (user) => {
            const url1 = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}` 
            const userPostsResponse = await fetch(url1);
            const userPosts = await userPostsResponse.json();
            
            return {...user , userPosts}
        })
    );

    return usersWithPosts;
};



getUsersWithPosts()
  .then(result => {
    console.log('Users with Posts:', result);
    fs.writeFileSync("usersWithPosts.json" , JSON.stringify(result , null ,2));
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

