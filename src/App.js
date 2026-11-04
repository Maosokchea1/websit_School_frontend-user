import React, { useState, useEffect } from 'react';


// ផ្នែក Common (Header, Footer, HeroSection)
import Header from './components/Common/Header';
import HeroSection from './components/Common/HeroSection';
import Footer from './components/Common/Footer';

// ផ្នែក Home Components (រួមទាំង Newsoverview ដែលស្ថិតក្នុងហ្វូដឺ Home)
import AboutUs from './pages/Home/AboutUs';
import Academic from './pages/Home/Academic';
import Achievements from './pages/Home/Achievements';
import Announcements from './pages/Home/Announcements';
import Events from './pages/Home/Events';
import News from './pages/Home/Newsoverview';          
import NewsOverview from './pages/Home/Newsoverview'; 

// ផ្នែក Contact
import ContactOverview from './pages/Contact/ContactOverview';
import InquiryForm from './pages/Contact/InquiryForm';
import LocationMap from './pages/Contact/LocationMap';
import StaffDirectory from './pages/Contact/StaffDirectory';
import SupportHelpdesk from './pages/Contact/SupportHelpdesk';

// ផ្នែក News & Media (ក្រៅពី Newsoverview)
import MediaGallery from './pages/News/MediaGallery'; 
import Newsletter from './pages/News/Newsletter';

// ផ្នែក AboutUs
import History from './pages/AboutUs/History';       
import Vision from './pages/AboutUs/Vision';         
import Leadership from './pages/AboutUs/Leadership'; 
import Missions from './pages/AboutUs/Missions';       
import CoreValues from './pages/AboutUs/CoreValues'; 
import Facilities from './pages/AboutUs/Facilities'; 

// ផ្នែក Activities
import Sports from './pages/Activities/Sports';                
import FieldTrips from './pages/Activities/FieldTrips';
import CommunityService from './pages/Activities/CommunityService'; 
import ClubsOrganizations from './pages/Activities/ClubsOrganizations';
import ArtsAndCulture from './pages/Activities/ArtsAndCulture';

// ផ្នែក Academics និង Results
import Curriculum from './pages/Acamdemics/Curriculum'; 
import Schedule from './pages/Acamdemics/Schedule';     
import Library from './pages/Acamdemics/Library';       
import Results from './pages/Acamdemics/Results';       

// ផ្នែក Admissions
import Admissions from './pages/Admissions/Admissions';
import ApplyNow from './pages/Admissions/ApplyNow';
import Tuition from './pages/Admissions/Tuition';
import Scholarships from './pages/Admissions/Scholarships';
import Requirements from './pages/Admissions/Requirements';

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
            <HeroSection lang={lang} setActiveTab={setActiveTab} />
            <AboutUs lang={lang} />
            <Academic lang={lang} />
            <Announcements lang={lang} />
            <Achievements lang={lang} />
            <News lang={lang} setActiveTab={setActiveTab} />
            <Events lang={lang} />
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

        {/* ទំនាក់ទំនង (Contact) */}
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