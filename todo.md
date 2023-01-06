# currently working on

- when a user that is logged in and dislikes photos do not disappear (profile page)

- heart hover isn't working
- single post page has duplicate edit delete buttons
- went on profile one, and visiting profile two, clicking profile ones page title or the profile page button it does not navigate
- when scrolled down, clicking likes causes jitter on user page
- fix all loading code and make it consistent
- edit appearances of all loading

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

- logout bug

- do all on hovers, profile name, navButtons, etc

# Questions

// if fetchUser is an async function, will setLoading wait until fetchUser has completed to run?
useEffect(() => {
fetchUser()
setLoading(false)
}, [])
