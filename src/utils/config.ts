import dotenv from 'dotenv';

dotenv.config();

const {
    TOKEN,
    ID,
    COLOR,
    DEVELOPER_ID,
    VERSION,
    INVITE_BOT_URL,
    SUPPORT_SERVER_URL,
    WEB_SITE_URL
} = process.env;

if (
    !TOKEN ||
    !ID ||
    !COLOR ||
    !DEVELOPER_ID ||
    !VERSION ||
    !INVITE_BOT_URL ||
    !SUPPORT_SERVER_URL ||
    !WEB_SITE_URL
) {
    throw new Error('Missing environment variables');
}

export const config = {
    token: TOKEN,
    id: ID,
    color: COLOR,
    developerId: DEVELOPER_ID,
    version: VERSION,
    inviteBotUrl: INVITE_BOT_URL,
    supportServerUrl: SUPPORT_SERVER_URL,
    webSiteUrl: WEB_SITE_URL
};
