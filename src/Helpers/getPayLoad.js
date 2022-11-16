/// J W T 
export function parseJwt ( token,rol ,TokenAcet) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');

    var UserStyle = {
        "token": JSON.parse(window.atob(base64, rol)), 
        "rol": rol,
        "TokenA":TokenAcet,
    };

    return UserStyle
};
