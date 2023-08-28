// user register validation validate

function userRegisterValidation({userName, userAge, image_url}) {
    console.log(image_url);

    const userRegError = {};
    if (!userName) {
        userRegError.userName = '사용자 이름이 입력되지 않았습니다.';
    }

    if (!userAge) {
        userRegError.userAge = '사용자 나이가 입력되지 않았습니다.';
    }
    return userRegError;
}// userRegisterValidation

export default userRegisterValidation;