import React from "react";
import { Container } from "react-bootstrap";
import Header from "../MainPage/Header";

const style = {
  background: "white",
};
const PrivacyPolicy = () => (
  <div className="PrivacyPolicy-Page">
    <Header />
    <h1 id="PrivacyPolicy" style={style}>
      <Container style={{ padding: 10 }}>
        <div style={{ textAlign: "center", padding: 5, fontSize: 30 }}>
          **Privacy Policy**
        </div>
        <div>
          Sami Restaurant and grill built the SamiRest-Grill app as [open
          source/free/commercial] app. This SERVICE is provided by Sami
          Restaurant and grill at no cost and is intended for use as is. This
          page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service. If you choose to use our Service, then you
          agree to the collection and use of information in relation to this
          policy. The Personal Information that we collect is used for providing
          and improving the Service. We will not use or share your information
          with anyone except as described in this Privacy Policy. The terms used
          in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which are accessible at SamiRest-Grill unless otherwise
          defined in this Privacy Policy.
        </div>
        <div style={{ textAlign: "center", padding: 5, fontSize: 30 }}>
          **Information Collection and Use**
        </div>
        <div>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information,
          including but not limited to user personal information used to give
          the proper service as a food delivery service for the restaurant, the
          app collects location data of the user location coordiantes using
          google map APIs, to enable the delivery service with google map , just
          in the foreground , this means we dont collect your locattion data
          when the app is closed or in the background. The information that we
          request will be retained by us and used as described in this privacy
          policy. The app does use third-party services that may collect
          information used to identify you. Link to the privacy policy of
          third-party service providers used by the app * [Google Play
          Services](https://www.google.com/policies/privacy/) * [Google
          Analytics for
          Firebase](https://firebase.google.com/policies/analytics) * [Firebase
          Crashlytics](https://firebase.google.com/support/privacy/) *
          [Expo](https://expo.io/privacy)
        </div>
        <div style={{ textAlign: "center", padding: 5, fontSize: 30 }}>
          **Log Data**
        </div>
        <div>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through
          third-party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </div>
        <div style={{ textAlign: "center", padding: 5, fontSize: 30 }}>
          **Cookies**
        </div>
        <div>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory. This Service does not use these “cookies” explicitly. However,
          the app may use third-party code and libraries that use “cookies” to
          collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being
          sent to your device. If you choose to refuse our cookies, you may not
          be able to use some portions of this Service.
        </div>
        <div style={{ textAlign: "center", padding: 5, fontSize: 30 }}>
          **Service Providers**
        </div>
        <div>
          We may employ third-party companies and individuals due to the
          following reasons: * To facilitate our Service; * To provide the
          Service on our behalf; * To perform Service-related services; or * To
          assist us in analyzing how our Service is used. We want to inform
          users of this Service that these third parties have access to their
          Personal Information. The reason is to perform the tasks assigned to
          them on our behalf. However, they are obligated not to disclose or use
          the information for any other purpose. **Security** We value your
          trust in providing us your Personal Information, thus we are striving
          to use commercially acceptable means of protecting it. But remember
          that no method of transmission over the internet, or method of
          electronic storage is 100% secure and reliable, and we cannot
          guarantee its absolute security.
        </div>
        <div style={{ textAlign: "center", padding: 5, fontSize: 30 }}>
          **Links to Other Sites**
        </div>
        <div>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services. **Children’s
          Privacy** These Services do not address anyone under the age of 13. We
          do not knowingly collect personally identifiable information from
          children under 18 years of age. In the case we discover that a child
          under 18 has provided us with personal information, we immediately
          delete this from our servers. If you are a parent or guardian and you
          are aware that your child has provided us with personal information,
          please contact us so that we will be able to do the necessary actions.
        </div>
        <div style={{ textAlign: "center", padding: 5, fontSize: 30 }}>
          **Changes to This Privacy Policy**
        </div>
        <div>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. This policy is effective as of 2022-05-13 **Contact Us** If you
          have any questions or suggestions about our Privacy Policy, do not
          hesitate to contact us at sami.restaurant2010@gmail.com.
        </div>
      </Container>
    </h1>
  </div>
);
export default PrivacyPolicy;
