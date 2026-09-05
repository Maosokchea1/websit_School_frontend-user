import React, { useState, useEffect } from 'react';

// ផ្នែក Common (Header, Footer, HeroSection)
import Header from './components/Common/Header';
import HeroSection from './components/Common/HeroSection';
import Contact from './components/Common/Contact'; // អាចទុក ឬជំនួសដោយ ContactOverview
import Footer from './components/Common/Footer';

// ផ្នែក Contact ថ្មីៗ
import ContactOverview from './components/Contact/ContactOverview';
import InquiryForm from './components/Contact/InquiryForm';
import LocationMap from './components/Contact/LocationMap';
import StaffDirectory from './components/Contact/StaffDirectory';
import SupportHelpdesk from './components/Contact/SupportHelpdesk';

// ផ្នែក News & Media
import News from './components/News/Newsoverview';         
import NewsOverview from './components/News/Newsoverview'; 
import MediaGallery from './components/News/MediaGallery'; 
import Events from './components/News/Events';
import Announcements from './components/News/Announcements';
import Newsletter from './components/News/Newsletter';

// ផ្នែក AboutUs
import AboutUs from './components/AboutUs/AboutUs';
import History from './components/AboutUs/History';       
import Vision from './components/AboutUs/Vision';         
import Leadership from './components/AboutUs/Leadership'; 
import Missions from './components/AboutUs/Missions';       
import CoreValues from './components/AboutUs/CoreValues'; 
import Achievements from './components/AboutUs/Achievements'; 
import Facilities from './components/AboutUs/Facilities'; 

// ផ្នែក Activities
import Sports from './components/Activities/Sports';                 
import FieldTrips from './components/Activities/FieldTrips';
import CommunityService from './components/Activities/CommunityService'; 
import ClubsOrganizations from './components/Activities/ClubsOrganizations';
import ArtsAndCulture from './components/Activities/ArtsAndCulture';

// ផ្នែក Academics និង Results
import Academic from './components/Acamdemics/Academic';
import Curriculum from './components/Acamdemics/Curriculum'; 
import Schedule from './components/Acamdemics/Schedule';     
import Library from './components/Acamdemics/Library';       
import Results from './components/Acamdemics/Results';       

// ផ្នែក Admissions
import Admissions from './components/Admissions/Admissions';
import ApplyNow from './components/Admissions/ApplyNow';
import Tuition from './components/Admissions/Tuition';
import Scholarships from './components/Admissions/Scholarships';
import Requirements from './components/Admissions/Requirements';

function App() {
  const [lang, setLang] = useState('KH'); 
  const [activeTab, setActiveTab] = useState('home'); 

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'KH' ? 'EN' : 'KH'));
  };

  const currentTab = typeof activeTab === 'string' ? activeTab.toLowerCase().trim() : '';

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ${lang === 'KH' ? 'font-khmer' : 'font-sans'}`}>
      
      <Header 
        lang={lang} 
        setLang={setLang} 
        toggleLang={toggleLang} 
        setActiveTab={setActiveTab} 
        activeTab={activeTab}
      />
      
      <main>
        {/* ទំព័រដើម (Home) */}
        {currentTab === 'home' && (
          <>
            <HeroSection lang={lang} />
            <AboutUs lang={lang} />
            <Academic lang={lang} />
            <News lang={lang} setActiveTab={setActiveTab} />
            <Events lang={lang} />
            <Admissions lang={lang} setActiveTab={setActiveTab} />
          </>
        )}

        {/* អំពីពួកយើង */}
        {(currentTab === 'about' || currentTab === 'about-us' || currentTab === 'aboutus') && <AboutUs lang={lang} />}
        {currentTab === 'history' && <History lang={lang} />}
        {currentTab === 'vision' && <Vision lang={lang} />}
        {currentTab === 'leadership' && <Leadership lang={lang} />}
        {(currentTab === 'mission' || currentTab === 'missions') && <Missions lang={lang} />}
        {(currentTab === 'core-values' || currentTab === 'corevalues' || currentTab === 'values') && <CoreValues lang={lang} />}
        {currentTab === 'achievements' && <Achievements lang={lang} />}
        {currentTab === 'facilities' && <Facilities lang={lang} />}

        {/* សកម្មភាពសិស្ស (Activities) */}
        {(currentTab === 'activities' || currentTab === 'activities-overview' || currentTab === 'activities overview') && <Sports lang={lang} />} 
        {(currentTab === 'sports' || currentTab === 'sport') && <Sports lang={lang} />}
        {(currentTab === 'field-trips' || currentTab === 'fieldtrips' || currentTab === 'field trips' || currentTab === 'field-trip') && <FieldTrips lang={lang} />}
        {(currentTab === 'community-service' || currentTab === 'communityservice' || currentTab === 'community service' || currentTab === 'community-services' || currentTab === 'community') && <CommunityService lang={lang} />}
        {(currentTab === 'clubs' || currentTab === 'clubs-organizations' || currentTab === 'clubs & organizations' || currentTab === 'clubsorganizations') && <ClubsOrganizations lang={lang} />}
        {(currentTab === 'arts-culture' || currentTab === 'arts & culture' || currentTab === 'arts' || currentTab === 'culture' || currentTab === 'artsculture') && <ArtsAndCulture lang={lang} />}
        
        {/* កម្មវិធីសិក្សា */}
        {(currentTab === 'academics' || currentTab === 'programs' || currentTab === 'academic') && <Academic lang={lang} />} 
        {currentTab === 'curriculum' && <Curriculum lang={lang} />} 
        {currentTab === 'schedule' && <Schedule lang={lang} />}     
        {currentTab === 'library' && <Library lang={lang} />}       
        {currentTab === 'results' && <Results lang={lang} />}

        {/* ការចុះឈ្មោះចូលរៀន (Admissions) */}
        {(currentTab === 'admissions' || currentTab === 'admissions-overview' || currentTab === 'admissions overview') && <Admissions lang={lang} setActiveTab={setActiveTab} />}
        {(currentTab === 'apply' || currentTab === 'apply-now' || currentTab === 'applynow') && <ApplyNow lang={lang} />}
        {currentTab === 'tuition' && <Tuition lang={lang} />}
        {currentTab === 'scholarships' && <Scholarships lang={lang} />}
        {currentTab === 'requirements' && <Requirements lang={lang} />}

        {/* ព័ត៌មាន និងមេឌៀ */}
        {(currentTab === 'news' || currentTab === 'news-overview' || currentTab === 'newsoverview') && <NewsOverview lang={lang} />}
        {currentTab === 'events' && <Events lang={lang} />}
        {currentTab === 'announcements' && <Announcements lang={lang} />}
        {(currentTab === 'gallery' || currentTab === 'media' || currentTab === 'mediagallery') && <MediaGallery lang={lang} />}
        {currentTab === 'newsletter' && <Newsletter lang={lang} />}

        {/* ទំនាក់ទំនង (Contact) - បានកែសម្រួលភ្ជាប់ជាមួយ Component ថ្មីៗ */}
        {(currentTab === 'contact' || currentTab === 'contact-overview' || currentTab === 'contact overview' || currentTab === 'contactoverview') && <ContactOverview lang={lang} />}
        {(currentTab === 'inquiry' || currentTab === 'inquiry-form' || currentTab === 'inquiryform') && <InquiryForm lang={lang} />}
        {(currentTab === 'location' || currentTab === 'location-map' || currentTab === 'locationmap' || currentTab === 'map') && <LocationMap lang={lang} />}
        {(currentTab === 'staff' || currentTab === 'staff-directory' || currentTab === 'staffdirectory') && <StaffDirectory lang={lang} />}
        {(currentTab === 'support' || currentTab === 'helpdesk' || currentTab === 'support-helpdesk') && <SupportHelpdesk lang={lang} />}
      </main>

      <Footer lang={lang} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;