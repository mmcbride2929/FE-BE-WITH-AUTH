# currently working on
- display all users liked posts

- toggle between their liked posts and their own posts\*\*\*
- make fish photos clickable to the post

# create post

# edit post

# home feed

# single post

- NO LONGER NEED TO LINK TO SPECIES WHEN ON SINGLE PAGE

# sign in / sign up

- can still access when logged in and forwarded after a few seconds

# landing page

# my profile / user profile

- create toggle button\*\*\*
- toggle between their liked posts and their own posts\*\*\*
- add like, and conditional buttons to user feeds

# page not found

# MISC

- if not logged in, create post/ specific post pages should forward to landing
- when creating a post, and forwarded to feed, we still see 'post created/updated' momentarily

# Questions

// if fetchUser is an async function, will setLoading wait until fetchUser has completed to run?
useEffect(() => {
fetchUser()
setLoading(false)
}, [])
