import * as constants from "./constants.js";

export const getIncomingCallDialog = (
  callTypeInfo,
  acceptCallHandler,
  rejectCallHandler
) => {
  console.log("getting incoming call dialog");
  const dialog = document.createElement("div");
  dialog.classList.add("dialog_wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = `Incoming ${callTypeInfo} Call`;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dialog_image_container");
  const image = document.createElement("img");
  const avatarImagePath = "./utils/images/cam.gif";
  image.src = avatarImagePath;
  imageContainer.appendChild(image);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("dialog_button_container");

  const acceptCallButton = document.createElement("button");
  acceptCallButton.classList.add("dialog_accept_call_button");
  const acceptCallImg = document.createElement("img");
  acceptCallImg.classList.add("dialog_button_image");
  const acceptCallImgPath = "./utils/images/acceptCall.png";
  acceptCallImg.src = acceptCallImgPath;
  acceptCallButton.append(acceptCallImg);
  buttonContainer.appendChild(acceptCallButton);

  const rejectCallButton = document.createElement("button");
  rejectCallButton.classList.add("dialog_reject_call_button");
  const rejectCallImg = document.createElement("img");
  rejectCallImg.classList.add("dialog_button_image");
  const rejectCallImgPath = "./utils/images/rejectCall.png";
  rejectCallImg.src = rejectCallImgPath;
  rejectCallButton.append(rejectCallImg);
  buttonContainer.appendChild(rejectCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(imageContainer);
  dialogContent.appendChild(buttonContainer);

  acceptCallButton.addEventListener("click", () => {
    acceptCallHandler();
  });

  rejectCallButton.addEventListener("click", () => {
    rejectCallHandler();
  });

  return dialog;
};

export const getCallingDialog = (rejectCallHandler) => {
  const dialog = document.createElement("div");
  dialog.classList.add("dialog_wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = `Calling`;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dialog_image_container");
  const image = document.createElement("img");
  const avatarImagePath = "./utils/images/cam.gif";
  image.src = avatarImagePath;
  imageContainer.appendChild(image);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("dialog_button_container");

  const hangUpCallButton = document.createElement("button");
  hangUpCallButton.classList.add("dialog_reject_call_button");
  const hangUpCallImg = document.createElement("img");
  hangUpCallImg.classList.add("dialog_button_image");
  const rejectCallImgPath = "./utils/images/rejectCall.png";
  hangUpCallImg.src = rejectCallImgPath;
  hangUpCallButton.append(hangUpCallImg);
  buttonContainer.appendChild(hangUpCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(imageContainer);
  dialogContent.appendChild(buttonContainer);

  hangUpCallButton.addEventListener('click' , () =>{
    rejectCallHandler();
  });
  return dialog;
};

export const getInfoDialog = (dialogTitle, dialogDescription) => {
  const dialog = document.createElement("div");
  dialog.classList.add("dialog_wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = dialogTitle;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dialog_image_container");
  const image = document.createElement("img");
  const avatarImagePath = "./utils/images/cam.gif";
  image.src = avatarImagePath;
  imageContainer.appendChild(image);

  const description = document.createElement("p");
  description.classList.add("dialog_description");
  description.innerHTML = dialogDescription;

  dialogContent.appendChild(title);
  dialogContent.appendChild(imageContainer);
  dialogContent.appendChild(description);

  return dialog;
};

export const getLeftMessage = (message) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message_left_container");
  const messageParagraph = document.createElement("p");
  messageParagraph.classList.add("message_left_paragraph");
  messageParagraph.innerHTML = message;
  messageContainer.appendChild(messageParagraph);

  return messageContainer;
};

export const getRightMessage = (message) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message_right_container");
  const messageParagraph = document.createElement("p");
  messageParagraph.classList.add("message_right_paragraph");
  messageParagraph.innerHTML = message;
  messageContainer.appendChild(messageParagraph);

  return messageContainer;
};

export const getEmojiDialog = (emojiType) => {
  var emojiPlace = document.createElement("div");

  var imageContainer = document.createElement("div");
  imageContainer.classList.add("emoji_image");
  const image = document.createElement("img");
  var EmojiImagePath = "";
  
  if(emojiType === constants.emojiType.CLAP)
  {
    EmojiImagePath = "./utils/images/GIFClap.gif";

  } else if(emojiType === constants.emojiType.HAPPY){

    EmojiImagePath = "./utils/images/GIFhappy.gif";

  }else if(emojiType === constants.emojiType.SAD){

    EmojiImagePath = "./utils/images/GIFSad.gif";

  }else if(emojiType === constants.emojiType.THUMB){

    EmojiImagePath = "./utils/images/GIFthumbsUp.gif";

  }else if(emojiType === constants.emojiType.PARTY){
    EmojiImagePath = "./utils/images/GIFParty.gif"; 
  }

  image.src = EmojiImagePath;
  imageContainer.appendChild(image);

  emojiPlace.appendChild(imageContainer);

  return emojiPlace;
}

export const getConfirmHangUp = (handleHangUp , continueChatHandler) =>{
  const confirmdialog = document.createElement("div");
  confirmdialog.classList.add("confirmdialog_wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("CondirmdialogContent");
  confirmdialog.appendChild(dialogContent);

  const imgCont = document.createElement("div");
  imgCont.classList.add("imgWrapper");
  
  const EndCallimage = document.createElement("img");
  EndCallimage.classList.add("confirm_img");
  const EndCallimagePath = "./utils/images/EndCall.png";
  EndCallimage.src = EndCallimagePath;

  const continueChatimage = document.createElement("img");
  continueChatimage.classList.add("confirm_img");
  const continueChatimagePath = "./utils/images/continueChat.png";
  continueChatimage.src = continueChatimagePath;

  imgCont.appendChild(EndCallimage);
  imgCont.appendChild(continueChatimage);


  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("confirmdialog_button_container");

  const ConfirmHangUpButton = document.createElement("button");
  ConfirmHangUpButton.classList.add("confirm_hangUp_call_button");
  ConfirmHangUpButton.setAttribute('id',"confirmHangUp");
  ConfirmHangUpButton.innerHTML="End The call";
  buttonContainer.appendChild(ConfirmHangUpButton);

  const ContinueChatButton = document.createElement("button");
  ContinueChatButton.classList.add("confirm_continue_call_button");
  ContinueChatButton.setAttribute('id',"continueChat");
  ContinueChatButton.innerHTML = "Continue with chat";
  buttonContainer.appendChild(ContinueChatButton);

  dialogContent.appendChild(imgCont);
  dialogContent.appendChild(buttonContainer);

  ConfirmHangUpButton.addEventListener("click", () => {
    handleHangUp();
  });

  ContinueChatButton.addEventListener("click" , () => {
    continueChatHandler();
  })

  return confirmdialog;
}


