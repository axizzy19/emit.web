const appImages = {
    mainPage: [
        require('../assets/images/RanepaLogosB.svg'),
        require('../assets/images/RanepaLogosWhiteB.svg'),
        require('../assets/images/BCDescriptionBackground.svg'),
        require('../assets/images/BCCorner.svg'),
        require('../assets/images/BCCircles.svg'),
        require('../assets/images/BCFoto-1.png'),
        require('../assets/images/BCFoto-2.png'),
        require('../assets/images/BCLinesDivision.svg'),
        require('../assets/images/BCChart.png'),
        require('../assets/images/favicon.svg'),
        require('../assets/images/TitleArrows.svg'),
        require('../assets/images/CCFoto1.png'),
        require('../assets/images/CCFoto2.png'),
        require('../assets/images/DescriptionLines.svg'),
        require('../assets/images/EventsFoto1.png'),
        require('../assets/images/CalendarLines.svg'),
        require('../assets/images/EventsFoto2.png'),
        require('../assets/images/EventsFoto3.png'),
        require('../assets/images/StarImage.png'),
        require('../assets/images/PresidentImage.png'),
        require('../assets/images/PresidentBackground.svg'),
        require('../assets/images/TeamFoto.png'),
        require('../assets/images/ArrowsRed.png'),
        require('../assets/images/CCK-foto-1.svg'),
        require('../assets/images/CCK-foto-2.png'),
        require('../assets/images/CCK-foto-events-1.png'),
        require('../assets/images/CalendarLinesWhite.png'),
        require('../assets/images/CCK-foto-events-2.png'),
        require('../assets/images/CCK-foto-events-3.png'),
        require('../assets/images/PresidentCCKFoto.png'),
        require('../assets/images/PresidentCCKBackground.svg'),
        require('../assets/images/CCKTeamFoto.png'),
        require('../assets/images/ClubsArrows.svg'),
        require('../assets/images/ClubsBackground.svg'),
        require('../assets/images/Club01.svg'),
        require('../assets/images/KnowMoreArrow.svg'),
        require('../assets/images/ClubCSC.png'),
        require('../assets/images/ClubBC.png'),
        require('../assets/images/ClubDebates.png'),
        require('../assets/images/ClubEmeeting.png'),
        require('../assets/images/CSCLeftTopCorner.svg'),
        require('../assets/images/CSCImage.png'),
        require('../assets/images/CSCBackground.png'),
        require('../assets/images/CSCFigures.svg'),
        require('../assets/images/CSCChat.png'),
        require('../assets/images/DebatesBackground.svg'),
        require('../assets/images/DebatesFoto-1.png'),
        require('../assets/images/DebatesFoto-2.png'),
        require('../assets/images/DebatesClubLogo.png'),
        require('../assets/images/EmeetingBackground.svg'),
        require('../assets/images/emeeting-foto-1.png'),
        require('../assets/images/EmeetingCornerLeftTop.png'),
        require('../assets/images/emeeting-foto-2.png'),
        require('../assets/images/EmeetingCornerRightBottom.png'),
        require('../assets/images/PodcastBackground.png'),
        require('../assets/images/PodcastFoto-1.png'),
        require('../assets/images/PodcastFoto-2.png'),
        require('../assets/images/BITFoto.png'),
        require('../assets/images/BITCircles.svg'),
        require('../assets/images/PulsarFoto.png'),
        require('../assets/images/BCDescriptionBackground.svg'),
        require('../assets/images/BCCorner.svg'),
        require('../assets/images/BCCircles.svg'),
        require('../assets/images/BCFoto-1.png'),
        require('../assets/images/BCFoto-2.png'),
        require('../assets/images/BCLinesDivision.svg'),
        require('../assets/images/BCChart.png'),
        require('../assets/images/favicon.svg'),
        require('../assets/images/logo.svg'),
        require('../assets/images/CornerLineLeftUpWard.svg'),
        require('../assets/images/CornerLineRightBottom.svg'),
        require('../assets/images/CornerPictureRightTop.svg'),
        require('../assets/images/CornerPictureLeftBottom.svg'),
        require('../assets/images/vk-logo.png'),
        require('../assets/images/telegram-logo.png'),
    ]
};

const preloadedImages = new Set();

export const preloadPageImages = (pageKey) => {
  const images = appImages[pageKey];
  if (!images) return Promise.resolve();
  
  const loadPromises = images.map(src => {
    return new Promise((resolve) => {
      if (preloadedImages.has(src)) {
        resolve();
        return;
      }
      
      const img = new Image();
      img.onload = () => {
        preloadedImages.add(src);
        resolve();
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        resolve();
      };
      img.src = src;
    });
  });
  
  return Promise.all(loadPromises);
};

export const preloadAllImages = async () => {
  console.log('Preloading all application images...');
  
  const allImages = Object.values(appImages).flat();
  const uniqueImages = [...new Set(allImages)];
  
  const loadPromises = uniqueImages.map(src => {
    return new Promise((resolve) => {
      if (preloadedImages.has(src)) {
        resolve();
        return;
      }
      
      const img = new Image();
      img.onload = () => {
        preloadedImages.add(src);
        resolve();
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        resolve();
      };
      img.src = src;
    });
  });
  
  await Promise.all(loadPromises);
  console.log('All images preloaded');
};

export const getPageImages = (pageKey) => {
  return appImages[pageKey] || [];
};

export const areImagesPreloaded = (pageKey) => {
  const images = appImages[pageKey];
  if (!images) return true;
  
  return images.every(src => preloadedImages.has(src));
};