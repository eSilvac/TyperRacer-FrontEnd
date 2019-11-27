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
  getRace: (id) => {
    return `
      query GetRace {
        getRace(id: "${id}") {
          race {
            id
            status
          }
          quote {
            text
          }
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
          status
        }
        quote {
          text
        }
      }
    }
  `,
  createParticipant: `
    mutation CreateParticipant($participantPayload: ParticipantInputType!) {
      createParticipant(participantPayload: $participantPayload) {
        participant {
          id
        }
        timing {
          toStart
          toEnd
          current
        }
      }
    }
  `
}

export default queries;
