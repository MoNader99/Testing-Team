 exports.EmailID = "email";
exports.PasswordID = "pass";
exports.loginId="u_0_b";
//////////////////////////////////////////
///////SignUpSelectors All by Xpath//////
exports.SignUpbutton="//a[@href='/signup']";
exports.SpotifyButton="//*[@id='logo']/a";
exports.SignUpLabelText="//*[@id='root']/div/div/div[2]/div/h2[2]";
exports.SignUpEmail="//input[@name='email']";
exports.SignUpPassword="//input[@name='password']";
exports.SignUpDispName="//input[@name='username']";
exports.SignUpDayOfBirth="//input[@name='day']";
exports.SignUpMonthOfBirth="//select[@name='month']";
exports.SignUpMonthOfBirthNovember="//*[@name='month']/option[12]";
exports.SignUpyearOfBirth="//input[@name='year']";
exports.SignUpFemaleGender="//input[@value='F']";
exports.SignUpMaleGender="//input[@value='M']";
exports.SignUpAccountType="//select[@name='accountType']";
exports.SignUpAccountTypeReg="//*[@id='signup-form']/div[3]/div/select/option[2]";
exports.SignUpAccountTypePrem="//*[@id='signup-form']/div[3]/div/select/option[3]";
exports.SignUpAccountTypeArtist="//*[@id='signup-form']/div[3]/div/select/option[4]";
exports.SignUpSubmitButton="//button[@id='signup-button']";
exports.SignUpLogInButton="//a[@href='/logIn']";
exports.SubmitLoginButton="//button[@id='login-button']";
exports.ConfirmationEmailTextElement="//*[@id='root']/div/div/div[2]/h1/strong";
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
exports.Premiumbutton="//a[@href='/premium']";
exports.GetPremiumbutton="//*[@id='ovflow']";
exports.GetPremiumbuttonAtTheEndOfThePage="//*[@id='root']/div/div/div[3]/div/a";
//////////////////////////////////////////////
////////////////SearchPage All by Xpath//////////////////
exports.WebPlayerbutton="//a[@href='/webplayer']";
exports.Searchbutton="//*[@id='blur-add-to-playlist']/div/div[1]/div/div/ul/li[2]/a";
exports.SearchBar="//*[@id='blur-add-to-playlist']/div/div[2]/div/div[1]/div[2]/input";
exports.YourTopGenreElementSearchPage="//*[@id='blur-add-to-playlist']/div/div[2]/div/div[2]/div/h2[1]";
exports.TopResultsText="//*[@id='blur-add-to-playlist']/div/div[2]/div/div[2]/div/div[1]/div[1]/div/h2";
exports.BorderSearchPage="//*[@id='blur-add-to-playlist']/div/div[2]/div/div[2]/div";
exports.TopSearchResultAfterSearching="//*[@id='blur-add-to-playlist']/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/h3";
exports.NoResultFoundText="//*[@id='blur-add-to-playlist']/div/div[2]/div/div[2]/div/div/h1";
//////////////////////////////////////////////
//Account Overview
exports.AccountOverviewHeaderXpath='//*[@id="root"]/div/div/div/div/div[2]/div/div/h1/strong';
exports.AccountOverviewButtonXpath='/html/body/div/div/div/div/div/div[1]/div/div/a[1]';
exports.AccountOverviewEmailXpath='//*[@id="root"]/div/div/div/div/div[2]/div/div/div[1]/p[2]';
exports.AccountOverviewUsernameXpath='//*[@id="root"]/div/div/div/div/div[2]/div/div/div[2]/p[2]';
exports.AccountOverviewGenderXpath='//*[@id="root"]/div/div/div/div/div[2]/div/div/div[3]/p[2]';
exports.AccountOverviewBirthdateXpath='//*[@id="root"]/div/div/div/div/div[2]/div/div/div[4]/p[2]';
exports.EditProfileButtonXpath2='//*[@id="root"]/div/div/div/div/div[2]/div/div/a[1]';

//Edit Profile Selectors
exports.LoginButtonHomeScreenXpath='//*[@id="navbarSupportedContent"]/ul/ul[3]/li/a';
exports.LoginPageEmailAddressXpath='//*[@id="email-input"]';
exports.LoginPagePasswordXpath='//*[@id="password-input"]';
exports.LoginPageLoginButtonXpath='//*[@id="login-button"]';

exports.EditProfileButtonXpath ='//*[@id="root"]/div/div/div/div/div[1]/div/div/a[2]';
exports.EditProfilePageHeaderXpath ='//*[@id="edit-profile-h1"]';

exports.EditProfileEmailXpath = '//*[@id="email"]';

exports.EditProfileUsernameXpath ='//*[@id="userName"]';
exports.EditProfileUsernameErrorMsgXpath ='//*[@id="userNameError"]';
exports.EditProfileGenderXpath ='//*[@id="gender"]';

exports.EditProfileDayOfBirthXpath = '//*[@id="day"]';
exports.EditProfileMonthOfBirthXpath = '//*[@id="month"]';
exports.EditProfileYearOfBirthXpath = '//*[@id="year"]';


exports.EditProfileSaveButton = '//*[@id="save-profile"]';
exports.EditProfileCancelButton = '//*[@id="cancel"]';

exports.EditProfilePasswordMsgErrorXpath = '//*[@id="profile"]/div[1]';
exports.EditProfilePasswordXpath ='//*[@id="profile_confirmPassword"]';

exports.EditProfileSuccessMessageXpath ='/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div/div[1]/div[1]';
exports.ProfileDropDownlistXpath='//*[@id="navbarDropdown"]';
exports.ProfileDropDownlistXpath='//*[@id="profile"]';
exports.ProfileDropDownlistLogOutXpath='//*[@id="profile"]/li/div/a[2]';


//Set Device Password
exports.SetDevicePasswordXpath='//*[@id="root"]/div/div/div/div/div[1]/div/div/a[3]';
exports.SetDevicePasswordHeaderXpath='//*[@id="root"]/div/div/div/div/div[2]/div/div/div[1]/h1';
exports.SetDevicePasswordCurrentPasswordPassXpath='//*[@id="newPassword-input1"]';
exports.SetDevicePasswordNewPasswordtPassXpath='//*[@id="newPassword-input2"]';
exports.SetDevicePasswordCurrentPasswordPassErrorXpath='//*[@id="missing-current"]';
exports.SetDevicePasswordNewPasswordtPassErrorXpath='//*[@id="missing-new"]';
exports.SetDevicePasswordSubmitButtonXpath='//*[@id="container2"]/form/button';

exports.SpotifyLogoHeader='//*[@id="root"]/div/div/section/nav/div/a';
exports.SpotifyLogoFooter='//*[@id="root"]/div/div/footer/div[1]/div/div[1]/a';
exports.HomeScreenMusiceForEveryOneXpath='//*[@id="root"]/div/div/div[1]/div/div/h1';
exports.HelpButtonFooterXpath='//*[@id="root"]/div/div/footer/div[1]/div/div[2]/ul/li[1]/a';
exports.HelpPageHeaderXpath='//*[@id="root"]/div/div/div[2]/div/h1';
exports.WebPlayerButtonFooterXpath='//*[@id="root"]/div/div/footer/div[1]/div/div[2]/ul/li[2]/a';
exports.WebPlayerRecentlyPlayedHeaderXpath='//*[@id="homepage-body"]/div[1]/div[1]/h1';
exports.WebPlayerXpathDropDownlistXpath='//*[@id="right-drop-down"]';
exports.WebPlayerDropDownlistProfileXpath='//*[@id="right-drop-down"]/div/a[1]';
exports.WebPlayerDropDownlistLogOutXpath='//*[@id="right-drop-down"]/div/a[2]';
exports.FacebookButtonFooterXpath='//*[@id="root"]/div/div/footer/div[1]/div/div[3]/a';

exports.WebPlayerButtonHeaderXpath='//*[@id="navbarSupportedContent"]/ul/li[1]';
exports.HelpButtonHeaderXpath='//*[@id="navbarSupportedContent"]/ul/li[3]';
exports.PremiumButtonHeaderXpath='//*[@id="navbarSupportedContent"]/ul/li[2]';
exports.PremiumPageHeaderXpath='//*[@id="get-premium"]';


//Webplayer Selectors
exports.GoToWebPlayerHeaderXpath = '//a[contains(text(),"Web player")]';
exports.NewPlaylistLinkText = "Create Playlist";
exports.CancelCreateNewPlaylistXpath = "//div[@id='popup']/div[3]/div/div/button";
exports.ExitCreateNewPlaylistXpath = "//*[@id='popup']/div[1]/button/i";
exports.CreateNewPlaylistXpath = "//div[@id='popup']/div[3]/div/div[2]/a";
exports.InputNewPlaylistNameID = "new-playlist-name";
exports.NewPlaylistPopUpID ="blur";
exports.DropdownListID="Dropdown";
exports.DeletePlaylistXpath="//a[contains(text(),'Delete')]";
exports.NewPlaylistPopUpXpath = "//*[@id='popup']/div[2]/form/div/label";
//exports.NewPlaylistPopUpNotActiveXpath = "//a[contains(text(),'Create Playlist')]"
exports.FirstPlayListInTheList = "//*[@id='my-playlist']/li[1]";
exports.PlayListDropDown ="//*[@id='Dropdown']";
exports.DeleteInPlalistDropDown ="//*[@id='blur-add-to-playlist']/div/div[2]/div/div/div[2]/div/div[1]/ul/li[4]/div/div/a[2]";
exports.DeletePlalist ="//*[@id='delete']/div/div/div/div/div[2]/a";
exports.CancelDeletePlalist ="//*[@id='delete']/div/div/div/div/div[1]/button";
exports.CancelDeletePlalistWithX ="//*[@id='delete']/div/div/button/i"
exports.DeletePopUpText ="//*[@id='delete']/div/div/h2";
//Log in Selectors
exports.SignInbuttonLinkText = "Log in";
exports.EmailID = "email-input";
exports.PasswordID = "password-input";
exports.LoginID = "login-button";
exports.LoginWithFacebookID = "facebook-button"

exports.NoEmailOrUsernameEnteredXpath = "//p[@id='missing-email']";
exports.NoPasswordEnteredXpath = "//p[@id='missing-password']";
exports.IncorrentUsernameOrPassworXpath = "//p[2]";


//Log out Selectors
exports.ProfileXpath = "//a[contains(text(),'Profile')]";
exports.LogoutFromProfileXpath = "//a[contains(text(),'Sign out')]";

//ForgetPassword Selectors
exports.ForgetPasswordButtonXpath='//*[@id="root"]/div/div/div[2]/a[2]';
exports.ForgetPasswordPageHeader='//*[@id="root"]/div/div/div[2]/h1/strong';
exports.ForgetPasswordPageEmailXpath='//*[@id="my-text"]';
exports.ForgetPasswordPageSendButtonXpath='//*[@id="anchor"]';
exports.ForgetPasswordPageEmailErrMsgXpath='//*[@id="empty-input"]';
exports.ForgetPasswordPageVerificationMsgXpath='//*[@id="paragraph"]';
exports.ForgetPasswordPageHelpButtonXpath='/html/body/div/div/div/div[3]/nav/div/div[1]/ul/div[1]/a/span';
exports.ForgetPasswordPageLogInButtonXpath='/html/body/div/div/div/div[3]/nav/div/div[1]/ul/div[2]';
exports.ForgetPasswordPageSignUpButtonXpath='/html/body/div/div/div/div[3]/nav/div/div[1]/ul/div[3]/a/span';
exports.ForgetPasswordPageSpotifyLogo='//*[@id="top-nav"]/div';

exports.SignUpHeaderXpath='//*[@id="root"]/div/div/div[2]/div/h2[2]';
exports.SigninHeaderXpath='//*[@id="root"]/div/div/div[2]/p[1]';

exports.SpotifyLogoFooterHomeScreen='//*[@id="root"]/div/div/div[2]/footer/div[1]/div/div[1]/a';
exports.HelpFooterHomeScreen='//*[@id="root"]/div/div/div[2]/footer/div[1]/div/div[2]/ul/li[1]/a';
exports.WebPlayerFooterHomeScreen='//*[@id="root"]/div/div/div[2]/footer/div[1]/div/div[2]/ul/li[2]/a';
exports.FacebookFooterHomeScreen='//*[@id="root"]/div/div/div[2]/footer/div[1]/div/div[3]/a/i';
exports.GetSpotifyFreeButton='//*[@id="button-sign"]';

exports.HomeScreenDropDownlistXpath='//*[@id="navbarDropdown"]';
exports.HomeScreenDownlistAccountXpath='//*[@id="profile"]/li/div/a[1]';
exports.HomeScreenDropDownlistLogOutXpath='//*[@id="profile"]/li/div/a[2]';

