const savedUsers = Object.freeze({
  get:() => JSON.parse(localStorage.getItem('savedUsers')) || [],

  set: (user) => {
    const users = savedUsers.get()
    const alreadySaved = users.some(({ email }) => email === user.email)

    if (alreadySaved) return

    users.push(user)
    const stringifiedUsers = JSON.stringify(users)

    localStorage.setItem('savedUsers', stringifiedUsers)
  }
})

export { savedUsers }
