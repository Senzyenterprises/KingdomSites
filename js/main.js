document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const mainContentWrapper = document.getElementById('main-content-wrapper');
    const newsletterStatus = document.getElementById('newsletter-status');

    // --- Mobile Navigation Toggle ---
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- Page Content Templates ---
    // Store your original home page content as a template literal
    const homePageContent = `
        <section id="hero" class="hero-section">
            <div class="hero-content">
                <h1>Welcome Home</h1>
                <p>Experience faith, build community, and find your purpose with us.</p>
                <div class="cta-buttons">
                    <a href="#" class="btn primary-btn" data-page="learn-more-page" data-aos="fade-up" data-aos-delay="200">Learn More</a>
                    <a href="#" class="btn secondary-btn" data-page="sermons-full-page" data-aos="fade-up" data-aos-delay="400">Watch Sermons</a>
                </div>
            </div>
        </section>

        <section id="about" class="about-section" data-aos="fade-up">
            <h2>Our Vision & Story</h2>
            <div class="about-content">
                <div class="text-block" data-aos="fade-right">
                    <h3>Who We Are</h3>
                    <p>KingdomSites is more than just a website; it's a digital home for believers to connect, grow, and serve. We believe in fostering a vibrant community rooted in faith and dedicated to making a positive impact.</p>
                </div>
                <div class="image-block" data-aos="fade-left">
                    <img src="images/about_us (1).jpg" alt="About Us">
                </div>
            </div>
        </section>

        <section id="events" class="events-section">
            <h2>Upcoming Events</h2>
            <div class="events-grid">
                <div class="event-card" data-aos="zoom-in" data-aos-delay="100">
                    <h3>Community Outreach Day</h3>
                    <p class="event-date">Saturday, July 27th, 2025</p>
                    <p class="event-location">City Park, Main Street</p>
                    <p>Join us as we share love and resources with our local community.</p>
                </div>
                <div class="event-card" data-aos="zoom-in" data-aos-delay="200">
                    <h3>Mid-Week Bible Study</h3>
                    <p class="event-date">Every Wednesday, 7:00 PM</p>
                    <p class="event-location">Church Auditorium / Online</p>
                    <p>Dive deeper into the scriptures with our engaging weekly study.</p>
                </div>
            </div>
        </section>

        <section id="sermons" class="sermon-section">
            <h2>Recent Sermons</h2>
            <div class="sermon-videos-grid">
                <div class="video-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
                    <h3>The Power of Faith</h3>
                </div>
                <div class="video-wrapper" data-aos="fade-up" data-aos-delay="200">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
                    <h3>Building Community</h3>
                </div>
            </div>
            <a href="#" class="btn primary-btn" data-page="sermons-full-page" data-aos="fade-up">See All Sermons</a>
        </section>

        <section id="donate" class="donate-section">
            <h2>Support Our Ministry</h2>
            <p>Your generous contributions enable us to continue our mission and impact lives.</p>
            <a href="#" class="btn primary-btn" data-page="give-full-page" data-aos="zoom-in">Give Online Securely</a>
            <p class="donation-note" data-aos="fade-up">Your support helps with building projects, community outreach, and missions.</p>
        </section>
    `; // End of homePageContent

    const sermonsFullPageContent = `
        <section id="full-sermons" class="dynamic-page-section">
            <h2>All Sermons</h2>
            <p>Dive deeper into the Word with our complete sermon library.</p>

            <div class="full-sermons-grid">
                <div class="full-sermon-card" data-aos="fade-up" data-aos-delay="100">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
                    <h3>The Power of Faith</h3>
                    <p>An inspiring message on trusting God's plan and walking in belief.</p>
                    <a href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID_1" target="_blank" class="btn secondary-btn">Watch Now</a>
                </div>
                <div class="full-sermon-card" data-aos="fade-up" data-aos-delay="200">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
                    <h3>Building Community</h3>
                    <p>Discover the importance of connection and fellowship within the body of Christ.</p>
                    <a href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID_2" target="_blank" class="btn secondary-btn">Watch Now</a>
                </div>
                <div class="full-sermon-card" data-aos="fade-up" data-aos-delay="300">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
                    <h3>Overcoming Challenges</h3>
                    <p>Practical steps to navigate life's difficulties with God's strength.</p>
                    <a href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID_3" target="_blank" class="btn secondary-btn">Watch Now</a>
                </div>
                <div class="full-sermon-card" data-aos="fade-up" data-aos-delay="400">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_4" frameborder="0" allowfullscreen></iframe>
                    <h3>Living with Purpose</h3>
                    <p>Uncover your divine calling and walk confidently in your God-given destiny.</p>
                    <a href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID_4" target="_blank" class="btn secondary-btn">Watch Now</a>
                </div>
                <div class="full-sermon-card" data-aos="fade-up" data-aos-delay="500">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_5" frameborder="0" allowfullscreen></iframe>
                    <h3>The Power of Prayer</h3>
                    <p>Explore how a vibrant prayer life can transform your circumstances and deepen your faith.</p>
                    <a href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID_5" target="_blank" class="btn secondary-btn">Watch Now</a>
                </div>
                <div class="full-sermon-card" data-aos="fade-up" data-aos-delay="600">
                    <iframe src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_6" frameborder="0" allowfullscreen></iframe>
                    <h3>Grace and Forgiveness</h3>
                    <p>Understand the boundless grace of God and the freedom found in forgiveness.</p>
                    <a href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID_6" target="_blank" class="btn secondary-btn">Watch Now</a>
                </div>
            </div>

            <h3>Scripture for the Week</h3>
            <p style="max-width: 800px; margin: 0 auto 1rem; font-size: 1.2rem;">"For where two or three are gathered in my name, there am I among them."</p>
            <p style="font-style: italic; color: var(--light-text);">Matthew 18:20 (ESV)</p>
            
            <h3 style="margin-top: 2rem;">Additional Bible Verses for Study</h3>
            <ul style="list-style: none; padding: 0; margin: 0 auto; max-width: 600px; text-align: center;">
                <li style="margin-bottom: 0.5rem;">John 3:16</li>
                <li style="margin-bottom: 0.5rem;">Philippians 4:13</li>
                <li style="margin-bottom: 0.5rem;">Jeremiah 29:11</li>
                <li style="margin-bottom: 0.5rem;">Romans 8:28</li>
            </ul>
        </section>
    `; // End of sermonsFullPageContent

    const learnMorePageContent = `
        <section id="full-about" class="dynamic-page-section">
            <h2>Our Vision, Mission & Beliefs</h2>
            <div class="learn-more-content" data-aos="fade-up">
                <h3>Our Vision</h3>
                <p>To be a beacon of hope and transformation, empowering individuals to discover their divine purpose and live lives filled with faith, love, and impact in their communities and beyond.</p>

                <h3>Our Mission</h3>
                <p>We are committed to nurturing spiritual growth, fostering authentic community, and equipping believers to serve God and humanity with their unique gifts. We aim to reach, teach, and send forth disciples who will carry the message of hope to every corner of the world.</p>

                <h3>What We Believe</h3>
                <ul>
                    <li>**The Holy Bible:** We believe the Bible is the inspired, infallible, and authoritative Word of God.</li>
                    <li>**One God:** We believe in one God, eternally existent in three persons: Father, Son (Jesus Christ), and Holy Spirit.</li>
                    <li>**Jesus Christ:** We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles, His vicarious and atoning death, His bodily resurrection, His ascension to the right hand of the Father, and His personal return in power and glory.</li>
                    <li>**Salvation:** We believe that salvation is received through repentance toward God and faith in the Lord Jesus Christ.</li>
                    <li>**The Holy Spirit:** We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life.</li>
                    <li>**The Church:** We believe in the spiritual unity of believers in our Lord Jesus Christ.</li>
                </ul>

                <h3>Our Values</h3>
                <p>Community, Compassion, Integrity, Excellence, and Discipleship.</p>
                <a href="#" class="btn primary-btn home-link" style="margin-top: 1.5rem;" data-aos="fade-up">Back to Home</a>
            </div>
        </section>
    `; // End of learnMorePageContent

    const giveFullPageContent = `
        <section id="full-give" class="dynamic-page-section">
            <h2>Give to KingdomSites</h2>
            <p>Your faithful giving empowers our ministry to continue spreading hope and serving our community.</p>

            <div class="give-content" data-aos="fade-up">
                <h3>Why Your Giving Matters</h3>
                <p>Your contributions directly support our outreach programs, maintain our facilities, fund discipleship initiatives, and enable us to minister to those in need. Every gift, no matter the size, makes a significant difference in advancing God's Kingdom.</p>

                <h3>Ways to Give</h3>
                <div class="give-options">
                    <div class="give-option-card" data-aos="zoom-in" data-aos-delay="100">
                        <h3>Online Giving</h3>
                        <p>Give securely and conveniently through our online platform using your debit/credit card or bank transfer.</p>
                        <a href="YOUR_PAYSTACK_FLUTTERWAVE_LINK_1" target="_blank" class="btn primary-btn">Give Via Paystack</a>
                        <a href="YOUR_PAYSTACK_FLUTTERWAVE_LINK_2" target="_blank" class="btn secondary-btn" style="margin-left: 10px;">Give Via Flutterwave</a>
                    </div>

                    <div class="give-option-card" data-aos="zoom-in" data-aos-delay="200">
                        <h3>Bank Transfer</h3>
                        <p>You can also give directly via bank transfer. Here are our details:</p>
                        <p><strong>Bank Name:</strong> [Your Bank Name]</p>
                        <p><strong>Account Name:</strong> KingdomSites Ministry</p>
                        <p><strong>Account Number:</strong> [Your Account Number]</p>
                    </div>

                    <div class="give-option-card" data-aos="zoom-in" data-aos-delay="300">
                        <h3>In-Person Giving</h3>
                        <p>You can give cash or cheque during any of our service times. Offering envelopes are available at the welcome desk.</p>
                        <p><strong>Location:</strong> Your Church Address, City, Country</p>
                    </div>
                </div>
                <p class="donation-note" style="margin-top: 3rem;" data-aos="fade-up">"God loves a cheerful giver." - 2 Corinthians 9:7</p>
                <a href="#" class="btn primary-btn home-link" style="margin-top: 1.5rem;" data-aos="fade-up">Back to Home</a>
            </div>
        </section>
    `; // End of giveFullPageContent

    // --- Function to Load Page Content with Animation ---
    const loadPage = (pageContent, pageName) => {
        // First, apply "out" animation
        mainContentWrapper.classList.add('content-out-left');
        
        // Disable pointer events on the wrapper during transition
        mainContentWrapper.style.pointerEvents = 'none';

        // Listen for the end of the "out" animation
        mainContentWrapper.addEventListener('transitionend', function handler() {
            // Remove the event listener to prevent multiple triggers
            mainContentWrapper.removeEventListener('transitionend', handler);

            // Immediately set new content and remove "out" class
            mainContentWrapper.innerHTML = pageContent;
            mainContentWrapper.classList.remove('content-out-left');

            // Apply "in" animation
            mainContentWrapper.classList.add('content-in-right');

            // Scroll to just below the header
            const headerOffset = document.querySelector('.main-header').offsetHeight;
            window.scrollTo({
                top: headerOffset + 20, // Add a little extra space
                behavior: 'smooth'
            });

            // Listen for the end of the "in" animation
            mainContentWrapper.addEventListener('animationend', function animHandler() {
                mainContentWrapper.removeEventListener('animationend', animHandler);
                mainContentWrapper.classList.remove('content-in-right');
                // Re-enable pointer events after transition
                mainContentWrapper.style.pointerEvents = 'auto';

                // Re-initialize AOS for the new content
                // This is crucial for new AOS elements to animate
                AOS.refreshHard();
            });

            // If the nav list is active (mobile menu open), close it
            if (navList && navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    };

    // --- Event Listeners for Buttons and Navigation ---
    document.body.addEventListener('click', (e) => {
        const target = e.target;

        // Handle navigation links in header and footer
        if (target.matches('.main-nav a') || target.matches('.footer-col.quick-links a')) {
            e.preventDefault(); // Prevent default link behavior
            const pageId = target.dataset.page;
            const href = target.getAttribute('href');

            if (pageId) {
                // Determine which page to load based on data-page attribute
                if (pageId === 'sermons-full-page') {
                    loadPage(sermonsFullPageContent, 'Sermons');
                } else if (pageId === 'learn-more-page') {
                    loadPage(learnMorePageContent, 'About Us');
                } else if (pageId === 'give-full-page') {
                    loadPage(giveFullPageContent, 'Give');
                }
                // For other nav items, if you want them to scroll to sections within homePageContent
                // you'd add logic here, or remove their data-page attributes and revert to smooth scrolling.
            } else if (target.matches('.home-link')) {
                loadPage(homePageContent, 'Home');
            } else if (href && href.startsWith('#')) { // For newsletter scroll
                const targetSection = document.querySelector(href);
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - headerOffset,
                        behavior: 'smooth'
                    });
                     if (navList && navList.classList.contains('active')) {
                        navList.classList.remove('active');
                    }
                }
            }
        }

        // Handle CTA buttons in Hero, Sermons, and Donate sections
        if (target.matches('.hero-section .cta-buttons .btn') ||
            target.matches('#sermons .btn.primary-btn') ||
            target.matches('#donate .btn.primary-btn')) {
            
            e.preventDefault(); // Prevent default link behavior

            const pageId = target.dataset.page;
            if (pageId === 'learn-more-page') {
                loadPage(learnMorePageContent, 'About Us');
            } else if (pageId === 'sermons-full-page') {
                loadPage(sermonsFullPageContent, 'Sermons');
            } else if (pageId === 'give-full-page') {
                loadPage(giveFullPageContent, 'Give');
            }
        }
    });

    // --- Newsletter Form Submission (Firebase Integration Placeholder) ---
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm && newsletterStatus) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (email) {
                newsletterStatus.textContent = 'Subscribing...';
                newsletterStatus.style.color = 'orange';

                setTimeout(() => {
                    newsletterStatus.textContent = 'Subscribed successfully! (Simulated)';
                    newsletterStatus.style.color = 'green';
                    emailInput.value = '';
                }, 1500);
            } else {
                newsletterStatus.textContent = 'Please enter a valid email address.';
                newsletterStatus.style.color = 'red';
            }
        });
    }

    // --- Initial Page Load ---
    // Load the home page content when the DOM is ready
    loadPage(homePageContent, 'Home');
});

// A small debounce function for resize, not strictly needed for this, but good practice
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Adjust hero section height on resize if needed (though CSS handles most now)
window.addEventListener('resize', debounce(() => {
    AOS.refreshHard(); // Ensure AOS positions correctly after resize
}, 250));