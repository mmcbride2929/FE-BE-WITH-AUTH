# currently working on

- when a user that is logged in and dislikes photos do not disappear (profile page)

- fix navbar bug with user profile icon
- heart hover isn't working
- single post page has duplicate edit delete buttons

# create post

# edit post

# home feed

# single post

# sign in / sign up

- can still access when logged in and forwarded after a few seconds

# landing page

# my profile / user profile

# page not found

# MISC

- if not logged in, create post/ specific post pages should forward to landing

- creating user bug
- pick color scheme
- do all on hovers, profile name, navButtons, etc

# Questions

// if fetchUser is an async function, will setLoading wait until fetchUser has completed to run?
useEffect(() => {
fetchUser()
setLoading(false)
}, [])
