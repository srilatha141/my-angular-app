
// client Id -- > 86b4f52d-2b58-4319-8e6e-781f7b960da2
// tenant Id --> 33c688d4-d094-4193-875d-649e1c78437f
export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '86b4f52d-2b58-4319-8e6e-781f7b960da2',
            authority: 'https://login.microsoftonline.com/33c688d4-d094-4193-875d-649e1c78437f'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};