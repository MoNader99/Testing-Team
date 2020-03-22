exports.EmailID = "email";
exports.PasswordID = "pass";
exports.loginId="u_0_b";
///////SignUpSelectors//////
exports.SignUpbutton="//a[@data-ga-action='sign-up']";
exports.SignUpEmail="//input[@id='register-email']";
exports.SignUpConfirmEmail="//input[@id='register-confirm-email']";
exports.SignUpPassword="//input[@id='register-password']";
exports.SignUpDispName="//input[@id='register-displayname']";
exports.SignUpDayOfBirth="//input[@id='register-dob-day']";
exports.SignUpMonthOfBirth="//select[@id='register-dob-month']";
exports.SignUpMonthOfBirthNovember="//option[@value='11']";
exports.SignUpyearOfBirth="//input[@id='register-dob-year']";
exports.SignUpFemaleGender="//input[@id='register-female']";
exports.SignUpSubmitButton="//a[@id='register-button-email-submit']";
///////SignUpErrorMsgsSelectors//////
exports.SignUpInvalidEmailmsg="//*[@id='js-register-with-email']/fieldset/ul/li[1]/label[2]";
exports.SignUpInvalidConfirmEmailmsg="//*[@id='js-register-with-email']/fieldset/ul/li[2]/label[2]";
exports.SignUpInvalidPasswordmsg="//*[@id='js-register-with-email']/fieldset/ul/li[3]/label[2]";
exports.SignUpInvalidDispNamemsg="//*[@id='js-register-with-email']/fieldset/ul/li[4]/label[2]";
exports.SignUpInvalidDayOfBirthmsg="//*[@id='li-dob']/label[2]";
exports.SignUpInvalidMonthOfBirthmsg="//*[@id='li-dob']/label[3]";
exports.SignUpInvalidyearOfBirthmsg="//*[@id='li-dob']/label[4]";
exports.SignUpInvalidGendermsg="//*[@id='li-gender']/label[4]";


//Log in Selectors
exports.SignInbuttonXbath = "//a[contains(text(),'Log In')]";

exports.EmailID = "login-username";
exports.PasswordID = "login-password";
exports.RememberMeCss = ".checkbox > .ng-binding";
exports.LoginID = "login-button";

exports.NoEmailOrUsernameEnteredXpath = "//*[@name='$parent.accounts']/div/div/div/label";
exports.NoPasswordEnteredXpath = "//*[@name='$parent.accounts']/div[2]/div/div/label";
exports.IncorrentUsernameOrPasswordXpath = "//*[@class='content']/div[2]/div/p/span";

//Log out Selectors
exports.ProfileTitleCss = ".mh-profile-title";
exports.LogoutLinkText = "Log Out";

//Edit Profile Selectors
exports.EditProfileButtonXbath ='//*[@id="account-csr-container"]/div/article[1]/div/a';

exports.EditProfileEmailXbath = '//*[@id="profile_email"]';
exports.EditProfileEmailMsgErrorXbath ='//*[@id="profile"]/div[1]/label[2]';

exports.EditProfileGenderXbath ='//*[@id="profile_gender"]';

exports.EditProfileDayOfBirthXbath = "//select[@id='profile_birthdate_day']/option[@value='1']";
exports.EditProfileMonthOfBirthXbath ="//select[@id='profile_birthdate_month']/option[@value='2']";
exports.EditProfileYearOfBirthXbath = "//select[@id='profile_birthdate_year']/option[@value='2001']";

exports.EditProfileMobileNumberXbath = '//*[@id="profile_mobile_number"]';

exports.EditProfileSaveButton = '//*[@id="profile_save_profile"]';
exports.EditProfileCancelButton = '//*[@id="profile_cancel"]';

exports.EditProfilePasswordMsgErrorXbath = '//*[@id="profile"]/div[1]';
exports.EditProfilePasswordXbath ='//*[@id="profile_confirmPassword"]';

exports.EditProfileSuccessMessageXbath ='/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div/div[1]/div[1]';




