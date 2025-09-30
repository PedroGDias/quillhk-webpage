import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import quillLogo from "@/assets/quill-logo-256x256.png";

const TermsOfService = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-ultra-thick">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: 29/09/2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <div className="space-y-6 text-foreground">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  These Terms of Service ("Terms", "Terms of Service") in conjunction with our Privacy policy, are the entire agreement ("Agreement") between Quill Limited ("Company", "We", "Our", "Us") and you ("You" or the "User"). These Terms govern Your use of our web pages and services (collectively, the "Service").
                </p>
                <p className="mb-4">
                  By (a) purchasing access to the service through an online ordering process that references this agreement, (b) signing up for a consultation or service through a screen that references this agreement, or (c) clicking a box indicating acceptance, customer agrees to be bound by the Agreement.
                </p>
                <p className="mb-4">
                  If you do not agree with or cannot comply with this Agreement, then you may not use the Service, so please read carefully.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Communications</h2>
                <p className="mb-4">
                  We may use your information to communicate with you about your account, your orders, or your service. We may also use your information to send you service-related emails, such as account verification emails, password reset emails, and other emails that we send to you. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing to pedro@quill-hk.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Purchases</h2>
                <p className="mb-4">
                  If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
                </p>
                <p className="mb-4">
                  You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
                </p>
                <p className="mb-4">
                  We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
                </p>
                <p className="mb-4">
                  We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
                </p>
                <p className="mb-4">
                  We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Promotions, Contests and Offers</h2>
                <p className="mb-4">
                  Any promotions, contests and offers (collectively, "Promotions") made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Subscriptions</h2>
                <p className="mb-4">
                  Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p className="mb-4">
                  At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Quill Limited cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Quill Limited customer support team.
                </p>
                <p className="mb-4">
                  A valid payment method, including credit card, is required to process the payment for your subscription. You shall provide Quill Limited with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Quill Limited to charge all Subscription fees incurred through your account to any such payment instruments.
                </p>
                <p className="mb-4">
                  Should automatic billing fail to occur for any reason, Quill Limited will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Free Trial</h2>
                <p className="mb-4">
                  Quill Limited may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").
                </p>
                <p className="mb-4">
                  You may be required to enter your billing information in order to sign up for the Free Trial.
                </p>
                <p className="mb-4">
                  If you do enter your billing information when signing up for the Free Trial, you will not be charged by Quill Limited until the Free Trial has expired. On the last day of the Free Trial period, unless you canceled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
                </p>
                <p className="mb-4">
                  At any time and without notice, Quill Limited reserves the right to (i) modify the Terms of Service of the Free Trial offer, or (ii) cancel such Free Trial offer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Fee Changes</h2>
                <p className="mb-4">
                  Quill Limited, in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
                </p>
                <p className="mb-4">
                  Quill Limited will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
                </p>
                <p className="mb-4">
                  Your continued use of the Service after a Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Refunds</h2>
                <p className="mb-4">
                  Except when required by law, paid Subscription fees are non-refundable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Content</h2>
                <p className="mb-4">
                  Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through the Service, including its legality, reliability, and appropriateness.
                </p>
                <p className="mb-4">
                  By posting Content on or through the Service, you represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
                </p>
                <p className="mb-4">
                  You retain any and all of your rights to any Content you submit, post, or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service. However, by posting Content using the Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms.
                </p>
                <p className="mb-4">
                  Quill Limited has the right but not the obligation to monitor and edit all Content provided by users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Prohibited Uses</h2>
                <p className="mb-4">
                  You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service for:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Spamming:</strong> You are prohibited from sending unsolicited messages without prior consent.</li>
                  <li><strong>Phishing:</strong> You are prohibited from sending fraudulent messages that attempt to steal information.</li>
                  <li><strong>Malicious Content:</strong> You are prohibited from distributing any content that contains malware, viruses, or other harmful code.</li>
                  <li><strong>Harassment:</strong> You are prohibited from using our service to harass, intimidate, or threaten any individual or group.</li>
                  <li><strong>Illegal Activities:</strong> You are prohibited from using our service to engage in any illegal activities.</li>
                </ul>
                <p className="mb-4">Additionally, you agree not to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Use the Service in any manner that could disable, overburden, damage, or impair the Service or interfere with any other party's use of the Service, including their ability to engage in real-time activities through the Service.</li>
                  <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
                  <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
                  <li>Attack the Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
                </ul>
                <p className="mb-4">
                  If you become aware of any violations, please report them to us immediately by contacting pedro@quill-hk.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Analytics</h2>
                <p className="mb-4">
                  We may use third-party Service Providers to monitor and analyze the use of our Service.
                </p>
                <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
                <p className="mb-4">
                  Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.
                </p>
                <p className="mb-4">
                  For more information on the privacy practices of Google, please visit the Google Privacy Terms web page.
                </p>
                <p className="mb-4">
                  We also encourage you to review Google's policy for safeguarding your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. No Use By Minors</h2>
                <p className="mb-4">
                  The Service is intended only for access and use by individuals who are at least eighteen (18) years old. By accessing or using any of the Company's services, you warrant and represent that you are at least eighteen (18) years of age and have the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of these Terms. If you are not at least eighteen (18) years old, you are prohibited from both accessing and using the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Accounts</h2>
                <p className="mb-4">
                  When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                </p>
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
                <p className="mb-4">
                  You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar, or obscene.
                </p>
                <p className="mb-4">
                  We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Intellectual Property</h2>
                <p className="mb-4">
                  The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Quill Limited and its licensors. The Service is protected by copyright, trademark, and other laws of Hong Kong and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Quill Limited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">15. Copyright Policy</h2>
                <p className="mb-4">
                  We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights ("Infringement") of any person or entity.
                </p>
                <p className="mb-4">
                  If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to pedro@quill-hk.com, with the subject line: "Copyright Infringement" and include in your claim a detailed description of the alleged Infringement as detailed below, under "DMCA Notice and Procedure for Copyright Infringement Claims."
                </p>
                <p className="mb-4">
                  You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through the Service on your copyright.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">16. DMCA Notice and Procedure for Copyright Infringement Claims</h2>
                <p className="mb-4">
                  You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C. 512(c)(3) for further detail):
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</li>
                  <li>A description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work.</li>
                  <li>Identification of the URL or other specific location on the Service where the material that you claim is infringing is located.</li>
                  <li>Your address, telephone number, and email address.</li>
                  <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                  <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                </ul>
                <p className="mb-4">
                  You can contact our Copyright Agent via email at pedro@quill-hk.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">17. Error Reporting and Feedback</h2>
                <p className="mb-4">
                  You may provide us either directly at pedro@quill-hk.com or via third-party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service ("Feedback"). You acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>(i) You shall not retain, acquire, or assert any intellectual property right or other right, title, or interest in or to the Feedback.</li>
                  <li>(ii) The Company may have development ideas similar to the Feedback.</li>
                  <li>(iii) Feedback does not contain confidential information or proprietary information from you or any third party.</li>
                  <li>(iv) The Company is not under any obligation of confidentiality with respect to the Feedback.</li>
                </ul>
                <p className="mb-4">
                  In the event that the transfer of ownership to the Feedback is not possible due to applicable mandatory laws, you grant the Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited, and perpetual right to use (including copy, modify, create derivative works, publish, distribute, and commercialize) Feedback in any manner and for any purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">18. Links to Other Websites</h2>
                <p className="mb-4">
                  Our Service may contain links to third-party websites or services that are not owned or controlled by Quill Limited.
                </p>
                <p className="mb-4">
                  Quill Limited has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                </p>
                <p className="mb-4 font-semibold">
                  YOU ACKNOWLEDGE AND AGREE THAT QUILL LIMITED SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH THE USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS, OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD-PARTY WEBSITES OR SERVICES.
                </p>
                <p className="mb-4 font-semibold">
                  WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES THAT YOU VISIT.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">19. Disclaimer of Warranties</h2>
                <p className="mb-4 font-semibold">
                  THESE SERVICES ARE PROVIDED BY QUILL LIMITED ON AN "AS IS" AND "AS AVAILABLE" BASIS. QUILL LIMITED MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
                </p>
                <p className="mb-4 font-semibold">
                  NEITHER QUILL LIMITED NOR ANY PERSON ASSOCIATED WITH QUILL LIMITED MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER QUILL LIMITED NOR ANYONE ASSOCIATED WITH QUILL LIMITED REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
                </p>
                <p className="mb-4 font-semibold">
                  QUILL LIMITED HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.
                </p>
                <p className="mb-4 font-semibold">
                  THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">20. Limitation of Liability</h2>
                <p className="mb-4 font-semibold">
                  EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF QUILL LIMITED HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                </p>
                <p className="mb-4 font-semibold">
                  EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF QUILL LIMITED, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">21. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, at our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms.
                </p>
                <p className="mb-4">
                  If you wish to terminate your account, you may simply discontinue using the Service.
                </p>
                <p className="mb-4">
                  All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">22. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed and construed in accordance with the laws of Hong Kong Special Administrative Region without regard to its conflict of law provisions.
                </p>
                <p className="mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">23. Changes to Service</h2>
                <p className="mb-4">
                  We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, at our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Service, or the entire Service, to users, including registered users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">24. Amendments to Terms</h2>
                <p className="mb-4">
                  We may amend these Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
                </p>
                <p className="mb-4">
                  Your continued use of the Service following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
                </p>
                <p className="mb-4">
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">25. Waiver and Severability of Terms</h2>
                <p className="mb-4">
                  No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.
                </p>
                <p className="mb-4">
                  If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">26. Logo Permission</h2>
                <p className="mb-4">
                  By entering into this agreement, the Customer hereby grants the Company the non-exclusive, royalty-free right to use the Customer's logo for the sole purpose of promoting and referencing the Customer as a client of the Company.
                </p>
                <p className="mb-4">
                  Company may use the Customer's logo on its website, marketing materials, case studies, and other promotional content. Company agrees to use the Customer's logo in a professional manner and in accordance with any brand guidelines provided by the Customer. This logo usage right is non-transferable and shall remain in effect for the duration of the agreement and any subsequent renewal periods, unless terminated by either party in writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">27. Acknowledgement</h2>
                <p className="mb-4 font-semibold">
                  BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">28. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Agreement, please contact us at pedro@quill-hk.com.
                </p>
              </section>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Button asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-12">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <div className="flex items-center gap-1">
              <img 
                src={quillLogo} 
                alt="Quill HK logo" 
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <div className="text-[10px] sm:text-xs text-muted-foreground">
                {currentYear} Quill HK. All rights reserved.
              </div>
            </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <a 
                  href="/privacy-policy" 
                  className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms-of-service" 
                  className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
