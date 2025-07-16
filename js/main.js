document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const mainContentWrapper = document.getElementById('main-content-wrapper');
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.main-nav .nav-list');

    // Store the initial home page content
    const initialHomePageContent = mainContentWrapper.innerHTML;
    let currentPage = 'home'; // Track the current page for animation direction

    // Preloader fade out
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            // Also ensure body is marked loaded
            document.body.classList.add('loaded');
            // Initialize AOS after preloader is hidden
            AOS.init({
                duration: 1000, // animation duration
                once: true // animations only happen once on scroll down
            });
        }
    });

    // Mobile Navigation Toggle
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Close nav when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            }
        });
    }

    // --- Dynamic Page Contents ---
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
        <section id="give-full-dynamic" class="dynamic-page-section">
            <div class="container give-content">
                <h2>Support KingdomSites Ministry</h2>
                <p>Your generous giving plays a vital role in enabling us to continue our mission to spread God's love, serve our community, and impact lives. Every contribution, no matter the size, makes a difference.</p>
                
                <div class="give-options">
                    <div class="give-option-card" data-aos="fade-up" data-aos-delay="100">
                        <h3>Online Giving</h3>
                        <p>Give securely and conveniently online through our trusted payment portal. You can set up one-time gifts or recurring donations.</p>
                        <a href="#" class="btn secondary-btn" target="_blank" rel="noopener noreferrer">Give Online Now</a>
                    </div>
                    <div class="give-option-card" data-aos="fade-up" data-aos-delay="200">
                        <h3>Bank Transfer</h3>
                        <p>You can also give directly via bank transfer. Please use the details below:</p>
                        <p><strong>Bank Name:</strong> KingdomSites Bank</p>
                        <p><strong>Account Name:</strong> KingdomSites Ministry</p>
                        <p><strong>Account Number:</strong> 1234567890</p>
                        <p><strong>Sort Code/Routing:</strong> 00-00-00</p>
                    </div>
                    <div class="give-option-card" data-aos="fade-up" data-aos-delay="300">
                        <h3>In-Person Giving</h3>
                        <p>You are welcome to give in person during our regular service times. Look for the offering plates or designated donation points.</p>
                    </div>
                </div>
                <p style="margin-top: 2rem;">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7</p>
                <button class="btn primary-btn back-button" data-page-name="Home">Back to Home</button>
            </div>
        </section>
    `;

    // --- Page Loading Function ---
    const loadPage = (content, page) => {
        // Determine animation direction based on page navigation
        let animationOutClass = '';
        let animationInClass = '';

        if (page === 'Home') {
            // If going back to home, slide out to right, slide in from left (reverse)
            animationOutClass = 'content-out-right';
            animationInClass = 'content-in-left';
        } else {
            // For other pages, slide out to left, slide in from right (normal flow)
            animationOutClass = 'content-out-left';
            animationInClass = 'content-in-right';
        }

        // Apply slide-out animation
        mainContentWrapper.classList.add(animationOutClass);

        // After the slide-out animation finishes, change content and slide in
        setTimeout(() => {
            mainContentWrapper.innerHTML = content;
            mainContentWrapper.classList.remove(animationOutClass); // Remove out class
            mainContentWrapper.classList.add(animationInClass); // Add in class

            // After new content is added and animated in, remove the animation class
            // This ensures it's ready for the next animation
            mainContentWrapper.addEventListener('animationend', () => {
                mainContentWrapper.classList.remove(animationInClass);
                // Refresh AOS to apply animations to newly loaded content
                AOS.refreshHard();
            }, { once: true }); // Use {once: true} to ensure it runs only once

            // Scroll to top of the new page content
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update current page tracker
            currentPage = page;

            // Optional: Update URL for better browser history and direct linking
            // You might want to map page names to actual paths (e.g., /sermons, /about)
            let path = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
            history.pushState({ page: page }, page, path);

            // Close mobile nav if open
            if (navList && navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        }, 600); // Match this with your CSS transition duration
    };

    // --- Event Listeners for Buttons and Navigation ---
    document.body.addEventListener('click', (e) => {
        const target = e.target;

        // Handle navigation links in header and footer
        if (target.matches('.main-nav a') || target.matches('.footer-col.quick-links a') || target.matches('.home-link') || target.matches('.back-button') || target.matches('.btn[data-page]')) {
            e.preventDefault(); // Prevent default link behavior

            const pageId = target.dataset.page;
            const pageName = target.dataset.pageName || 'Home'; // Get page name for animation direction
            const href = target.getAttribute('href');

            if (pageId) {
                // Determine which page to load based on data-page attribute
                if (pageId === 'sermons-full-page') {
                    loadPage(sermonsFullPageContent, 'Sermons');
                } else if (pageId === 'learn-more-page') {
                    loadPage(learnMorePageContent, 'About'); // Use 'About' as page name for consistency
                } else if (pageId === 'give-full-page') {
                    loadPage(giveFullPageContent, 'Give');
                }
            } else if (target.matches('.home-link') || target.matches('.back-button')) { // Simplified back to home
                loadPage(initialHomePageContent, 'Home'); // Load the original home content
            } else if (href && href.startsWith('#')) { // For newsletter scroll or other internal anchors
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
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.page) {
            if (e.state.page === 'Home') {
                loadPage(initialHomePageContent, 'Home');
            } else if (e.state.page === 'Sermons') {
                loadPage(sermonsFullPageContent, 'Sermons');
            } else if (e.state.page === 'About') {
                loadPage(learnMorePageContent, 'About');
            } else if (e.state.page === 'Give') {
                loadPage(giveFullPageContent, 'Give');
            }
        } else {
            // If popstate doesn't have a state (e.g., initial load or direct navigation to #anchor)
            // You might want to default to home or handle specific anchors.
            loadPage(initialHomePageContent, 'Home');
        }
    });

    // Initial load check for deep links (e.g., if someone navigates directly to /sermons)
    const initialPath = window.location.pathname.replace(/^\/|\/$/g, ''); // Remove leading/trailing slashes
    if (initialPath === 'sermons') {
        loadPage(sermonsFullPageContent, 'Sermons');
    } else if (initialPath === 'about') {
        loadPage(learnMorePageContent, 'About');
    } else if (initialPath === 'give') {
        loadPage(giveFullPageContent, 'Give');
    } else if (initialPath === '' || initialPath === 'index.html') {
        // Do nothing, initial content is already there
    }
});
