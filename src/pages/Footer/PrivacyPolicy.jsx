const info = [
  "To Process Transactions: Your information allows us to fulfill your orders and provide customer support.",
  "To Improve Our Website: We use browsing information to enhance our website's functionality and user experience.",
  "To Communicate With You: We may use your information to send you promotional offers, updates about your orders, and respond to your inquiries.",
]

const profileData = [
  "We use your personal information to resolve disputes, troubleshoot problems, help promote a safe service, collect fees owed, measure consumer interest in our products and services, inform you about online and offline offers, products, services, updates, customize your experience, detect and protect us against error, fraud and other criminal activity, enforce our terms and conditions, and as otherwise described to you at the time of collection. In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our website. We identify and use your IP address to help diagnose problems with our server, and to administer our website. Your IP address is also used to help identify you and to gather broad demographic information. We may occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (like pin code/zip code, age or income level). We use this data to tailor your experience at our site, providing you with content that we think you might be interested in and to display content according to your preferences. We will not share your profile information with any other organization to let them use it for marketing purposes.",
  "We may organize contests and the information collected during these events may be used by us to improve your overall customer experience. The information will only be shared with third parties on an aggregate basis.'Aggregate information' for this purpose shall mean and include the information that is recorded about users and collected into groups so that it no longer reflects or refers to an individually identifiable user.",
  "Personal data collected by the Website may be transferred to other sites where it is necessary to meet the purpose for which you have submitted the information. By submitting data on this Website, you are providing explicit consent to transmission of data collected on the Website.",
  "The non-personal / anonymous information like traffic and other data is used to obtain information to recognize the access privileges to our Site, track your participation in any of the events, providing you with better content and advertisements, help diagnose the problems with our Site and for the purposes detailed in the Policy.",
  "We do not rent, sell or share your personal information to third parties except where –",
]

const profileData1 = [
  "We have permission from you,",
  "We have to provide products and services requested / ordered by you,",
  "We have to help to investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, potential threat to the safety or security of any person or organization, property or asset or rights of the Website from unauthorized use or misuse of the Website, violations of terms of use of the site defend against legal claims/proceedings",
  "Arise special circumstances including but not limited to meeting requirements of court orders, judicial proceedings, or other legal processes; enforce the terms of use or terms of this policy of the Website."
]

const security = [
  "We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data and restrict access to personal information to our employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations.",
  "Although we endeavor to safeguard the confidentiality of your personally identifiable information, however, transmissions made by means of the Internet cannot be made absolutely secure. By using this Site, you agree that we will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties.",
  "You further agree that you are solely responsible and liable for, and shall indemnify Us against any and all costs, expenses, damages, fees, etc. that Javasports may incur or suffer due to any personal information or other materials that you post, upload, submit, and otherwise make available on the Website. You will be yourself responsible for the personal information disclosed in public areas of the Website and Javasports will not be held responsible for use / misuse of such information shared with other persons in such public areas."
]

const PrivacyPolicy = () => {
  return (
    <div className='bg-white flex flex-col px-[150px] max-sm:px-[46px] max-lg:px-[80px] max-xl:px-[100px] gap-10 py-[40px]'>
      <div className="font-Lato">
        <h2 className="text-[24px] font-700">Introduction to Privacy policy</h2>
        <p className="text-[14px] font-400">
          Thanks for placing your trust in javasports.in to handle your personal information. We are committed to protect your privacy. We have adopted the highest standards for secure transactions and privacy of customer information. Our information gathering and dissemination practices are detailed below. Please note that our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically. We only need information related to name, billing and shipping address and phone numbers. We are not in the business of selling personal information.
        </p>
      </div>
      <div className="font-Lato">
        <span className="text-[24px] font-700">Information We Collect</span>
        <ul className="list-disc pl-6 text-[14px] font-400">
          <li>We collect "personal" information from you when you provide it to us. For example, if you purchase a product from us, we will collect your name, mailing address, telephone number and email address. If you sign up to receive a newsletter, we will collect your email address. If you take advantage of special services offered by us, we may collect other personal information about you. We use your personal information for internal purposes such as processing and to keep you informed of your order.</li>
        </ul>
      </div>
      <div className='font-Lato'>
        <span className="text-[24px] font-700">How We Use Your Information</span>
        <ul className="list-disc pl-6 text-[14px] font-400">
          {info.map((point, index) => (
            <li key={index}>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='font-Lato'>
        <span className="text-[24px] font-700">USE OF DEMOGRAPHIC AND PROFILE DATA</span>
        <ul className="list-disc pl-6 text-[14px] font-400">
          {profileData.map((point, index) => (
            <li key={index}>
              <p>{point}</p>
            </li>
          ))}
          <ul className="list-disc pl-6 text-[14px] font-400">
            {profileData1.map((point, index) => (
              <li key={index}>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </ul>
      </div>
      <div className='font-Lato'>
        <span className="text-[24px] font-700">Security</span>
        <ul className="list-disc pl-6 text-[14px] font-400">
          {security.map((point, index) => (
            <li key={index}>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="font-Lato">
        <span className="text-[24px] font-700">Changes to Our Privacy Policy</span>
        <ul className="list-disc pl-6 text-[14px] font-400">
          <li>
            <p className="text-[14px] font-400">We may update this policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PrivacyPolicy