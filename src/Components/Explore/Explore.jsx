// Explore.jsx

import React from 'react';
import './Explore.css';
import explores_1 from '../../Assets/image1.jpg';
import explores_2 from '../../Assets/image2.jpg';
import explores_3 from '../../Assets/image3.jpg';
import explores_4 from '../../Assets/image4.jpg';
import explores_5 from '../../Assets/image5.jpg';
import explores_6 from '../../Assets/image6.jpg';
import explores_7 from '../../Assets/image7.jpg';
import explores_8 from '../../Assets/image8.jpg';
import explores_9 from '../../Assets/image9.jpg';
import explores_10 from '../../Assets/image10.jpg';
import explores_11 from '../../Assets/image11.jpg';
import explores_12 from '../../Assets/image12.jpg';
import backgroundImage from '../../Assets/img-9.jpg';

const exploreLinks = [
    "https://www.audleytravel.com/borneo/tours?infinity=ict2~net~gaw~cmp~19196090564~ag~143856664949~ar~640250737146~kw~borneo%20trips~mt~b~acr~2868936838&audcmp=19196090564&audadg=143856664949&audkey=borneo%20trips&auddev=c&audadid=640250737146&audpos=&audtrgt=kwd-357895445217&audtel=ppcnb&audnet=g&gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpSQQR0D-HKCnz4nuTpcFVVwT8RoGtmkaBGM7zVcg50FsNz-gfptdKMaAu34EALw_wcB",
    "https://www.kayak.co.uk/Bora-Bora-Hotels.f2000160.dr.html?sck=SEM&skipapp=true&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpQLYe06TFgFqgjTPUsYTCqtToSKgrF17IHrfpTYQ-ZkiAklY6PDKyUaAoLREALw_wcB&aid=157166691028https://www.tripadvisor.co.uk/SmartDeals-g311415-Bora_Bora_Society_Islands-Hotel-Deals.html",
    "https://www.exodus.co.uk/trips/morocco-holidays/culture/marrakech-sahara/ams",
    "https://www.tripadvisor.co.uk/Attraction_Products-g304133-Dambulla_Central_Province.html",
    "https://www.tripadvisor.co.uk/Tourism-g186585-Isle_of_Skye_The_Hebrides_Scotland-Vacations.html",
    "https://www.loveholidays.com/sem/antalya.html?WT.mc_id=pgo-40616888829-kwd-450966112&ch=des&gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpQvt4F7QkzETaLy-xLROXIfHYOnnle4Y6Bc148ocRHi14rMW5fReFIaAvKmEALw_wcB",
    "https://www.expedia.co.uk/Angra-Dos-Reis.d180403.Holidays-City-Breaks",
    "https://www.expedia.co.uk/Kyoto.d6131486.Holidays-City-Breaks",
    "https://www.tripadvisor.co.uk/SmartDeals-g297618-Manali_Kullu_District_Himachal_Pradesh-Hotel-Deals.html",
    "https://www.audleytravel.com/french-polynesia?infinity=ict2~net~gaw~cmp~19908545276~ag~145460481097~ar~652848195064~kw~trips%20to%20french%20polynesia~mt~e~acr~2868936838&audcmp=19908545276&audadg=145460481097&audkey=trips%20to%20french%20polynesia&auddev=c&audadid=652848195064&audpos=&audtrgt=kwd-452867146003&audtel=ppcnb&audnet=g&gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpQ0-oqLWyWYCc0sJnPeXJz3KD91b2_zxE27qPQGVpttdnCi0r7kqOgaAmFeEALw_wcB",
    "https://www.jet2holidays.com/destinations/turkey?ds_rl=1206481&gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpSSzUWuhQ8FhblGCDncnjO1jQd_57130d7TE7oqd0pBYCO2Lf1iMxQaAvnwEALw_wcB&gclsrc=aw.ds",
    "https://www.tripadvisor.co.uk/Attraction_Products-g1028265-d1549927-Balos_Lagoon-Kissamos_Chania_Prefecture_Crete.html",
];

const captions = [
    { location: "Sabah Borneo, Malaysia", description: "Solitude of scenery" },
    { location: "Bora Bora", description: "Destination of desire" },
    { location: "Sahara, Egypt", description: "Epitome of Arabia" },
    { location: "Kauai, Hawaii", description: "Captivating Horizons" },
    { location: "Isle of Skyes, Scotland", description: "Immersive abyss" },
    { location: "Antalya, Turkey", description: "Abode of tranquility" },
    { location: "Angra dos Reis, Brazil", description: "Description 1" },
    { location: "Kyoto, Japan", description: "Description 2" },
    { location: "Manali, India", description: "Description 1" },
    { location: "French Polynesia", description: "Description 2" },
    { location: "Gaferli, Turkey", description: "Description 1" },
    { location: "Balos Beach, Greece", description: "Description 2" },
];

const Explore = () => {
    const images = [explores_1, explores_2, explores_3, explores_4, explores_5, explores_6, explores_7, explores_8, explores_9, explores_10, explores_11, explores_12];

    return (
        <div>
            <div className='explore-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='explore-content'>
                    <div className='header'>
                        <h2>Locations</h2>
                    </div>
                    <div className='explore'>
                        {images.map((image, index) => (
                            <a href={exploreLinks[index]} className="img-container" key={index} target="_blank" rel="noopener noreferrer">
                                <img src={image} alt={captions[index].location} />
                                <div className="top-left-caption">{captions[index].location}</div>
                                <div className="caption">{captions[index].description}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Travelo. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="https://policies.google.com/terms?hl=en-US">Terms of Service</a>
                        <a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Explore;
