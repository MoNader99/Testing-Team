 exports.EmailID = "email";
exports.PasswordID = "pass";
exports.loginId="u_0_b";
//////////////////////////////////////////
///////SignUpSelectors All by Xpath//////
exports.SignUpbutton="//a[@href='/signup']";
exports.SignUpEmail="//input[@id='email']";
exports.SignUpConfirmEmail="//input[@id='confirm-email']";
exports.SignUpPassword="///input[@id='password']";
exports.SignUpDispName="//input[@id='username']";
exports.SignUpDayOfBirth="//input[@id='day']";
exports.SignUpMonthOfBirth="//select[@id='month']";
exports.SignUpMonthOfBirthNovember="//*[@id='month']/option[12]";
exports.SignUpyearOfBirth="//input[@id='year']";
exports.SignUpFemaleGender="//input[@value='female']";
exports.SignUpAccountType="//*[@id='account-type']/select";
exports.SignUpAccountTypeReg="//*[@id='account-type']/select/option[2]";
exports.SignUpAccountTypePrem="//*[@id='account-type']/select/option[3]";
exports.SignUpAccountTypeArtist="//*[@id='account-type']/select/option[4]";
exports.SignUpSubmitButton="//button[@id='signup-button']";
//////////////////////////////////////////////////
///////SignUpErrorMsgsSelectors All by Xpath//////
exports.SignUpInvalidEmailmsg="//p[@id='empty-email']";
exports.SignUpInvalidConfirmEmailmsg="//p[@id='empty-confirm-email']";
exports.SignUpInvalidPasswordmsg="//p[@id='empty-password']";
exports.SignUpInvalidDispNamemsg="//p[@id='empty-userame']";
exports.SignUpInvalidDayOfBirthmsg="//p[@id='empty-day']";
exports.SignUpInvalidMonthOfBirthmsg="//p[@id='empty-month']";
exports.SignUpInvalidyearOfBirthmsg="//p[@id='empty-year']";
exports.SignUpInvalidGendermsg="//p[@id='empty-gender']";
exports.SignUpInvalidAccountTypemsg="//p[@id='empty-account-type']";
/////////////////////////////////////////////////////////////////
////////////////HelpPageSelectors All by Xpath//////////////////
exports.HelpPageButton="//a[@href='/help']";
exports.AccountHelpButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[1]";
exports.PaymentHelpButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[2]";
exports.SubscriptionOptionsButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[3]";
exports.PrivacyAndSecurityButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[4]";
exports.VideotutorialsButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[1]";
exports.GettingstartedButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[2]";
exports.PlaylistsButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[3]";
exports.FeaturesButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[4]";
exports.SystemAndsettingsButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[5]";
exports.SpeakersButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[1]";
exports.TVsButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[2]";
exports.CarsButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[3]";
exports.GamingButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[4]";
exports.SmartWatchesButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[5]";
exports.GetSpotifyButton="//a[@href='/signup/']";
exports.BacktoHelpButton="";
//////////////////////////////////////////////
////////////////PremiumPageSelectors All by Xpath//////////////////
exports.Premiumbutton="";
exports.GetPremiumbutton="";
exports.GetPremiumbuttonAtTheEndOfThePage="";
//////////////////////////////////////////////
//Log in Selectors
exports.SignInbuttonLinkText = "Log in";
exports.EmailID = "email-input";
exports.PasswordID = "password-input";
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




 
//Webplayer Selectors
exports.GoToWebPlayerLinkText = "Web Player";
exports.NewPlaylistLinkText = "Create Playlist";
exports.CancelCreateNewPlaylistXpath = "//div[@id='popup']/div[3]/div/div/button"
exports.ExitCreateNewPlaylistXpath = "//div[@id='popup']/div/button/i"
exports.CreateNewPlaylistXpath = "//div[@id='popup']/div[3]/div/div[2]/a"
exports.InputNewPlaylistNameID="new-playlist-name"
