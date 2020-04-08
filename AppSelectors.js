 exports.EmailID = "email";
exports.PasswordID = "pass";
exports.loginId="u_0_b";
//////////////////////////////////////////
///////SignUpSelectors All by Xpath//////
exports.SignUpbutton="//a[@href='/signup']";
exports.SpotifyButton="//*[@id='logo']/a"
exports.SignUpEmail="//input[@name='email']";
exports.SignUpPassword="//input[@name='password']";
exports.SignUpDispName="//input[@name='username']";
exports.SignUpDayOfBirth="//input[@name='day']";
exports.SignUpMonthOfBirth="//select[@name='month']";
exports.SignUpMonthOfBirthNovember="//*[@name='month']/option[12]";
exports.SignUpyearOfBirth="//input[@name='year']";
exports.SignUpFemaleGender="//input[@value='F']";
exports.SignUpAccountType="//select[@name='accountType']";
exports.SignUpAccountTypeReg="//*[@id='signup-form']/div[3]/div/select/option[2]";
exports.SignUpAccountTypePrem="//*[@id='signup-form']/div[3]/div/select/option[3]";
exports.SignUpAccountTypeArtist="//*[@id='signup-form']/div[3]/div/select/option[4]";
exports.SignUpSubmitButton="//button[@id='signup-button']";
exports.SignUpLogInButton="//a[@href='/logIn']";
//////////////////////////////////////////////////
///////SignUpErrorMsgsSelectors All by Xpath//////
exports.SignUpInvalidEmailmsg="//p[@id='empty-email']";
exports.SignUpInvalidEmailTokenmsg="//*[@id='root']/div/div/div[2]/div/h2[1]";
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
exports.InputNewPlaylistNameID = "new-playlist-name"
exports.NewPlaylistPopUpID ="popup"
//exports.NewPlaylistPopUpXpath = "//a[contains(text(),'Create Playlist')]"
//exports.NewPlaylistPopUpNotActiveXpath = "//a[contains(text(),'Create Playlist')]"


//Log in Selectors
exports.SignInbuttonLinkText = "Log in";
exports.EmailID = "email-input";
exports.PasswordID = "password-input";
exports.LoginID = "login-button";
exports.LoginWithFacebookID = "facebook-button"

exports.NoEmailOrUsernameEnteredXpath = "//p[@id='missing-email']";
exports.NoPasswordEnteredXpath = "//p[@id='missing-password']";
//exports.IncorrentUsernameOrPasswordID = "//*[@class='content']/div[2]/div/p/span";


//Log out Selectors
exports.ProfileXpath = "//a[contains(text(),'Profile')]";
exports.LogoutFromProfileXpath = "//a[contains(text(),'Sign out')]";
