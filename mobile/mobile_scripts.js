$(document).ready(function() {

  if (screen.width / screen.height <=  3 / 4) {
    // GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    let tl;
    let skipPaperOnComplete = false;
    let skipDownloadOnComplete = false;
    let skipTeamOnComplete = false;
    let skipExploreOnComplete = false;
    let skipLandingOnComplete = false;

    function background(tl, startTime, durationTime) {
      tl.to('#content', {
        backgroundPosition: '0vw -60vh',
        duration: durationTime
      }, startTime);
    }

    function start_disappear(tl, startTime, durationTime) {
      // Big logo to smaller logo
      tl.to('.header-top', {
        top: '5vh',
        scale: 0.8,
        duration: durationTime
      }, startTime);

      tl.to('#content', {
        backgroundPosition: '0vw calc(4vh - 37.5vw)',
        backgroundSize: '100vw 75vw',
        duration: durationTime
      }, startTime);

      tl.to('.please-scroll', {
        opacity: 0,
        duration: durationTime
      }, startTime);
    }

    function land_appear(tl, startTime, durationTime) {
      // making of the landing page
      tl.to('.header-top-name', {
        opacity: 1,
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('.team-names', {
        scale: 1,
        opacity: 1,
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('#navigation', {
        top: '71vh',
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('#goToTop', {
        opacity: 0.3,
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('.logo-container', {
        top: '85vh',
        zIndex: 1,
        duration: durationTime
      }, startTime);
    }

    function land_disappear(tl, startTime, durationTime) {
      tl.to('.header-top-name', {
        top: '6vh',
        scale: 0.9,
        opaity: 0.9,
        duration: durationTime
      }, startTime);

      tl.to('.team-names', {
        opacity: 0,
        duration: durationTime
      }, startTime);

      tl.to('.logo-container', {
        opacity: 0,
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('.header-top', {
        top: '0vh',
        scale: 0.7,
        duration: durationTime
      }, startTime);

      tl.to('#navigation', {
        opacity: 0,
        zIndex: 0,
        duration: 0.1
      }, startTime);
    }

    function nav_transition(tl, startTime, durationTime) { 
      tl.to('#navigation-left', {
        left: '1vw',
        zIndex: 1,
        duration: durationTime
      }, startTime);
    }

    function paper_appear(tl, startTime, durationTime){
      // Start of the paper
      tl.to('#navigation-left #paper_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the paper section moving up
      tl.to('#paper', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function paper_stay(tl, startTime, durationTime){
      // Start of the paper

      const text = document.getElementById('paper_text');

      // Break the text into individual characters
      const chars = text.textContent.split('');
      text.textContent = '';

      // Create span for each character and add to the DOM
      for (let char of chars) {
          let span = document.createElement('span');
          span.textContent = char;
          span.setAttribute("style","opacity:0;");
          text.appendChild(span);
          if (char=='.'){
            let newLine1 = document.createElement('br');
            let newLine2 = document.createElement('br');
            text.appendChild(newLine1);
            text.appendChild(newLine2);
          }
      }

      tl.staggerTo(text.children, 0.05, {opacity: 1}, 0.005);

      tl.to('#intro_video', {
        opacity: 1,
        duration: 1
      }, startTime);

      // Start of the paper
      tl.to('#intro_video', {
        width: 'auto',
        height: '20vh',
        duration: 1.5
      }, startTime);

      // Start of the paper
      tl.to('.video-container', {
        left: 'auto',
        duration: 1.5
      }, startTime);

      tl.to('#screenshot_text', {
        opacity: 1,
        duration: 0.1
      }, startTime);

      tl.to('#paper_screenshots a', {
        left: '0vw',
        opacity: 0.5,
        duration: 1
      }, startTime);

      for (let i = 1; i <= 5; i++) {
        tl.to('#page' + i, {
          left: (12*(i-1)) + 'vw',
          opacity: 1,
          duration: 1
        }, startTime+1);
      }

      for (let i = 6; i <= 9; i++) {
        tl.to('#page' + i, {
          top: '25vw',
          left: (12*(i-6)) + 'vw',
          opacity: 1,
          duration: 1
        }, startTime+1);
      }
    }

    function paper_disappear(tl, startTime, durationTime){
      tl.to('#paper', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#paper', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#paper', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #paper_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }

    function team_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #team_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the team section moving up
      tl.to('#team', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function team_stay(tl, startTime, durationTime){
      tl.to('#kartik', {
        opacity: 1,
        left: '13vw',
        duration: 1.5
      }, startTime);

      tl.to('#raiymbek', {
        opacity: 1,
        left: '13vw',
        duration: 1.5
      }, startTime + 1);

      tl.to('#malik', {
        opacity: 1,
        left: '13vw',
        duration: 1.5
      }, startTime + 2);
    }

    function team_disappear(tl, startTime, durationTime){
      tl.to('#left-arrow', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#team', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#team', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#team', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #team_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }

    function explore_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #explore_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the explore section moving up
      tl.to('#explore', {
        top: '20vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function explore_stay(tl, startTime, durationTime){
      tl.to('#explore', {
        opacity: 1,
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function explore_disappear(tl, startTime, durationTime){
      tl.to('#explore', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#explore', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#explore', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #explore_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }


    function download_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #download_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the download section moving up
      tl.to('#download', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }


    function download_stay(tl, startTime, durationTime){
      tl.to('#download', {
        opacity: 1,
        duration: 1
      }, startTime);

      tl.to('#download', {
        opacity: 1,
        duration: durationTime - 1
      }, startTime + 1);
    }

    function download_disappear(tl, startTime, durationTime){
      tl.to('#download', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#download', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#download', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #download_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }

    function stats_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #stats_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the download section moving up
      tl.to('#stats', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }


    function stats_stay(tl, startTime, durationTime){
      tl.to('#stats', {
        opacity: 1,
        duration: 1
      }, startTime);

      tl.to('#stats', {
        opacity: 1,
        duration: durationTime - 1
      }, startTime + 1);
    }

    function stats_disappear(tl, startTime, durationTime){
      tl.to('#stats', {
        top: '-100vh',
        duration: durationTime
      }, startTime);

      tl.to('#stats', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#stats', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #stats_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }


    // Create a GSAP timeline
    tl = gsap.timeline({
      paused: true, // Pause the timeline initially
      reversed: true, // Begin in the reversed state (animation end)
    });

    start_disappear(tl, 0, 0.5);
    land_appear(tl, 0.5, 0.5);

    land_disappear(tl, 1, 1);
    nav_transition(tl, 1, 1);
    paper_appear(tl, 1, 1);

    paper_stay(tl, 2, 3);

    paper_disappear(tl, 5, 1);
    team_appear(tl, 5, 1);

    team_stay(tl, 6, 4);

    team_disappear(tl, 10, 1);
    explore_appear(tl, 10, 1);

    explore_stay(tl, 11, 2);

    explore_disappear(tl, 13, 1);
    download_appear(tl, 13, 1);

    download_stay(tl, 14, 1);

    download_disappear(tl, 15, 1);
    stats_appear(tl, 16, 1);

    stats_stay(tl, 17, 1);

    stats_disappear(tl, 18, 1);

    background(tl, 0.5, 19.5);

    let lastTime = Date.now();
    let lastDelta = 0;
    let scrollSpeed = 0;
    let startTouch = null;
    let inactiveTime = 0;
    let wheelTimeout;
    let touchTimeout;

    gsap.to(tl, {progress: 1, duration: 10, ease: "power1.inOut"}, 0);
    gsap.to(tl, {
      progress: 0, 
      duration: 1,
      ease: "power1.inOut", 
    }, 10);
    gsap.to('#loading-screen', {
      opacity: 0,
      zIndex: -99,
      duration: 0.5,
      ease: "power1.inOut", 
      onComplete: function() {
        const loadScreen = document.getElementById('loading-screen');
        loadScreen.style.display = 'none';
      }
    }, 11);

    gsap.to('.header-top', {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut", 
      onComplete: function() {
        //const loadScreen = document.getElementById('loading-screen');
        start_mouse();
        start_touch();
      }
    }, 11.5);

    
    function start_mouse() {
      // Add mouse wheel event listener
      $(window).on('wheel', wheelHandler);

      // Stop the animation when the mouse wheel is not in motion
      $(window).on('wheelstop', function() {
        clearTimeout(wheelTimeout);
        if (scrollSpeed < 0.1) {
          pauseAnimation();
        }
      });

      // Custom event for when the mouse wheel stops
      $.event.special.wheelstop = {
        setup: function() {
          $(this).on('wheel', function(e) {
            let timer = $(this).data('timer');
            if (timer) {
              clearTimeout(timer);
            }
            $(this).data('timer', setTimeout(function() {
              $(this).trigger('wheelstop');
            }, 200)); // Stop the animation after 200ms of inactivity
          });
        },
        teardown: function() {
          $(this).off('wheel');
          $(this).data('timer', null);
        }
      };
    }

    function start_touch() {
      document.addEventListener('touchstart', touchStartHandler, {passive: true});
      document.addEventListener('touchmove', touchMoveHandler, {passive: true});
      document.addEventListener('touchend', touchEndHandler, {passive: true});
    }


    // Function to pause the animation
    function pauseAnimation() {
      tl.timeScale(0); // Set timeScale to 0 to pause the animation
    }

    function pauseSlowly() {
      // Increment inactive time
      inactiveTime += 100;

      // Calculate eased progress 0-1
      let progress = Math.min(1, inactiveTime / 1000);

      // Calculate scaled timeScale based on progress
      let scale = 1 - progress;

      // Apply new timeScale value
      tl.timeScale(scale);

      // If fully paused, stop playback
      if (progress >= 0.9) {
        tl.timeScale(0);
        inactiveTime = 0;
      } else {
        pauseSlowly();
      }
    }

    /// Touch start event handler
    function touchStartHandler(e) {
        // Record the initial touch position
        startTouch = e.touches[0].clientY;
    }

    // Touch move event handler
    function touchMoveHandler(e) {
        // Calculate the touch movement
        let delta = startTouch - e.touches[0].clientY;
        let currentTime = Date.now();
        let deltaTime = currentTime - lastTime;

        // Avoid division by zero
        if (deltaTime !== 0) {
            scrollSpeed = Math.abs(delta / deltaTime) * 2;
        }

        // Smooth out the animation speed
        //scrollSpeed = Math.sqrt(scrollSpeed);

        // Apply a maximum speed limit to the animation
        //scrollSpeed = Math.min(scrollSpeed, 4);

        lastTime = currentTime;
        lastDelta = delta;
  
        // Play or reverse animation based on touch movement direction
        if (delta > 0) {
            // Swiping down
            tl.timeScale(scrollSpeed);
            tl.play();
        } else {
            // Swiping up
            tl.timeScale(scrollSpeed);
            tl.reverse();
        }

        // Clear the previous timeout and set a new one
        clearTimeout(touchTimeout);
        inactiveTime = 0;
        touchTimeout = setTimeout(pauseSlowly, 1000); // Pause the animation after 200ms of inactivity

        // Update the initial touch position
        startTouch = e.touches[0].clientY;
    }

    // Touch end event handler
    function touchEndHandler() {
        // Reset the initial touch position
        startTouch = null;
    }

    // Mouse wheel event handler
    function wheelHandler(e) {
      // Calculate scroll speed
      let currentTime = Date.now();
      let deltaTime = currentTime - lastTime;
      let delta = e.originalEvent.deltaY;

      // Avoid division by zero
      if (deltaTime !== 0) {
        scrollSpeed = Math.abs(delta / deltaTime);
      }

      // Apply a function to the scroll speed to smooth out the animation speed
      scrollSpeed = Math.sqrt(scrollSpeed);

      // Apply a maximum speed limit to the animation
      scrollSpeed = Math.min(scrollSpeed, 2);

      lastTime = currentTime;
      lastDelta = delta;

      // Adjust animation speed based on scroll speed
      tl.timeScale(scrollSpeed);

      // Play or reverse animation based on touch movement direction
      if (delta > 0) {
          // Swiping down
          tl.timeScale(scrollSpeed);
          tl.play();
      } else {
          // Swiping up
          tl.timeScale(2 * scrollSpeed);
          tl.reverse();
      }

      //updateBackgroundPosition();

      // Clear the previous timeout and set a new one
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(pauseAnimation, 200); // Pause the animation after 200ms of inactivity
    }

    // Select the paper link in the navbar
    $('a[href="#paper"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #paper)

      gsap.to(tl, {progress: 5 / tl.totalDuration(), duration: Math.abs(5 - tl.time()) / 4, ease: "power1.inOut"});
    });

    $('a[href="#team"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 10 / tl.totalDuration(), duration: Math.abs(10 - tl.time()) / 4, ease: "power1.inOut"});
    });

    $('a[href="#explore"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 12 / tl.totalDuration(), duration: Math.abs(12 - tl.time()) / 4, ease: "power1.inOut"});
    });

    $('a[href="#download"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 16 / tl.totalDuration(), duration: Math.abs(16 - tl.time()) / 4, ease: "power1.inOut"});
    });

    $('a[href="#stats"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 20 / tl.totalDuration(), duration: Math.abs(20 - tl.time()) / 4, ease: "power1.inOut"});
    });

    $('#goToTop').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #top)

      gsap.to(tl, {progress: 1 / tl.totalDuration(), duration: Math.abs(1 - tl.time()) / 4, ease: "power1.inOut"});
    });
  }
});
