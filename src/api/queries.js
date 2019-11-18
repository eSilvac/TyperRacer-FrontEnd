const queries = {
  getCurrentUser: (token) => {
    return `
      query GetCurrentUser {
        currentUser(token: "${token}") {
          id
          username
          email
          admin
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
  `,
  createQuote: `
    mutation CreateQuote($quotePayload: QuoteInputType!) {
      createQuote(quotePayload: $quotePayload) {
        id 
      }
    }
  `
}

export default queries;
