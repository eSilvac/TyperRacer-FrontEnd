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
  `,
  createRace: `
    mutation CreateRace($racePayload: RaceInputType!) {
      createRace(racePayload: $racePayload) {
        race {
          id
          createdAt
        }
        quote {
          text
        }
      }
    }
  `
}

export default queries;
