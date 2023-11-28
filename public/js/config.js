'use strict';

const broadcastSettings = {
    buttons: {
        copyRoom: true,
        shareRoom: true,
        screenShareStart: true,
        video: true,
        recordingStart: false,// earlier it was true
        messagesOpenForm: true,
        viewersOpenForm: true,
        fullScreenOn: true,
        pictureInPicture: true,
        close: true,
    },
    options: {
        settings: true,// earlier it was true
        start_full_screen: false,
        zoom_video: true,
        show_chat_on_msg: true,
        speech_msg: false,
    },
};

const viewerSettings = {
    buttons: {
        audio: true,
        snapshot: true,
        recordingStart: false,// earlier it was true
        fullScreenOn: true,
        message: true,
        pictureInPicture: true,
        close: true,
    },
    options: {
        start_full_screen: false,
        zoom_video: true,
        redirect_url: '/',
    },
};
