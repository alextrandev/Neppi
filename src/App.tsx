import React, { useState, useEffect } from "react";
import { Home } from "./components/screens/Home";
import { CreateEvent } from "./components/screens/CreateEvent";
import { ConnectingScreen } from "./components/screens/ConnectingScreen";
import { CameraConnectionFlow } from "./components/screens/CameraConnectionFlow";
import { SetPictureCount } from "./components/screens/SetPictureCount";
import { SetCountdown } from "./components/screens/SetCountdown";
import { EventConfirmation } from "./components/screens/EventConfirmation";
import { OngoingEvent } from "./components/screens/OngoingEvent";
import { PromptFilter } from "./components/screens/PromptFilter";
import { CameraPositions } from "./components/screens/CameraPositions";
import { PhotosSentSuccess } from "./components/screens/PhotosSentSuccess";
import { TelegramChatSimulation } from "./components/screens/TelegramChatSimulation";
import { Modal } from "./components/Modal";
import { FloatingSpheres } from "./components/FloatingSpheres";

type Screen =
  | "home"
  | "createEvent"
  | "connecting"
  | "cameraConnectionFlow"
  | "setPictureCount"
  | "setCountdown"
  | "eventConfirmation"
  | "ongoingEvent"
  | "promptFilter"
  | "cameraPositions"
  | "photosSentSuccess"
  | "telegramChat";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("home");
  const [showQRModal, setShowQRModal] = useState(false);
  const [showAutoPopup, setShowAutoPopup] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState<
    Screen[]
  >([]);

  // Event data state
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    destinations: [] as string[],
    aiPrompt: "",
    pictureCount: 20,
    countdownSeconds: 10,
    filterApplied: "",
  });

  // Set iOS status bar color
  useEffect(() => {
    // Set theme color for mobile browsers
    let themeColorMeta = document.querySelector(
      'meta[name="theme-color"]',
    );
    if (!themeColorMeta) {
      themeColorMeta = document.createElement("meta");
      themeColorMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute("content", "#e7deff");

    // Set iOS status bar style
    let appleStatusBar = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
    );
    if (!appleStatusBar) {
      appleStatusBar = document.createElement("meta");
      appleStatusBar.setAttribute(
        "name",
        "apple-mobile-web-app-status-bar-style",
      );
      document.head.appendChild(appleStatusBar);
    }
    appleStatusBar.setAttribute("content", "default");

    // Ensure viewport covers full screen including status bar
    let viewportMeta = document.querySelector(
      'meta[name="viewport"]',
    );
    if (viewportMeta) {
      const currentContent =
        viewportMeta.getAttribute("content") || "";
      if (!currentContent.includes("viewport-fit")) {
        viewportMeta.setAttribute(
          "content",
          currentContent + ", viewport-fit=cover",
        );
      }
    }
  }, []);

  const handleNavigation = (
    screen: Screen,
    skipStack: boolean = false,
  ) => {
    if (!skipStack) {
      setNavigationHistory([
        ...navigationHistory,
        currentScreen,
      ]);
    }
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <Home
            onCreateEvent={() =>
              setCurrentScreen("createEvent")
            }
            onMyEvents={() => setCurrentScreen("ongoingEvent")}
            onShareQR={() => setShowQRModal(true)}
            onStartCameraFlow={() =>
              setCurrentScreen("cameraConnectionFlow")
            }
          />
        );

      case "createEvent":
        return (
          <CreateEvent
            onSetupCamera={(data) => {
              setEventData({ ...eventData, ...data });
              handleNavigation("setPictureCount", true);
            }}
            onBack={() => setCurrentScreen("home")}
          />
        );

      case "cameraConnectionFlow":
        return (
          <CameraConnectionFlow
            onComplete={() => setCurrentScreen("ongoingEvent")}
          />
        );

      case "connecting":
        return (
          <ConnectingScreen
            onComplete={() =>
              setCurrentScreen("setPictureCount")
            }
          />
        );

      case "setPictureCount":
        return (
          <SetPictureCount
            onNext={(count) => {
              setEventData({
                ...eventData,
                pictureCount: count,
              });
              setCurrentScreen("setCountdown");
            }}
          />
        );

      case "setCountdown":
        return (
          <SetCountdown
            onConfirm={(seconds) => {
              setEventData({
                ...eventData,
                countdownSeconds: seconds,
              });
              setCurrentScreen("eventConfirmation");
            }}
            onBackToHome={() => setCurrentScreen("home")}
            onMyEvents={() => setCurrentScreen("ongoingEvent")}
          />
        );

      case "eventConfirmation":
        return (
          <EventConfirmation
            eventName={eventData.eventName}
            eventDate={eventData.eventDate}
            destinations={eventData.destinations}
            aiPrompt={eventData.aiPrompt}
            pictureCount={eventData.pictureCount}
            countdownSeconds={eventData.countdownSeconds}
            onShareEvent={() => setShowQRModal(true)}
            onBackToHome={() => setCurrentScreen("home")}
          />
        );

      case "ongoingEvent":
        return (
          <OngoingEvent
            onCheckPositions={() =>
              setCurrentScreen("cameraPositions")
            }
            onPromptFilter={() =>
              setCurrentScreen("promptFilter")
            }
            onBack={() => setCurrentScreen("home")}
            onSendComplete={() =>
              setCurrentScreen("photosSentSuccess")
            }
          />
        );

      case "promptFilter":
        return (
          <PromptFilter
            onContinue={() => setCurrentScreen("ongoingEvent")}
            onBackToHome={() => setCurrentScreen("home")}
            onBack={() => setCurrentScreen("ongoingEvent")}
            onSendComplete={(filterApplied) => {
              setEventData({ ...eventData, filterApplied });
              setCurrentScreen("photosSentSuccess");
            }}
            photoCount={eventData.pictureCount}
            destination="Event Team Channel"
            destinationPlatform="Telegram"
          />
        );

      case "cameraPositions":
        return (
          <CameraPositions
            onBack={() => setCurrentScreen("ongoingEvent")}
          />
        );

      case "photosSentSuccess":
        return (
          <PhotosSentSuccess
            filterApplied={eventData.filterApplied}
            photoCount={eventData.pictureCount}
            destinations={[
              {
                platform: "Telegram",
                name: "Event Team Channel",
              },
              { platform: "WhatsApp", name: "Friends Group" },
              {
                platform: "Google Drive",
                name: "NYE Party 2025 Album",
              },
            ]}
            onViewPhotos={() =>
              setCurrentScreen("telegramChat")
            }
            onBackToEvent={() =>
              setCurrentScreen("ongoingEvent")
            }
            onSendMore={() => setCurrentScreen("promptFilter")}
          />
        );

      case "telegramChat":
        return (
          <TelegramChatSimulation
            onBack={() => setCurrentScreen("photosSentSuccess")}
            photoCount={eventData.pictureCount}
            filterApplied={eventData.filterApplied}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          currentScreen === "telegramChat"
            ? "#FFFFFF"
            : "radial-gradient(circle at 50% 50%, #EDE7FF 0%, #D7CEFF 100%)",
        padding:
          currentScreen === "telegramChat" ? "0" : "1.5rem",
      }}
    >
      {/* Floating Spheres Background - Only for non-Telegram screens */}
      {currentScreen !== "telegramChat" && <FloatingSpheres />}

      {/* Content */}
      <div
        className="relative z-10 pt-5"
        style={{
          maxWidth:
            currentScreen === "telegramChat" ? "100%" : "28rem",
          margin:
            currentScreen === "telegramChat" ? "0" : "0 auto",
        }}
      >
        {renderScreen()}
      </div>

      {/* QR Modal */}
      <Modal
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        title="Share QR Code"
        message="Scan this QR code with your camera to connect."
      />
    </div>
  );
}