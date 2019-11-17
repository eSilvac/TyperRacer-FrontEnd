const queries = {
  getCurrentUser: (token) => {
    return `
      query GetCurrentUser {
        currentUser(token: "${token}") {
          id
          username
          email
        }
      }
    `
  },
  createUser: `
    mutation CreateNewUser($userPayload: UserRegisterInputType!) {
      registerUser(userPayload: $userPayload) {
        token
      }
    }
  `, 
  createSession: `
    mutation CreateUserSession($userPayload: UserLoginInputType!) {
      loginUser(userPayload: $userPayload) {
        token
      }
    }
  `
}

export default queries;
