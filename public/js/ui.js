import * as constants from "./constants.js";
import * as elements from "./elements.js";
import * as webRTCHandler from "./webRTCHandler.js";

export const updatePersonalCode = (personalCode) => {
  const personalCodeParagraph = document.getElementById(
    "personal_code_paragraph"
  );
  personalCodeParagraph.innerHTML = personalCode;
};

export const updateLocalVideo = (stream) => {
  const localVideo = document.getElementById("local_video");
  localVideo.srcObject = stream;

  localVideo.addEventListener("loadedmetadata", () => {
    localVideo.play();
  });
};

export const showVideoCallButtons = () =>{
  showElement(document.getElementById('personal_code_video_button'));
};

export const updateRemoteVideo = (stream) => {
  const remoteVideo = document.getElementById("remote_video");
  remoteVideo.srcObject = stream;
};

export const showIncomingCallDialog = (
  callType,
  acceptCallHandler,
  rejectCallHandler
) => {
  const callTypeInfo =
    callType === constants.callType.CHAT_PERSONAL_CODE ? "Chat" : "Video";

  const incomingCallDialog = elements.getIncomingCallDialog(
    callTypeInfo,
    acceptCallHandler,
    rejectCallHandler
  );
  // removing all dialogs inside HTML dialog element
  const dialog = document.getElementById("dialog");
  dialog.querySelectorAll("*").forEach((dialog) => dialog.remove());

  dialog.appendChild(incomingCallDialog);
};

export const showCallingDialog = (rejectCallHandler) => {
  const callingDialog = elements.getCallingDialog(rejectCallHandler);

  // removing all dialogs inside HTML dialog element
  const dialog = document.getElementById("dialog");
  dialog.querySelectorAll("*").forEach((dialog) => dialog.remove());

  dialog.appendChild(callingDialog);
};

export const showInfoDialog = (preOfferAnswer) => {
  let infoDialog = null;

  if (preOfferAnswer === constants.preOfferAnswer.CALL_REJECTED) {
    infoDialog = elements.getInfoDialog(
      "Meeting declined",
      "Your peer declined to admit you"
    );
  }

  if (preOfferAnswer === constants.preOfferAnswer.CALLEE_NOT_FOUND) {
    infoDialog = elements.getInfoDialog(
      "Peer not found",
      "Please check personal code"
    );
  }

  if (preOfferAnswer === constants.preOfferAnswer.CALL_UNAVAILABLE) {
    infoDialog = elements.getInfoDialog(
      "Connection is not possible",
      "Probably your peer is busy. Please try againg later"
    );
  }

  if (infoDialog) {
    const dialog = document.getElementById("dialog");
    dialog.appendChild(infoDialog);

    setTimeout(() => {
      removeAllDialogs();
    }, [4000]);
  }
};

export const showEmojiDialog = (emojiType) =>{
  var Incomingemoji = elements.getEmojiDialog(emojiType);
  var emojiplace = document.getElementById("emojiDialog");

  emojiplace.appendChild(Incomingemoji);
  
  setTimeout(() => {
    removeAllEmojis();
  }, [4000]);

};

export const removeAllDialogs = () => {
  const dialog = document.getElementById("dialog");
  dialog.querySelectorAll("*").forEach((dialog) => dialog.remove());
};

export const removeAllEmojis = () =>{
  const emojiArea =  document.getElementById("emojiDialog");
  emojiArea.querySelectorAll("*").forEach((emojiArea) => emojiArea.remove());
}

export const removeAllConfirmHangUpDialog = () =>{
  const Confirmdialog = document.getElementById("ConfirmHangUp");
  Confirmdialog.querySelectorAll("*").forEach((Confirmdialog) => Confirmdialog.remove());
};

export const showCallElements = (callType) => {
  if (callType === constants.callType.CHAT_PERSONAL_CODE) {
    showChatCallElements();
  }

  if (callType === constants.callType.VIDEO_PERSONAL_CODE) {
    showVideoCallElements();
  }
};

const showChatCallElements = () => {
  const finishConnectionChatButtonContainer = document.getElementById(
    "finish_chat_button_container"
  );
  showElement(finishConnectionChatButtonContainer);

  const newMessageInput = document.getElementById("new_message");
  showElement(newMessageInput);
  
  //block panel
  disableDashboard();
};

const showVideoCallElements = () => {
  const callButtons = document.getElementById("call_buttons");
  showElement(callButtons);

  const placeholder = document.getElementById("video_placeholder");
  hideElement(placeholder);

  const remoteVideo = document.getElementById("remote_video");
  showElement(remoteVideo);

  const newMessageInput = document.getElementById("new_message");
  showElement(newMessageInput);

  const time = document.getElementById("clock");
  showElement(time);

  //block panel
  disableDashboard();
};

// ui call buttons

const micOnImgSrc = "./utils/images/mic.png";
const micOffImgSrc = "./utils/images/micOff.png";

export const updateMicButton = (micActive) => {
  const micButtonImage = document.getElementById("mic_button_image");
  micButtonImage.src = micActive ? micOffImgSrc : micOnImgSrc;
};

const cameraOnImgSrc = "./utils/images/camera.png";
const cameraOffImgSrc = "./utils/images/cameraOff.png";

export const updateCameraButton = (cameraActive) => {
  const cameraButtonImage = document.getElementById("camera_button_image");
  cameraButtonImage.src = cameraActive ? cameraOffImgSrc : cameraOnImgSrc;
};

// ui messages
export const appendMessage = (message, right = false) => {
  const messagesContainer = document.getElementById("messages_container");
  const messageElement = right
    ? elements.getRightMessage(message)
    : elements.getLeftMessage(message);
  messagesContainer.appendChild(messageElement);
};

export const clearMessenger = () => {
  const messagesContainer = document.getElementById("messages_container");
  messagesContainer.querySelectorAll("*").forEach((n) => n.remove());
};

// recording
export const showRecordingPanel = () => {
  const recordingButtons = document.getElementById("video_recording_buttons");
  showElement(recordingButtons);

  // hide start recording button if it is active
  const startRecordingButton = document.getElementById(
    "start_recording_button"
  );
  hideElement(startRecordingButton);
};

export const resetRecordingButtons = () => {
  const startRecordingButton = document.getElementById(
    "start_recording_button"
  );
  const recordingButtons = document.getElementById("video_recording_buttons");

  hideElement(recordingButtons);
  showElement(startRecordingButton);
};

export const switchRecordingButtons = (switchForResumeButton = false) => {
  const resumeButton = document.getElementById("resume_recording_button");
  const pauseButton = document.getElementById("pause_recording_button");

  if (switchForResumeButton) {
    hideElement(pauseButton);
    showElement(resumeButton);
  } else {
    hideElement(resumeButton);
    showElement(pauseButton);
  }
};

export const showFinalHangUp = (handleHangUp , continueChatHandler) => {
  const Confirmdialog = document.getElementById("ConfirmHangUp");
  const incomingConfirmHangUp = elements.getConfirmHangUp(handleHangUp , continueChatHandler);
  Confirmdialog.appendChild(incomingConfirmHangUp);
};

//ui after ending call
export const updateUIAgain = (callType) =>{
  enableDashboard();

  //hide the call buttons
  if(callType === constants.callType.VIDEO_PERSONAL_CODE){
    hideElement(document.getElementById('call_buttons'));
  }else{
    hideElement(document.getElementById('finish_chat_button_container'));
  }
  hideElement(document.getElementById('new_message'));
  clearMessenger();

  updateMicButton(false);
  updateCameraButton(false);

  //hide remote video and show placeholder
  hideElement(document.getElementById('remote_video'));
  showElement(document.getElementById('video_placeholder'));

  showElement(document.getElementById("mic_button"));
  showElement(document.getElementById("camera_button"));

  const time = document.getElementById("clock");
  hideElement(time);

  //remove dialogs if any
    removeAllDialogs();
    removeAllConfirmHangUpDialog();
};

export const updateUIForContinueChat = ()=>{

  hideElement(document.getElementById("start_recording_button"));
  hideElement(document.getElementById("screen_sharing_button"));
  hideElement(document.getElementById("mic_button"));
  hideElement(document.getElementById("camera_button"));

  updateMicButton(false);
  updateCameraButton(false);

  hideElement(document.getElementById('remote_video'));

  removeAllDialogs();
  removeAllConfirmHangUpDialog();
};
// ui helper functions

const enableDashboard = () => {
  const dashboardBlocker = document.getElementById("dashboard_blur");
  if (!dashboardBlocker.classList.contains("display_none")) {
    dashboardBlocker.classList.add("display_none");
  }
 
};

const disableDashboard = () => {
  const dashboardBlocker = document.getElementById("dashboard_blur");
  if (dashboardBlocker.classList.contains("display_none")) {
    dashboardBlocker.classList.remove("display_none");
  }
 
};


const hideElement = (element) => {
  if (!element.classList.contains("display_none")) {
    element.classList.add("display_none");
  }
};

const showElement = (element) => {
  if (element.classList.contains("display_none")) {
    element.classList.remove("display_none");
  }
};

