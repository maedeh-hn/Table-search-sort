import config from "./config.json";

const baseURL = config.BASE_URL;
const Version = "/v3";
const Prefix = "/api";
const url = baseURL + Prefix + Version;

// login
export const LoginApi = url + "/user/login";

//notfications
export const NotificationsApi = url + "/bell";
export const NotificationDetailApi = url + "/bell/";

//Apply
export const ApplyApi = url + "/apply";
export const ShowVisaApi = url + "/apply/";

//Note
export const NotesCategoryApi = url + "/note";
export const NoteListApi = url + "/note?apply_id=";
export const EditNoteApi = url + "/note/";

//badge
export const badgeApi = url + "/user/badge";

//User
export const ChatListApi = url + "/chat";
export const LogoutApi = url + "/user/logout";

//My Family
export const InformationProfApi = url + "/user/info";
export const familyDetailApi = url + "/user/family";
export const UpdateInfoApi = url + "/chat";
export const SentAvatarApi = url + "/user/update";
export const SentAddFamilyApi = url + "/family_join_request";
export const SentEditIdentityApi = url + "/user/update?user_id=";
export const countryListApi = url + "/country";
export const FamilyMemberInfoApi = url + "/user/info?user_id=";
export const ChangeCertificateApi = url + "/user-changes?user_id=";
export const AddLangCertifApi = url + "/language-certificates?user_id=";
export const EditLangCertifApi = url + "/language-certificates/";
export const EducationIndexApi = url + "/educations?user_id=";
//post and get both useing bellow
export const EditChangeCertificateApi = url + "/user-changes/";
export const SentMyFamilyFileApi = url + "/user-medias/";
export const RelativeIndexApi = url + "/australian-families?user_id=";
export const EditRelativeAusApi = url + "/australian-families/";
export const LanguageIndexApi = url + "/language-certificates?user_id=";
export const AddEducationApi = url + "/educations?user_id=";
export const EditEducationCertifApi = url + "/educations/";
export const VisaHistoryIndexApi = url + "/user-visa-histories?user_id=";
export const ShowVisaHistoryApi = url + "/user-visa-histories/";
export const WorkExprienceIndexApi = url + "/work-experiences?user_id=";
export const AddWorkExpreinceApi = url + "/work-experiences?user_id=";
export const AddAssementApi = url + "/user-assessments?user_id=";
export const AddCitizenshipApi = url + "/citizenship?user_id=";
export const ShowWorkExpreinceApi = url + "/work-experiences/";
export const GetcitizenshipListApi = url + "/citizenship?type=citizenship"
export const UpdateAssesmentApi = url + "/user-assessments/";
export const ShowAssessmentApi = url + "/user-assessments/";
export const GapIndexApi = url + "/gaps?user_id=";
export const ShowOtherApi = url + "/gaps/";
export const ShowMilitaryApi = url + "/user-militaries?user_id=";

///////////////////////////contact us///////////////////////
export const SaveContactUsApi = url + "/contactus";
export const ConsultantApi = url + "/contactus?apply_id=";
export const IntroductionlistApi = url + "/introduction?apply_id=";
export const IntroductionInfoApi = url + "/introduction";
export const IntroductionRewardSendApi = url + "/introduction/";
export const IntroductionRewardApi = url + "/introduction_reward";
export const FinancialListApi = url + "/installment?apply_id=";
export const FinancialShowApi = url + "/installment/";
export const SendFinancialApi = url + "/installment/";
export const AddressListApi = url + "/address";
export const AddressModalAddApi = url + "/areas";
export const AddAddressApi = url + "/address";
export const EditAddressApi = url + "/address/";
export const FivexListApi = url + "/reservation?apply_id=";
export const FivexShowApi = url + "/reservation/";
export const SelectCourseApi = url + "/reservation";
export const fileDocumentApi = url + "/user-medias?apply_id=";
export const SendDocApi = url + "/document/";
export const ImplementionListApi = url + "/structure?apply_id=";
export const AddFormApi = url + "/structure";

//main
export const mainApi = url + "/main";
export const instagramFeedApi = url + "/instagram-feed/get-post";
export const eventHomeApi = url + "/google-calendar/get-events";
export const faqApi = url + "/faq";
